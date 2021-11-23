// var x = function(a,b){
//   console.log(a+b);
// }
// x(5,5);  // anonimna funkcija

// add = () => {
//   this.x = 
//   let c = 5
// }; //error function
// function test(){

// }
// var name - 'Test name';
// var x = {
//   name;'Test',
//   test : function(){
//     console.log(this.name);
//   },
//   test1:() => {
//     console.log(this.name);
//   }
// }
// x.test();
// x.test1();
// arrow => local var
// clasic = global

let x = () => { console.log("arrow function") } // nema parametri a ima povekje naredbi
let x1 = () => console.log('arrow function without'); // ako i samo ako ima edna naredba
let x2 = a => { console.log(a) } // Samo ako imame 1 parametar
let x3 = (a, b) => { return a + b }; // ako imame return mora da imame curly zagradi
let x4 = (a, b) => a + b; // Ova e slucajot od x3 kade imame ednostavna operacija i nemame potreba od return. Mozeme direkno da vratime ili ispecatime vrednost.

// CALL BACK FUNCTIONS
function greeting() {
  console.log('Hello');
}
let callGreeting = (callBck) => {
  callBck();
}
// ova e callback. Vo momentot koga ke se izvrsi callGreeting ke se izvrsi i greeting funkcijata.
callGreeting(greeting);
// number => (decimalni i celi broevi)
// integer => celi broevi, float => decimalni broevi

var allCoef = [];
function addToMyTicket() {
  var match = document.getElementById("match").value;
  var coef = parseFloat(document.getElementById("coef").value);
  allCoef.push(coef);
  addToTable(match, coef);
}
function addToTable(match, coef) {
  var table = document.getElementById("table");
  var tr = document.createElement("tr");
  var tdm = document.createElement("td");
  var tdc = document.createElement("td");
  tdm.innerHTML = match;
  tdc.innerHTML = coef;
  tr.appendChild(tdm);
  tr.appendChild(tdc);
  table.appendChild(tr);
}
function calculateTicket() {
  var res = 1;
  allCoef.forEach(element => {
    res *= element;
  });
  var amount = parseInt(document.getElementById("amount").value);
  var p = document.getElementById("result");
  p.innerHTML = res * amount;
}
// REDUCE se koristi koga treba da svedeme nesto na Edna Edinstvena Promenlivas