function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}

// x = prompt("Unesite vrednost promenljive x:");
// alert("Uneta je vrednost " + x);

// br = [10, 8, 26, 5, 3, 12]
// console.log("Broj elemenata u nizu je: " + br.length)
// i = 0
// while ( i < br.length ) {
//   console.log("Broj: " + br[i])
//   i = i + 1
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// array.forEach(element => {
  
// });

// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     const element = object[key];
    
//   }
// }

function returnT(a,b){
  var c = a + b;
  return c ;
}
alert(returnT(5,600));