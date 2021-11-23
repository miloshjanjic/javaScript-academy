//let niza = [1,2,4];
// for(var i = 0; i < niza.length ; i++){
//   console.log(niza[i]);
// }

//for od zA IZMminuvanje na nizi

// for(element of niza){
//   console.log(element);
// }
// let person = {name:"Sanja",surname:"Tashkovska",10:"deset"};
// console.log(person.name);
// console.log(person["surname"]); // koga ne gi znaeme site klucevi na objektot i koga klucot ne e so tekstualna vrednost 
// console.log(person["10"],"10"===10); // vaka go zema klucot po vrednost a ne po tip( so == , a ne so ===)


// for(key in person){
//   console.log(key+":"+person[key]);
// }
//let niza2 = niza.map((x)=>{x*2}); 
// for(element of niza){
//     niza2.push(element*2);
//     }
// console.log(niza2);

// function funkcija(a){
//   console.log(a)
// }
// funkcija(5);

// let f = function(){
//   console.log("Zdravo");
// }
// f();

// document.getElementById("userBtn").addEventListener("click",funkcija(){
//   addUser();
// });

// let x = ()=>{console.log("JS")}; //error fun ;nema parametri a ima poveke naredbi
// let x1 = ()=>console.log("JS"); //ako immate edna naredba
// let x2 = a=>{console.log*(a)}; //ako imate eden parametar
// let x3 = (a,b)=>{return a+b}; //
// let x4 = (a,b)=>a+b; //ako mozete direktno da vratite ili ispecatite vrednost

// x();
// x1();
// x2("Sanja");
// console.log(x3(2,3));
// console.log(x4(2,3));

// function greating (){
//   console.log("hello");
// }
// let callGreating =(callback)=>{
//   callback();
// }
// callGreating(greating);
// function pecati(ime,godini){
//   console.log("Liceto"+ ime + "ima" + godini + "godini")
// }
// pecati(26,"sanja");
let niza2 = niza.map(x => x * 2);
let niza2 = niza.map(multiply);

function multiply(x) {
  return x * 2;
}
console.log(niza2);

var persons = [
  { firstname: "Malcom1", lastname: "Reynolds", age: 29 },
  { firstname: "Malcom2", lastname: "Reynolds", age: 19 },
  { firstname: "Kaylee", lastname: "Frye", age: 26 },
  { firstname: "Jayne", lastname: "Cobb", age: 20 },
];

let firstnames = persons.map(x => x.firstname); //kreira nova podniza so site iminja
let intermediate = persons.filter(x => x.age > 25);//ja filtrira nizata,nizata se sostoi od site koi imaat poveke od 25 god

// let persons2 = persons.filter(x=>x.age>25).map(x=>x.firstname).filter(x=>x.firstname=="Malcom1");
// console.log(firstNames);
// console.log(intermediate);
// console.log(persons2);


let age = persons.map(x => x.age).reduce((previous, curValue) => previous + curValue, 5);
console.log(age / persons.length);


let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
