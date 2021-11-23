// var name = 'Test 2020';
// console.log(name);

// var testVAR ='ova e string varijabla';
// var booleanVar = true;
// var numberVar = 5;

//! ima 3 nacini za deklariranje na promenlivi i toa: var, let i const
//! let i const deklariraat promenlivi koi vazat samo vo ramkite na eden scope( pr: vo nekoja funkcija ), dodeka so var promenlivata moze
//! da se pristapi od bilo kade vo kodot(globalni promenlivi).
//!                              Podatocni tipovi - Data Types (primitivni i slozeni)
//!           PRIMITIVNI:

//!   number (integers, floats and doubles) se site so isto ime => number 
//!   boolean = prima edna od dvete vrednost true ili false 
//!   string e za da zacuvame tekst
//!   undefined e koga nekoja promenliva ne e definirana od koj tip e (ima vrednost promenlivata no ne e definirana od koj tip e)
//!   null e koga nekoja promenliva nema vrednost

// console.log(testVAR);
// console.log(booleanVar);
// console.log(numberVar);

// console.log(typeof '5');
// console.log(typeof "true");

// var testVar = null;
// console.log( testVar);

// var temp = "Alert Test";
// alert("Alert!");

// confirm ("Custom!");

// prompt (Custom!);

var age = prompt("enter your age");
console.log(age);
console.log(typeof age);

// prompt-> String
// confirm ->Boolean
// alert->undefined

// toa sto ke se napise vo input-ot od prompt ke ni se zacuva vo temp
var temp = prompt("Enter your message! then see console on brosers");
console.log(temp);