import { NextResponse } from "next/server";
import { spawn } from 'child_process';
import path from 'path';

// Instrumentation middleware with delay
// function withInstrumentation<T extends (request: Request) => Promise<NextResponse>>(handler: T) {
//   return async (request: Request): Promise<NextResponse> => {
//     // Add 5 second delay
//     await new Promise(resolve => setTimeout(resolve, 5000));
//     return handler(request);
//   };
// }

// export const GET = withInstrumentation(async (_request: Request) => {
//   const testData = {
//     message: "Hello from the test API!",
//     timestamp: new Date().toISOString(),
//     data: {
//       items: [
//         { id: 1, name: "Item 1" },
//         { id: 2, name: "Item 2" },
//         { id: 3, name: "Item 3" },
//       ],
//     },
//   };

//   return NextResponse.json(testData);
// });

export async function GET(request: Request) {
  const sourceMapPath = "C:\\Git\\BugsorAgents\\examples\\dist\\complexapi.js.map";
  const originalFile = "webpack://my-app/app/api/test/route.ts";
  const line = 14;

  const workerPath = "C:\\Git\\ComplexAPI\\app\\api\\test\\sourceMapWorker.js";
  console.log('Spawning worker at:', workerPath);
  
  const worker = spawn('node', [workerPath], { stdio: 'inherit' });
  console.log('worker', worker);

  // Return immediately
  return NextResponse.json({ status: 'processing' });
}
