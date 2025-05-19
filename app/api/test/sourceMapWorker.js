const { SourceMapConsumer } = require('source-map');
const fs = require('fs');

async function processSourceMap(sourceMapPath, originalFile, line) {
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

    const positions = consumer.allGeneratedPositionsFor({ source: originalFile, line });
    console.log('Generated positions:', positions);

    consumer.destroy();
    return { success: true, positions };
  } catch (error) {
    console.error('Error in source map processing:', error);
    return { success: false, error: error.message };
  }
}

// Run immediately with hardcoded values
processSourceMap(
  "C:\\Git\\BugsorAgents\\examples\\dist\\complexapi.js.map",
  "webpack://my-app/app/api/test/route.ts",
  14
).then(result => {
  console.log('Processing complete:', result);
  process.exit(0);
}).catch(error => {
  console.error('Processing failed:', error);
  process.exit(1);
}); 