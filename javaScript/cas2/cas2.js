// // spodeluvacki
// = == ===
// // dodeluvacki
//   var a=5
// // matematicki
//   + - / *
// // logicki
// and or not

// var num = 25;
// num = num / 5;
// console.log(num);

// var num = 5;
// num += 5;

// var temp =5;
// temp = temp + 5;

// console.log(num);
// console.log(temp);

// var num = 10;
// var temp = 10;
// console.log(num != temp);

// ++ e isto kako i +1
//! logicki
// + , - , * , / , % , ++ , --
// = , =+ , -= , *= , /= , %=
// ==, === , != , > , < , >= , <=
// && , || , !
// and &&
// true && true

// 2 > 1 && 3>2 && 4>3 -> mora site da  se tocni 
// 2 > 1 || 2 > 3 || 3 > 4 -> dovolno e barem eden

// 1-> true 0-> false
// 1 && 1 -> 1
// 1 && 0 -> 0
// 0 && 1 -> 0
// 0 && 0 -> 0
// ||
// 1 || 1 -> 1
// 1 || 0 -> 1
// 0 || 1 -> 1
// 0 || 0 -> 0
// !
//  !true -> false
//  !false -> true


// var num = 1;
// var numTwo = 2;

// if ( (2>1) || (4>5) ){
//   console.log("uslovot e ispolnet");
// }
// console.log("Outside if");

// var age=prompt("Enter your age..");
// age= parseInt (age);
// console.log( typeof age);

// if (age >= 18){
//   alert("Korisnikot e polnoleten");
// }
// else{
//   alert("Korisnikot ne e polnoleten");
// }

// var age=prompt("Enter your age..");
// age= parseInt (age);
// console.log( typeof age);

// if (age %2==0){
//   alert("brojot e paren");
// }
// else{
//   alert("Brojot ne e paren");
// }

// var number=prompt("Enter your age..");
// age= parseInt (number);
// if (number >0){
//   console.log("brojot e pozitiven");
// }
// else if (number < 0){
//   console.log("brojot e negativen");

// }
// else{
//   console.log("brojot e 0!")
// }

// var day=prompt("Enter your day..");
// day= parseInt (day);
// var userDay='';

// if (day ==1){
//   userDay="Ponedelnik";
// }
// else if (day == 2){
//   userDay="Vtornik";

// }
// else if (day==7){
//   userDay="Nedela";
// }
// else if (day==3){
//   userDay="Sreda";
// }
// else if (day==4){
//   userDay="Cetvrtok";
// }
// else if (day==5){
//   userDay="Petok";
// }
// else if (day==6){
//   userDay="Sabota";
// }
// else {
//   userDay = "nema takov den vo nedelata"
// }
// alert (userDay);

//  var day=prompt("Enter your day..");
//  day= parseInt (day);
//  var userDay='';
//  switch(day){
//   case 1:
//   userDay= "Ponedelnik";
//   break;
//   case 2:
//   userDay= "vtornik";
//   case 3:
//   userDay= "Ponedelnik";
//  }
//  alert(userDay);

// vrednosta koja ja prima prompt e string. I da vneseme brojka vo programot ke se interpretira kako string
var age=prompt("Enter you age..");
// Ova ke go konvertira stringot vo integer(number) 
age= parseInt (age);

if ((age %2==0) && (age>=18)){
  alert("polnoleten")
}
else{
  alert("maloleten")
}
