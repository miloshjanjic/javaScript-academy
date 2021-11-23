const fs = require('fs');

// flowing mode Toa e nacin na rabota na streams.

let data = '';

const readableStream = fs.createReadStream('./tempFile/test.txt'); // Create a readable stream ova kreira readable stream koj cita od fajl

readableStream.setEncoding('utf8');

// data, end, error
readableStream.on('data', (chunk) => {
  data += chunk;
  // data = data + chunk;
  // '' + chunk;

  // 'hello';

  // 'hello' + 'world' = 'hello world';

  // 'hello world 222';
});

// console.log(data);
// STRIMOT MORA DA GO ZATVORIME. Toa se pravi so end eventot i duri togas gi dobivame podatocite. Znaci mora da zavrsi citanjeto pa da gi ispecatime ili dobieme podatocite.
readableStream.on('end', () => {
  console.log(data);
});

readableStream.on('error', (error) => {
  console.log('ERRR', error);
});

console.log('program ended!');