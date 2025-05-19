"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config$ = void 0;
const rxjs_1 = require("rxjs");
const api_1 = require("../api");
const apikeys_1 = require("./apikeys");
exports.config$ = (0, rxjs_1.timer)(0, 2000).pipe((0, rxjs_1.withLatestFrom)(apikeys_1.apiKey$), (0, rxjs_1.mergeMap)(([_, apiKey]) => (0, api_1.getConfig$)(apiKey)), (0, rxjs_1.distinctUntilChanged)((prev, cur) => cur === prev || prev?.timestamp === cur?.timestamp), (0, rxjs_1.tap)((config) => console.log('New config received: ', JSON.stringify(config, null, 2))), (0, rxjs_1.shareReplay)({ bufferSize: 1, refCount: false }));
