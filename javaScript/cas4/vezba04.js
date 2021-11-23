//1.Vezba 
// var name = prompt ("Enter student name");
// var numberofSubjects = prompt ("Enter number od subject..");
// numberofSubjects = parseInt(numberofSubjects);
// var subjects = [];
// for (i=0 ; i < numberofSubjects; i++){
//   let temp = prompt("Enter grade");
//   temp = parseInt(temp);
//   subjects.push(temp);
// }
// var sum = 0 ;
// subjects.forEach(element =>{
//   sum += element ;
// });
// console.log(sum);

// var avg = sum/numberofSubjects;
// console.log("Studentot" + name + "ima prosek od " + avg);
// console.log(name);
// console.log(numberofSubjects);
// console.log(subjects);

//2.Vezba
var name = prompt ("Enter student name");
var numberofSubjects = prompt ("Enter number of subject");
numberofSubjects = parseInt(numberofSubjects);
var subjects = [];
var i = 0;

 do {
  let temp = prompt("Enter grade");
  temp = parseInt(temp);
  subjects.push(temp);
  i++
  }
 while(i.numberofSubjects);

 var sum = 0 ;
 subjects.forEach(element =>{
  sum += element ;
   });

 var avg = sum/numberofSubjects;
 console.log("Studentot " + name + " ima prosek od " + avg);

3.
 var cars