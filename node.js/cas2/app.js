const logingModule = require('./localModule.js');

logingModule.info(' Node JS started'); //calling info from looging Module
logingModule.warning(' warning started');
logingModule.error(' error 606');

const {add,div,sub,multi} = require('./calculator');

const sum = add(4,5);
console.log('Sum is :',sum);

const sum2 = multi(5, 12); // calling add
console.log('Sum 2 is :', sum2);
// const users = {
//   id : '11'
//   firstname : 'haha'
//   lastname : 'hihi'
//   gender : 'huhu'
// }
// const {id,firstname,lastname,gender} = users;


// primer od GIT

// const logModule = require('./loggingModule');l

// const calc = require('./calculator');
// calc.add();
// calc.div();
// calc.multi();
// calc.sub();

// destruction
// const { add, div, sub, multi } = require('./calculator');

// logModule.info('Node.js started'); // calling info from loggingModule module

// const sum = add(4, 5); // calling
// console.log('Sum is', sum); // 9

// construction object
// const users = {
//   id: '11',
//   firstName: 'haha',
//   lastName: 'hihi',
//   gender: 'huhu'
// }

// const id = users.id;
// const firstName = users.firstName;
// const lastName = users.lastName;
// const gender = users.gender;

// destruction object
// const { id, firstName, lastName, gender } = users;