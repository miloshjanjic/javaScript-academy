// function testFunction (){
//   console.log("Log 2");
// }
// function sum (sum1,sum2){
//   //console.log(sum1 + sum2);
//   var sum = sum1 + sum2;
//   return sum;
// }
// var zbir = sum(5,10);
// console.log(zbir);

//! 3 nacini funkcija da ja povikame
//    1. so povikuvanje na f-jata
//    2. so event(click,keydown,hover..)
//     3. f-jata sama da se povika
// var test = document.getElementById("testId");

// 1.f-ja take numbers ; return
// 2. var result ..
// 3. show result(result);

function add(){
  var result = takeNumbers()[0] + takeNumbers()[1];
  showResult(result);
}
function remove(){
  var result = takeNumbers()[0] - takeNumbers()[1];
  showResult(result);
}
function multiple(){
  var result = takeNumbers()[0] * takeNumbers()[1];
  showResult(result);
}
function devide(){
  var result = takeNumbers()[0] / takeNumbers()[1];
  showResult(result);
}
function takeNumbers(){
  var num1 = parseInt(document.getElementById("firstNum").value);
  var num2 = parseInt(document.getElementById("secondNum").value);
  return [num1,num2];
}
function showResult(result){
  var p = document.getElementById("result");
  p.innerHTML = result;
}