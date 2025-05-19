"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debuggerPaused$ = exports.scriptParsed$ = exports.setBreakpoint = exports.getProperties = exports.enableDebugger = exports.scriptParsedEventHandlerInitialized$ = exports.inspectorDisconnected$ = void 0;
exports.isSessionConnected = isSessionConnected;
exports.disconnectSession = disconnectSession;
exports.connectInspector = connectInspector;
const rxjs_1 = require("rxjs");
const inspector_1 = require("inspector");
const inspectorSession = new inspector_1.Session();
let sessionConnected = false;
const inspectorDisconnectedSubject = new rxjs_1.Subject();
exports.inspectorDisconnected$ = inspectorDisconnectedSubject.asObservable();
const scriptParsedEventHandlerInitializedSubject = new rxjs_1.Subject();
exports.scriptParsedEventHandlerInitialized$ = scriptParsedEventHandlerInitializedSubject
    .asObservable()
    .pipe((0, rxjs_1.share)({ resetOnRefCountZero: false }));
const debugSessionPost = (method, params = undefined) => {
    return new rxjs_1.Observable((subscriber) => {
        try {
            inspectorSession.post(method, params, (err, result) => {
                if (err) {
                    console.log(`Error in debugSession.post for method ${method}`, err);
                    subscriber.error(err);
                }
                else {
                    console.log(`debugSession.post for method ${method}`, params);
                    subscriber.next(result);
                    subscriber.complete();
                }
            });
        }
        catch (error) {
            subscriber.error(error);
            subscriber.complete();
            console.error(`debugSession.post caught error for method ${method}`, params, error);
        }
    });
};
function isSessionConnected() {
    return sessionConnected;
}
function disconnectSession() {
    console.log("Disconnecting inspector");
    inspectorSession.disconnect();
    sessionConnected = false;
    inspectorDisconnectedSubject.next();
}
// export const removeBreakpoint = (breakpointId) =>
//   debugSessionPost("Debugger.removeBreakpoint", {
//     breakpointId,
//   } as inspector.Debugger.RemoveBreakpointParameterType);
function connectInspector() {
    console.log("connect inspector");
    inspectorSession.connect();
    sessionConnected = true;
}
const enableDebugger = () => {
    return debugSessionPost("Debugger.enable").pipe((0, rxjs_1.tap)(() => console.log("Debugger Enabled")), (0, rxjs_1.share)());
};
exports.enableDebugger = enableDebugger;
const getProperties = (objectId) => debugSessionPost("Runtime.getProperties", {
    objectId,
});
exports.getProperties = getProperties;
//as Observable<Debugger.SetBreakpointReturnType>
const setBreakpoint = (scriptId, lineNumber, columnNumber) => debugSessionPost("Debugger.setBreakpoint", {
    location: {
        scriptId,
        lineNumber: lineNumber - 1,
        columnNumber: columnNumber - 1,
    },
}); //.pipe(catchError((error) => of(error)));
exports.setBreakpoint = setBreakpoint;
exports.scriptParsed$ = new rxjs_1.Observable((subscriber) => {
    const handler = (script) => {
        subscriber.next(script);
    };
    inspectorSession.on("Debugger.scriptParsed", handler);
    console.log("Script Parsed Event Handler Added");
    scriptParsedEventHandlerInitializedSubject.next();
    return () => {
        inspectorSession.off("Debugger.scriptParsed", handler);
        console.log("Script Parsed Event Handler Removed");
    };
});
exports.debuggerPaused$ = new rxjs_1.Observable((subscriber) => {
    const handler = (event) => {
        console.log("Debugger Paused Event Triggered");
        subscriber.next(event);
        // event.params.hitBreakpoints?.forEach((breakpoint) => {
        //   console.log("Breakpoint Hit", breakpoint);
        // });
    };
    inspectorSession.on("Debugger.paused", handler);
    console.log("Debugger Paused Event Handler Added");
    return () => {
        inspectorSession.off("Debugger.paused", handler);
        console.log("Debugger Paused Event Handler Removed");
    };
});
