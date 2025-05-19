"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeLiveDebugger = initializeLiveDebugger;
global.XMLHttpRequest = require("xhr2");
require("dotenv").config();
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const api_1 = require("./api");
const debugger_api_1 = require("./debugger-api");
const toolcalls_1 = require("./toolcalls");
const spawnshadow_1 = require("./spawnshadow");
const toolcalls_2 = require("./toolcalls");
const apikeys_1 = require("./observables/apikeys");
const config_1 = require("./observables/config");
const inspector_1 = require("./observables/inspector");
const scriptid_1 = require("./observables/scriptid");
const breakpoints_1 = require("./observables/breakpoints");
// Flow:
// 1) Intialize API Key
// 2) Start polling configs from broker server
// 3) Once a NEW config is pulled, remove exisitng breakpoint, if any.
// 4) Enable observable to listen for debuggerpaused event and detect everytime breakpoint is hit, get its values, and emit the breakpoint values on http
// 5) setup observable to listen for scriptparsed events. everytime breakpoint is found in script, get its scriptid
// 6) listen for changes to config, when new configs are received remove exisitng breakpoint and set new one
// 7) everytime a new breakpoint is set, disable and enable debugger to retrigger scriptparsed events
// 8) do everything in order for now, don't skip or cancel any events
// 9) disable debugger when new config contains no breakpoints
// 10) enable debugger only when observables capturing scriptparsed and debugger paused are already initialized. they should be initialized as soon as new config
// contains breakpoints.
let initialized = false;
function resolveHelper(resolve, msg) {
    console.log(msg);
    resolve();
}
async function initializeLiveDebugger(args) {
    new Promise((resolve) => {
        if (initialized) {
            resolveHelper(resolve, "Live Debugger already initialized");
            return;
        }
        initialized = true;
        const apiKey = process.env.LIVEDEBUGGER_API_KEY || args.apiKey;
        const shadowApiKey = process.env.LIVEDEBUGGER_SHADOW_API_KEY || args.shadowApiKey;
        if (process.env.LIVEDEBUGGER_IS_SHADOW !== "true" && !shadowApiKey) {
            throw new Error("Shadow API key is required");
        }
        if (!apiKey) {
            throw new Error("API key is required");
        }
        (0, apikeys_1.setApiKey)(apiKey);
        const handleEnableDebugger$ = debugger_api_1.scriptParsedEventHandlerInitialized$.pipe((0, operators_1.takeUntil)(debugger_api_1.inspectorDisconnected$), (0, operators_1.tap)(() => console.log("Enabling Debugger")), (0, operators_1.mergeMap)(() => (0, debugger_api_1.enableDebugger)()), (0, operators_1.repeat)());
        handleEnableDebugger$.subscribe();
        const shadowShouldBeRunning$ = config_1.config$.pipe((0, operators_1.map)((config) => !!config?.shadowEnabled), (0, operators_1.distinctUntilChanged)(), (0, operators_1.share)());
        const spawnShadow$ = shadowShouldBeRunning$.pipe((0, operators_1.filter)((shouldBeRunning) => shouldBeRunning), (0, operators_1.tap)(() => console.log("Spawning shadow")), (0, operators_1.tap)(() => (0, spawnshadow_1.spawnShadow)({ shadowApiKey: shadowApiKey, hostApiKey: apiKey, env: args.env })));
        const stopShadow$ = shadowShouldBeRunning$.pipe((0, operators_1.filter)((shouldBeRunning) => !shouldBeRunning), (0, operators_1.tap)(() => (0, spawnshadow_1.stopShadow)()));
        spawnShadow$.subscribe();
        stopShadow$.subscribe();
        (0, toolcalls_2.handleToolCalls$)(inspector_1.inspectorConnected$, debugger_api_1.inspectorDisconnected$, args.pool).subscribe();
        const allScriptId$ = scriptid_1.scriptId$.pipe((0, operators_1.scan)((acc, value) => [...acc, value], []), (0, operators_1.startWith)([]));
        const paused$ = inspector_1.inspectorConnected$.pipe((0, operators_1.takeUntil)(debugger_api_1.inspectorDisconnected$), (0, operators_1.mergeMap)(() => debugger_api_1.debuggerPaused$.pipe((0, operators_1.takeUntil)(debugger_api_1.inspectorDisconnected$))), (0, operators_1.share)());
        const hitBreakPoint$ = paused$.pipe((0, operators_1.takeUntil)(debugger_api_1.inspectorDisconnected$), (0, operators_1.mergeMap)((event) => {
            const timestamp = Date.now();
            const callFrames = event?.params?.callFrames;
            return (event.params.hitBreakpoints?.map((breakpointId) => ({
                breakpointId,
                callFrames,
                timestamp,
            })) || []);
        }));
        const allHitBreakpoints$ = hitBreakPoint$.pipe((0, operators_1.scan)((acc, { breakpointId, timestamp }) => {
            return [...acc, { breakpointId, timestamp }];
        }, []), (0, operators_1.distinctUntilChanged)(), (0, operators_1.share)());
        const handleBreakPoint$ = hitBreakPoint$.pipe((0, operators_1.tap)((x) => console.log("in handleBreakPoint$", x)), (0, operators_1.withLatestFrom)(allScriptId$), (0, operators_1.map)(([{ callFrames, breakpointId, timestamp }, allScriptIds]) => {
            return callFrames
                .map(({ location, scopeChain }) => {
                const scriptIdAndCodeFile = allScriptIds.find(({ scriptId }) => scriptId === location.scriptId);
                if (!scriptIdAndCodeFile) {
                    return undefined;
                }
                const objectId = scopeChain.find(({ type }) => type === "local")?.object.objectId;
                if (!objectId) {
                    return undefined;
                }
                return {
                    objectId,
                    breakpointId,
                    timestamp,
                };
            })
                .filter((object) => object !== undefined);
        }), (0, operators_1.filter)((objects) => objects.length !== 0), (0, operators_1.concatMap)((objects) => (0, rxjs_1.from)(objects).pipe((0, operators_1.concatMap)((object) => (0, debugger_api_1.getProperties)(object.objectId).pipe((0, operators_1.map)(({ result }) => result.map(({ value, name }) => ({
            value: value?.value,
            type: value?.type,
            timestamp: object.timestamp,
            name,
            breakpointId: object.breakpointId,
        }))))))), (0, operators_1.withLatestFrom)(breakpoints_1.tracePointBreakPointMap$), (0, operators_1.map)(([objects, allMeasurementBreakPoints]) => {
            return objects.map((object) => ({
                value: object.value,
                type: object.type,
                timestamp: object.timestamp,
                name: object.name,
                tracePointId: allMeasurementBreakPoints.find((x) => x.breakpointId === object.breakpointId)
                    ?.tracePointId,
            }));
        }), (0, operators_1.tap)((x) => console.log("emitting from handleBreakPoint$", x)));
        const handleExecutionTime$ = hitBreakPoint$.pipe((0, operators_1.withLatestFrom)(breakpoints_1.tracePointBreakPointMap$, inspector_1.inspectorConnected$, allHitBreakpoints$), (0, operators_1.map)(([{ breakpointId, timestamp }, allMeasurementBreakPoints, config, allHitBreakpoints]) => {
            // First see if the breakpoint is an execution time breakpoint
            const point = allMeasurementBreakPoints.find(({ breakpointId: bpId }) => bpId === breakpointId);
            if (!point) {
                return undefined;
            }
            // Check if the breakpoint is an end point of an execution time pair
            const pair = config.executionTimePairs.find(({ endTracePointId }) => endTracePointId === point.tracePointId);
            if (!pair) {
                return undefined;
            }
            // Get breakpoint id of start breakpoint
            const startBreakPointId = allMeasurementBreakPoints.find(({ tracePointId }) => tracePointId === pair.startTracePointId)?.breakpointId;
            if (!startBreakPointId) {
                console.error("Start breakpoint id not found");
                return undefined;
            }
            // Use the latest start timestamp
            const startTimeStamp = Math.max(...allHitBreakpoints
                ?.filter(({ breakpointId }) => breakpointId === startBreakPointId)
                ?.map(({ timestamp }) => timestamp)) || undefined;
            if (!startTimeStamp) {
                return undefined;
            }
            // If the start and end breakpoints are present, return the execution time
            return {
                executionTimePairId: pair.executionTimePairId,
                executionTime: timestamp - startTimeStamp,
            };
        }), (0, operators_1.filter)((res) => res !== undefined));
        const postMetricsHandler$ = (0, rxjs_1.merge)(handleBreakPoint$, handleExecutionTime$, toolcalls_1.toolCallResults$).pipe((0, operators_1.takeUntil)(debugger_api_1.inspectorDisconnected$), (0, operators_1.bufferTime)(10), (0, operators_1.filter)((buffer) => buffer.length > 0), (0, operators_1.map)((buffer) => {
            // console.log("postMetricsHandler$", JSON.stringify(buffer));
            const flatMappedBuffer = buffer.flat();
            const executionTimes = flatMappedBuffer.filter((x) => "executionTimePairId" in x);
            const tracePointValues = flatMappedBuffer.filter((x) => "tracePointId" in x);
            const toolCallResults = flatMappedBuffer.filter((x) => "toolCallId" in x);
            return { executionTimes, tracePointValues, toolCallResults };
        }), (0, operators_1.mergeMap)((payload) => (0, api_1.postMetric)(payload, apiKey)), (0, operators_1.repeat)());
        postMetricsHandler$.subscribe();
    });
}
