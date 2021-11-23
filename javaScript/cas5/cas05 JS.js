// filter .  map
// var numbers = [4,8,9,15,22];
// var temp = numbers.map(Math.sqrt);
// console.log(temp);

// Manipulacija na DOM elementi
// menuvanje dodavanje kreiranje novie elementi brisenje
// 3 nacin na pristap do dokumentot: ID, Klasa i ime na Tag

// var input = document.getElementById("testId").value;
// var input = document.getElementsByClassName("testClass")[0];
// var input = document.getElementsByTagName("input")[0];
// 
document.getElementById("nameBtn").onclick = function () {
  var name = document.getElementById("name");
  var lastname = document.getElementById("lastname");
  if (name.value.length < 3) {
    // name.style.border = "1px solid red";
    // postavuvanje na CSS klasa na elementot
    name.setAttribute("class", "redBorder");
    console.log("Dolzinata na imeto e premnogu mala minimum 3")
  }
  else {
    console.log("Hello " + name.value + " " + lastname.value);
  }
  name.style.border = "1px solid red";
  // promena na vrednost na paragrafot
  var p = document.getElementsByTagName("p")[0];
  p.innerHTML = "promenet paragraf !";
  // kreiranje na elementi
  var myElement = document.createElement("p");
  myElement.innerHTML = "Custom paragraf !";
  // Morame da go zalepime (dodademe) na nekoj parent element za da moze da ni se pojavi vo DOM
  var myDiv = document.getElementById("myDiv");
  myDiv.appendChild(myElement);

  console.log(myElement);
}

