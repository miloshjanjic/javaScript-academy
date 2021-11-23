const fs = require('fs'); // import fs from 'fs';

// CRUD operations
// Create, Read, Update, Delete

// 1. Create a file
// Sync Method
fs.writeFileSync('./file.txt', 'Здраво!');

const loggerCb = (error, data) => {
  if (error) {
    console.error(error);
  }
  console.log(data)
}

// Async Method  Tretiot argument e callback i najcesto se koristi za da se ispecati dokolku nastanala greska
// fs.writeFile('newfile.txt', 'Hello 2021', error => loggerCb(error, 'The file has been saved!'));

// 2. Read the content of the file
const data = fs.readFileSync('./file.txt', 'utf-8');
// console.log(data.toString());
console.log(data);

fs.readFile('./file.txt', 'utf-8', (error, data) => loggerCb(error, data));

/*  fs.readFileSync() е синхрона метода, тоа значи дека враќа резултат и прима 2 аргументи, првиот патека, вториот  е опционален или незадолжителен кој укажува како ќе се енкодира (претвори buffer податоци во стринг (обичен текст)).
Се користи секогаш кога ни треба директно вредноста од file за да продолжи програмот да го извршува останатиот дел. И токму поради тоа го користиме во readFile.js за да прочитаме file имаме проверка дали file постои.
Додека пак, fs.readFile(), е асинхрона метода, и како таква нема потреба да го условува извршувањето на остатокот од програмот, но прима callback, кој како прв аргумент e error, а вториот аргумент e податокот што по читањето од file доаѓа.   */

// 3. Update File
// UPDATE -- Za da ne morame sekogas da go prebrisеme (overwrite) tekstot tuku mozeme da go prosirиme fajlot(da dodademe nesto na veke postoeckata sodrzina)
// fs.writeFileSync('./newfile.txt', 'hello 2021 year make us developers');
// moze i so asinhrona funkcija vo koja treba da se vnesat soodvetnite parametri

// 4. Rename File

// fs.renameSync('./file.txt', './newpathfile.txt');
// fs.renameSync('./file.txt', './files/renamedfile.txt'); OVA VRAKA GRESKA. NE SE KREIRA AVTOMATSKI NOV FOLDER SO OVAA OPERACIJA.

// fs.rename('./newpathfile.txt', './files/rename.txt', (error) => loggerCb(error, 'The file has been renamed!'));

// 5. Delete File

// fs.unlinkSync('./newfile.txt'); // ova go brise celiot fajl ne samo tekstot vo fajlot
// fs.unlink('./file.txt', (error) => loggerCb('The file has been deleted!'));

const speak = {
  say: function (text) {
    console.log(text);
  }
}
speak.say('Hello');

// function sayHello (text) {
//   console.log(text);
// }

// sayHello('Hello Function');