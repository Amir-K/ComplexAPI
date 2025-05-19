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
exports.lookupSource = lookupSource;
exports.lookupSource$ = lookupSource$;
const rxjs_1 = require("rxjs");
const source_map_1 = require("source-map");
const fs = __importStar(require("fs"));
async function lookupSource(originalFile, line, sourceMapPath) {
    try {
        console.log('Reading sourcemap file', sourceMapPath);
        const rawSourceMap = await fs.promises.readFile(sourceMapPath, "utf8");
        console.log('Done reading sourcemap file', sourceMapPath);
        const consumer = await new source_map_1.SourceMapConsumer(JSON.parse(rawSourceMap));
        console.log("Sources:", consumer.sources);
        console.log("Consumer.file: ", consumer.file);
        console.log("Original file: ", originalFile);
        const fullOriginalFileName = consumer.sources.find((source) => source.includes(originalFile));
        if (!fullOriginalFileName) {
            return null;
        }
        //@ts-ignore
        const result = consumer.allGeneratedPositionsFor({ source: fullOriginalFileName, line });
        // console.log("Result", result);
        consumer.destroy();
        return result;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
function lookupSource$(originalFile, line, sourceMapPath) {
    console.log("In lookupSource$", originalFile, line, sourceMapPath);
    return (0, rxjs_1.from)(lookupSource(originalFile, line, sourceMapPath));
}
