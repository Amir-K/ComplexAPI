import { SourceMapConsumer } from "source-map";
import * as fs from 'fs';

interface SourceMapMessage {
  type: 'PROCESS_SOURCE_MAP';
  sourceMapPath: string;
  originalFile: string;
  line: number;
}

async function processSourceMap(sourceMapPath: string, originalFile: string, line: number) {
  try {
    const rawSourceMap = JSON.parse(await fs.promises.readFile(sourceMapPath, "utf8"));
    console.log('RAW SOURCE MAP', rawSourceMap);

    const consumer = await new SourceMapConsumer(rawSourceMap);
    console.log(consumer);
    
    const sources = consumer.sources;
    console.log(sources);

    // Save the sources array to a file
    const outputPath = "sources.json";
    fs.writeFileSync(outputPath, JSON.stringify(sources, null, 2));
    console.log(`Sources saved to ${outputPath}`);

    //@ts-ignore
    const positions = consumer.allGeneratedPositionsFor({ source: originalFile, line });
    console.log('Generated positions:', positions);

    consumer.destroy();
    return { success: true, positions };
  } catch (error) {
    console.error('Error in source map processing:', error);
    return { success: false, error: error.message };
  }
}

// Handle messages from parent process
process.on('message', async (message: SourceMapMessage) => {
  if (message.type === 'PROCESS_SOURCE_MAP') {
    const result = await processSourceMap(
      message.sourceMapPath,
      message.originalFile,
      message.line
    );
    process.send?.(result);
  }
}); 