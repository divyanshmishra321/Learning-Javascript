// Immediately invoked function Expression

(function chai() {
    // Named IIFE
  console.log(`DB CONNECTED `);
})(); //semicolon is must in order to write Two IIFE in one file 

((name) => {
    // Unnamed IIFE
  console.log(`DB CONNECTED AGAIN ${name}`);
})("hitesh");
