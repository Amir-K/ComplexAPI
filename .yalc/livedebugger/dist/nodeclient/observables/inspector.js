"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspectorConnected$ = void 0;
const config_1 = require("./config");
const rxjs_1 = require("rxjs");
const debugger_api_1 = require("../debugger-api");
exports.inspectorConnected$ = config_1.config$.pipe((0, rxjs_1.tap)((config) => (!config || !config.loggerEnabled) &&
    console.log("Live Debugger config received, but config not setup to log at the moment")), (0, rxjs_1.tap)(() => (0, debugger_api_1.isSessionConnected)() && (0, debugger_api_1.disconnectSession)()), (0, rxjs_1.filter)((config) => config !== null && config.loggerEnabled), (0, rxjs_1.tap)(debugger_api_1.connectInspector), (0, rxjs_1.tap)(() => console.log("Inspector connected emitted")), (0, rxjs_1.share)({ resetOnRefCountZero: false }));
