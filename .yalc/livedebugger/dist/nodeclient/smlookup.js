#!/usr/bin/env node
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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const readline = __importStar(require("readline"));
const lookupSource_1 = require("./lookupSource");
// Function to find all source map files in a directory
function findSourceMaps(dir) {
    let sourceMaps = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            sourceMaps = sourceMaps.concat(findSourceMaps(fullPath));
        }
        else if (file.endsWith(".map")) {
            sourceMaps.push(fullPath);
        }
    }
    return sourceMaps;
}
function question(query, rl) {
    return new Promise((resolve) => rl.question(query, resolve));
}
async function getUserInput(rl) {
    const originalFile = await question("Enter the original file name: ", rl);
    const lineArg = await question("Enter the line number: ", rl);
    const sourceMapDir = await question("Enter the directory path containing source maps: ", rl);
    const line = parseInt(lineArg, 10);
    const sourceMapPaths = findSourceMaps(sourceMapDir);
    for (const sourceMapPath of sourceMapPaths) {
        try {
            const result = await (0, lookupSource_1.lookupSource)(originalFile, line, sourceMapPath);
            if (result) {
                console.log(`Result from ${sourceMapPath}:`, result);
                rl.close();
                return;
            }
        }
        catch (err) {
            console.error(`Error processing ${sourceMapPath}:`, err);
        }
    }
    console.log("No matching source found for the provided file and line number.");
    rl.close();
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
getUserInput(rl);
