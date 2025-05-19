"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolCallResults$ = exports.handleToolCalls$ = void 0;
exports.postToolCallResult = postToolCallResult;
const executionplan_1 = require("./executionplan");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function handleLiveDebuggerFunction({ name, args, toolCallId }, pool) {
    switch (name) {
        case "getexecutionplans":
            if (!pool) {
                console.error("Pool is not set");
                break;
            }
            (0, executionplan_1.getExecutionPlansFromQueryStore)({ name, pool, toolCallId, queryTextId: args.queryTextId });
            break;
        case "getqueriesquerystore":
            if (!pool) {
                console.error("Pool is not set");
                return;
            }
            (0, executionplan_1.getAllQueriesInQueryStore)({ name, toolCallId, pool });
            break;
        case "setexecutionplan":
            if (!pool) {
                console.error("Pool is not set");
                break;
            }
            (0, executionplan_1.setExecutionPlan)({ name, pool, toolCallId, queryTextId: args.queryTextId, planId: args.planId });
            break;
        default:
            console.error(`Unknown Tool Name: ${name}`);
    }
}
const handleToolCalls$ = (inspectorConnected$, inspectorDisconnected$, pool) => inspectorConnected$.pipe((0, operators_1.takeUntil)(inspectorDisconnected$), (0, operators_1.map)((config) => config.toolCalls), (0, operators_1.tap)((toolCalls) => toolCalls.forEach((tool) => handleLiveDebuggerFunction(tool, pool))), (0, operators_1.repeat)());
exports.handleToolCalls$ = handleToolCalls$;
const toolCallResultsSubject = new rxjs_1.Subject();
exports.toolCallResults$ = toolCallResultsSubject.asObservable();
function postToolCallResult(toolCallResult) {
    toolCallResultsSubject.next(toolCallResult);
}
