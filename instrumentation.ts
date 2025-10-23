export async function register() {
  console.log('In instrumentation');
  
  // Handle SIGINT (Ctrl-C) gracefully
  process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(0);
  });
  
  // await new Promise((resolve) => setTimeout(resolve, 10000));
}
