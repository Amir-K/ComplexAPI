"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scriptId$ = void 0;
const debugger_api_1 = require("../debugger-api");
const inspector_1 = require("./inspector");
const rxjs_1 = require("rxjs");
function logScriptParsed(...args) {
    if (process.env.LIVEDEBUGGER_LOG_SCRIPT_PARSED === "true") {
        console.log("Script parsed emitted", ...args);
    }
}
exports.scriptId$ = inspector_1.inspectorConnected$.pipe((0, rxjs_1.takeUntil)(debugger_api_1.inspectorDisconnected$), (0, rxjs_1.mergeMap)((config) => debugger_api_1.scriptParsed$.pipe((0, rxjs_1.takeUntil)(debugger_api_1.inspectorDisconnected$), (0, rxjs_1.map)((script) => ({ script, config })), (0, rxjs_1.tap)(({ script }) => logScriptParsed(script.params.url)))), (0, rxjs_1.map)(({ script, config }) => ({
    scriptId: script.params.scriptId,
    codeFile: config.codeFiles.find(({ fileName }) => script.params.url.includes(fileName) || script.params.url.includes(fileName.replace(/\.ts$/, ".js"))),
    sourceMapURL: script.params.sourceMapURL,
    sourceURL: script.params.url,
})), (0, rxjs_1.filter)(({ codeFile }) => !!codeFile), (0, rxjs_1.tap)((codefile) => console.log("Codefile content is", JSON.stringify(codefile))), (0, rxjs_1.share)());
