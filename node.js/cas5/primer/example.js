var fs = require('fs');

var readableStream = fs.createReadStream('./data.json');

console.log(readableStream);