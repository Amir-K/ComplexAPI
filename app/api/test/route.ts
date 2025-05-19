import { NextResponse } from "next/server";
import { withInstrumentation } from "livedebugger";
import { SourceMapConsumer } from "source-map";
import * as fs from 'fs';

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
  //const sourceMapPath = "C:\\Git\\ComplexAPI\\.next\\server\\app\\api\\test\\route.js.map";
  const sourceMapPath = "C:\\Git\\BugsorAgents\\examples\\dist\\complexapi.js.map";
  //const sourceMapPath = "C:\\Git\\LiveDebugger\\broker\\.next\\server\\app\\api\\apikeys\\route.js.map";
  // const sourceMapPath = "C:\\Git\\LiveDebugger\\broker\\.next\\server\\middleware.js.map";
  //const sourceMapPath = "C:\\Git\\LiveDebugger\\broker\\.next\\static\\chunks\\app\\sign-in\\[[...sign-in]]\\page-0bb78860f5ec2beb.js.map";
  // const sourceMapPath = 'C:\\Git\\LiveDebugger\\broker\\.next\\static\\chunks\\app\\layout-cc22756540e7bd20.js.map';
  //const rawSourceMap = JSON.parse(fs.readFileSync(sourceMapPath, "utf8"));
  const rawSourceMap = JSON.parse(await fs.promises.readFile(sourceMapPath, "utf8"));
  console.log('RAW SOURCE MAP', rawSourceMap);

  // const originalFile = "webpack://my-app/app/api/test/route.ts";
  const originalFile = "webpack://my-app/app/api/test/route.ts";
  // const originalFile = 'webpack:///app/api/apikeys/route.ts';
  // const originalFile = 'webpack://_N_E/middleware.ts';
  // const originalFile = 'webpack://_N_E/?ae0a';
  // const originalFile = 'webpack://_N_E/<anon>';
  const line = 14;

  new SourceMapConsumer(rawSourceMap).then((consumer) => {
    console.log(consumer);
    
    const sources = consumer.sources;
    console.log(sources);

    // Save the sources array to a file
    const outputPath = "sources.json";
    fs.writeFileSync(outputPath, JSON.stringify(sources, null, 2));
    console.log(`Sources saved to ${outputPath}`);

    // console.log(consumer.sourceContentFor(originalFile));
    //@ts-ignore
    console.log(consumer.allGeneratedPositionsFor({ source: originalFile, line }));

    //   console.log(consumer.generatedPositionFor({ source: originalFile, line, column: 0 }));

    //   console.log(result);
    return NextResponse.json("hey");
  });


}
