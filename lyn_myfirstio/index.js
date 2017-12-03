let fs = require('fs');
let numLines = fs.readFileSync(process.argv[2]);
console.log(numLines.toString().match(/\n/g).length);