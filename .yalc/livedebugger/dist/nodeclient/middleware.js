"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShadowMiddleware = createShadowMiddleware;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./observables/config");
const rxjs_1 = require("rxjs");
function log(...args) {
    if (process.env.LIVEDEBUGGER_SHADOW_DEBUG === "true") {
        console.log(...args);
    }
}
function createShadowMiddleware(mirrorHost) {
    return (req, res, next) => {
        if (process.env.LIVEDEBUGGER_IS_SHADOW === "true") {
            next();
            return;
        }
        const url = `${mirrorHost}${req.originalUrl}`;
        log("Mirroring request to:", url);
        config_1.config$.pipe((0, rxjs_1.take)(1)).subscribe((config) => {
            const switchTraffic = config?.shadowSwitchTraffic;
            (0, axios_1.default)({
                method: req.method,
                url,
                headers: {
                    ...req.headers,
                    host: new URL(mirrorHost).host,
                },
                data: req.body,
            })
                .then((response) => {
                log("Shadow completed mirrorered request", url);
                if (switchTraffic) {
                    console.log("Shadow returned response for request:", url);
                    res.status(response.status).send(response.data);
                    return;
                }
            })
                .catch((error) => {
                log("Error mirroring request:", error);
            });
            if (!switchTraffic) {
                next();
            }
        });
    };
}
