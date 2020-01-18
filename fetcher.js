// Input : URL as a command line argument: http://www.example.com/ ./index.html
// Output : Downloaded and saved 3261 bytes to ./index.html


//let pathToFile = "http://www.example.com/";
//let URL = "./index.html";

const arg1 = process.argv[2];
const arg2 = process.argv[3];
const request = require('request');
const fs = require('fs');



request((arg1), (error, response, body) => {
  if (error) {
    console.log('error', error);
  } else {
    let totalBytes = body.length;
    fs.writeFileSync(arg2, totalBytes);
    console.log(`Downloaded and saved ${totalBytes} to ${arg2}`);
  }
});



//console.log(`Downloaded and saved ${totalBytes} to ${pathToFile}`)