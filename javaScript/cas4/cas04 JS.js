// while ; do/while ; for each ; filter ; map ;
// for 
// 1. while 
  // var i = 0;
  // var cars = ["Ford","Nissan", "Tesla", "Car", "Test"]
//  while (i < cars.length){
//   console.log(cars[i]);
//   i++;
// } 

// do {
//   console.log(cars[i]);
//   i++;
// }
// while(i < cars.length);

// cars.forEach(element => {
//   console.log(element);
// });

// 2. 
var cars = ["Ford","Nissan", "Tesla", "Car", "Test"];
// cars = cars.filter(element => element.length < 5);
// console.log(cars);

//! Filter i Map rabotat samo so arrays. Znaci mora da gi povikame na array, isto kako i forEach.
//!         Map creates a new array by transformin every element individually. 
//!         Filter creates a new array by removing elements that do not complete(belong) the given condition.

// cars.map(element => element.length <5 );
// console.log(cars);


// cars.forEach(element => {
//   if(element.length > 5 ){
//     newArray.push(element);
//   }
// })
// console.log(newArray);
