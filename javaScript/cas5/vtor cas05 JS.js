// 1.click function
// 2. take data
// 3. create Table row 
// 3.1. create 3 TD
// 4. append tr to table
/// ? age > 18 ; name >5
// ?? remove user
function addUser(){
  var tdArray = getUserData();
  if(tdArray[0].length > 3 && tdArray[1].length > 3 && tdArray[2] > 16){
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    tdArray.forEach(element => {
      var td = document.createElement("td");
      td.innerHTML = element;
      tr.appendChild(td);
      table.appendChild(tr);
    });
  } 
  else{
    alert("Uslovite ne se ispolneti !");
  }
}
function removeUser(){
  var userTable = document.getElementById("table");
  if(userTable.childNodes.length > 2){
    userTable.removeChild(userTable.lastChild);
  }
}
//firstChild,secondChild,childNotes,konkreten element (za brisenje)
function getUserData(){
  var name = document.getElementById("nameInput").value;
  var lastName = document.getElementById("lastNameInput").value;
  var age = document.getElementById("ageInput").value;
  var userArray = [name,lastName,age];
  return userArray;
}
