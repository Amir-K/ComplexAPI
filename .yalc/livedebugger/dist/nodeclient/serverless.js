"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withInstrumentation = withInstrumentation;
const rxjs_1 = require("rxjs");
const breakpoints_1 = require("./observables/breakpoints");
const main_1 = require("./main");
function withInstrumentation(handler) {
    return async (request) => {
        // Add 5 second delay
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        (0, main_1.initializeLiveDebugger)({});
        await (0, rxjs_1.firstValueFrom)(breakpoints_1.allBreakpointsSet$);
        return handler(request);
    };
}
