"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnShadow = spawnShadow;
exports.stopShadow = stopShadow;
const child_process_1 = require("child_process");
const api_1 = require("./api");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const SHADOW_DIR = path_1.default.join(process.cwd(), "shadow");
let currentShadowProcess = null;
async function spawnShadow({ shadowApiKey, hostApiKey, env }) {
    // If there's already a shadow process running, stop it first
    if (currentShadowProcess) {
        await stopShadow();
    }
    // Create shadow directory and download build files
    const mainFile = await (0, api_1.downloadAndExtractBuild)(hostApiKey, SHADOW_DIR);
    console.log("Spawning shadow process for:", mainFile);
    currentShadowProcess = (0, child_process_1.spawn)("node", [mainFile], {
        stdio: ["pipe", "pipe", "pipe"],
        env: {
            ...env,
            LIVEDEBUGGER_IS_SHADOW: "true",
            LIVEDEBUGGER_API_KEY: shadowApiKey
        },
    });
    currentShadowProcess.once("spawn", () => {
        console.log("Shadow process started for:", mainFile);
    });
    // Log stdout
    currentShadowProcess.stdout?.on("data", (data) => {
        console.log("Shadow stdout:", data.toString());
    });
    // Log stderr
    currentShadowProcess.stderr?.on("data", (data) => {
        console.error("Shadow stderr:", data.toString());
    });
    // Log process exit
    currentShadowProcess.on("exit", (code) => {
        console.log("Shadow process exited with code:", code);
        currentShadowProcess = null;
    });
    // Log process error
    currentShadowProcess.on("error", (err) => {
        console.error("Shadow process error:", err);
        currentShadowProcess = null;
    });
    return currentShadowProcess;
}
async function stopShadow() {
    if (!currentShadowProcess) {
        console.log("No shadow process to stop");
        return;
    }
    console.log("Stopping shadow process...");
    // Try to kill the process gracefully first
    currentShadowProcess?.kill('SIGTERM');
    // Wait for a short time to see if it exits gracefully
    await new Promise(resolve => setTimeout(resolve, 1000));
    // If it's still running, force kill it
    if (!currentShadowProcess?.killed) {
        currentShadowProcess?.kill('SIGKILL');
    }
    // Clean up the shadow directory
    if (fs_1.default.existsSync(SHADOW_DIR)) {
        fs_1.default.rmSync(SHADOW_DIR, { recursive: true, force: true });
        console.log("Shadow directory cleaned up");
    }
    currentShadowProcess = null;
}
// Example usage:
// const shadow = spawnShadow('./path/to/your/script.js');
// shadow.stdin?.write('some input');
// shadow.kill(); // to stop the process
