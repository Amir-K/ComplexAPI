"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBreakpointsSet$ = exports.tracePointBreakPointMap$ = void 0;
const rxjs_1 = require("rxjs");
const scriptid_1 = require("./scriptid");
const lookupSource_1 = require("../lookupSource");
const path = __importStar(require("path"));
const url_1 = require("url");
const debugger_api_1 = require("../debugger-api");
const inspector_1 = require("./inspector");
const setBreakpointsHandler$ = scriptid_1.scriptId$.pipe((0, rxjs_1.tap)((x) => console.log("in setBreakpointsHandler$", x)), (0, rxjs_1.mergeMap)(({ scriptId, codeFile, sourceMapURL, sourceURL }) => (0, rxjs_1.from)(codeFile?.tracePoints).pipe((0, rxjs_1.mergeMap)(({ columnNumber, lineNumber, tracePointId: tracePointId }) => {
    if (sourceMapURL) {
        console.log(sourceMapURL, sourceURL);
        console.log(path.dirname((0, url_1.fileURLToPath)(sourceURL)), sourceMapURL);
    }
    const position$ = sourceMapURL
        ? (0, lookupSource_1.lookupSource$)(codeFile.fileName, lineNumber, path.join(path.dirname((0, url_1.fileURLToPath)(sourceURL)), sourceMapURL)).pipe((0, rxjs_1.takeUntil)(debugger_api_1.inspectorDisconnected$), (0, rxjs_1.map)((mappedPositions) => {
            if (mappedPositions && mappedPositions.length > 0) {
                return {
                    lineNumber: mappedPositions[0].line,
                    columnNumber: mappedPositions[0].column || 1,
                };
            }
            return { lineNumber, columnNumber };
        }))
        : (0, rxjs_1.from)([{ lineNumber, columnNumber }]);
    return position$.pipe((0, rxjs_1.tap)((x) => console.log("Attempting to set breakpoint", JSON.stringify(x, null, 2))), (0, rxjs_1.mergeMap)(({ lineNumber, columnNumber }) => (0, debugger_api_1.setBreakpoint)(scriptId, lineNumber, columnNumber).pipe((0, rxjs_1.takeUntil)(debugger_api_1.inspectorDisconnected$), (0, rxjs_1.map)(({ breakpointId }) => ({ breakpointId, tracePointId })))));
}))), (0, rxjs_1.tap)((x) => console.log("In setBreakpointsHandler$", JSON.stringify(x, null, 2))), (0, rxjs_1.repeat)());
exports.tracePointBreakPointMap$ = setBreakpointsHandler$.pipe((0, rxjs_1.withLatestFrom)(inspector_1.inspectorConnected$), (0, rxjs_1.map)(([{ tracePointId, breakpointId }, config]) => {
    return {
        breakpointId,
        tracePointId,
        executionTimePair: config.executionTimePairs.find((x) => x.startTracePointId === tracePointId || x.endTracePointId === tracePointId),
    };
}), (0, rxjs_1.scan)((acc, { breakpointId, tracePointId }) => {
    return [...acc, { breakpointId, tracePointId }];
}, []), (0, rxjs_1.share)());
exports.allBreakpointsSet$ = exports.tracePointBreakPointMap$.pipe((0, rxjs_1.withLatestFrom)(inspector_1.inspectorConnected$), (0, rxjs_1.filter)(([tpMap, config]) => {
    return tpMap.length >= config.codeFiles.reduce((acc, file) => acc + file.tracePoints.length, 0);
}), (0, rxjs_1.tap)(() => console.log("All breakpoints set")), (0, rxjs_1.shareReplay)({ bufferSize: 1, refCount: false }));
