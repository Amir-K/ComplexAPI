"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKey$ = exports.apiKeySubject = void 0;
exports.setApiKey = setApiKey;
const rxjs_1 = require("rxjs");
exports.apiKeySubject = new rxjs_1.ReplaySubject(1);
exports.apiKey$ = exports.apiKeySubject.asObservable();
function setApiKey(apiKey) {
    exports.apiKeySubject.next(apiKey);
}
