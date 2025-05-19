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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMetric = exports.getConfig$ = void 0;
exports.downloadAndExtractBuild = downloadAndExtractBuild;
const rxjs_1 = require("rxjs");
const ajax_1 = require("rxjs/ajax");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const promises_1 = require("stream/promises");
const fs_2 = require("fs");
const tar = __importStar(require("tar"));
const node_fetch_1 = __importDefault(require("node-fetch"));
function log(...args) {
    if (process.env.LIVEDEBUGGER_API_DEBUG === 'true') {
        console.log(...args);
    }
}
const brokerHost = process.env.DEVBROKERHOST ? "http://localhost:4000" : "https://livedebuggerbroker.amir-parking.duckdns.org";
const getConfig$ = (apiKey) => ajax_1.ajax.get(`${brokerHost}/config`, { "broker-api-key": `${apiKey}` }).pipe((0, rxjs_1.catchError)((err) => {
    log("error getting config from broker", err);
    return [];
}), (0, rxjs_1.map)(({ response }) => response));
exports.getConfig$ = getConfig$;
const postMetric = (payload, apiKey) => ajax_1.ajax.post(`${brokerHost}/metrics`, payload, { "broker-api-key": `${apiKey}` }).pipe((0, rxjs_1.tap)(() => log("emitVariableChanged", payload)), (0, rxjs_1.catchError)((err) => {
    log("error posting metrics to broker", err);
    return [];
}));
exports.postMetric = postMetric;
async function downloadAndExtractBuild(apiKey, targetDir) {
    // Create target directory if it doesn't exist
    if (!fs_1.default.existsSync(targetDir)) {
        fs_1.default.mkdirSync(targetDir, { recursive: true });
    }
    // Download build file
    try {
        const response = await (0, node_fetch_1.default)(`${brokerHost}/build`, {
            headers: {
                "broker-api-key": apiKey,
                "Accept": "application/gzip"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const buildFilePath = path_1.default.join(targetDir, "build.tar.gz");
        const writeStream = (0, fs_2.createWriteStream)(buildFilePath);
        if (!response.body) {
            throw new Error("No body in response from /build endpoint");
        }
        // Save the file
        console.log("Downloading build file...");
        await (0, promises_1.pipeline)(response.body, writeStream);
        console.log("Build file downloaded to:", buildFilePath);
        // Extract the tar.gz file
        try {
            console.log("Starting extraction...");
            await tar.x({
                file: buildFilePath,
                cwd: targetDir,
                strip: 1,
                gzip: true,
                preservePaths: false
            });
            console.log("Extraction completed successfully");
        }
        catch (error) {
            const extractError = error;
            console.error("Error during extraction:", extractError);
            // Log the file size and first few bytes to help debug
            const stats = fs_1.default.statSync(buildFilePath);
            console.error("Downloaded file size:", stats.size, "bytes");
            const fileContent = fs_1.default.readFileSync(buildFilePath, 'utf8').substring(0, 100);
            console.error("First 100 bytes of file:", fileContent);
            throw new Error(`Failed to extract build file: ${extractError.message}`);
        }
        finally {
            // Clean up the downloaded .tar.gz file
            fs_1.default.unlinkSync(buildFilePath);
        }
        // Find the main entry point
        const mainFile = path_1.default.join(targetDir, "complexapi.js");
        if (!fs_1.default.existsSync(mainFile)) {
            throw new Error("Main entry point not found in build files");
        }
        return mainFile;
    }
    catch (error) {
        console.error("Error in downloadAndExtractBuild:", error);
        throw error;
    }
}
