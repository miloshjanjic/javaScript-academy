// var cars=["Yugo","audi","skoda","ford"];
// var bmwCar=cars[0];
// cars[0]="Yugo";
// console.log(cars[2]);
// cars.pop(); brisenje
// cars.push("Mazda");
// cars.length
// cars.sort(); azbucen red
// cars.reverse(); obratno
// cars.splice(0,1); brisenje

// So nizite mozeme vo edna niza(promenliva) da gi zapiseme site promenlivi i da gi izminuvame mnogu ednostavno

// console.log(cars.indexof("test"));
// console.log(cars);

//2.Objeki
///! string number null undefined boolean se prosti tipovi na podatoci
//! Objektite se slozeni tipovi na podatoci
//! se kreiraat so kombinacija na primitivnite(obicni) tipovi na podatoci

// string,number,null,undefind,boolean
//slozeni tipovi na podatoci -> objekti

// var car="Mazda";

// var name = {
//   brend:"Mazda",
//   km:100000,
//   drzava:"Japan",
//   godina:2016
// }
// var person = {
//   name: "Petar",
//   prezime:"Petreski",
//   phone:"456461",
//   email:"petar@gmail.com"
// }
// person.email = "petar@hotmail.com";
// person["phone"]=777
// console.log(person);

// var users = [
//   {
//     name:"Petar",
//     prezime:"Petreski",
//     email:"petar@gmail.com"
//   },
//   {
//     name:"Martin",
//     prezime:"Naumovski",
//     email:"martin@gmail.com"
//   }
// ]
// users[1].email="martin@hotmail.com";
// console.log(users);

// 3.JSON
// var users =
// {
//   " users" : [ 
//     {"name":"Petar","lastName":"Petreski" },
//     {"name":"Martin","lastName":"Naumoski"},
//     {}
//   ]
// }
// console.log(users);

// // 4.ciklusi
// if( 10 % 2 == 0 ){
//   console.log("brojot e paren");
// }
// else{
//   console.log("brojot ne e paren");
// }

//iteracija niz broevi,array..
// for.while.do/while.for each.filtan
// for( i=0;i<100;i++){
//   console.log("zdravo" + i);
// }

// var from = prompt("enter your number:");
// var to = prompt("enter to number:");
// from = parseInt (from);
// to = parseInt(to);

//! Ciklusi(Loops) ni ovozmozuvaat avtomatska iteracija niz nizi, objekti, stringovi, broevi itn..
//! moze da se iskoriste let namesto var, bidejki promenlivata i ke ni se koristi samo lokalno vo teloto na for ciklusot
//! najcesto se pisuva vaka nemora let i = 0, bidejki avtomatski znae deka toj del od for ciklusot e variabla(promenliva)
// for (i = from ;i < to;i++ ){
//   if (i % 2 == 0){
//     console.log(i + "e paren brojot");
//   }
//   else{
//     console.log(i + "e neparen broj");
//   }
// }


var cars = ["ford","mazda","audi","yugo","seat"];
cars.push("skoda");
cars.splice(2,1);
for(i=0; i < cars.length;i++){
  console.log(cars[1]);
}

// splice brise del od niza cars.splice(indexFrom, indexTo);

// var niza = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80];
// //          0    1    2     3   4     5   6     7

// niza.splice(3,4);
// niza.splice)(3,0,'a','b','c');
