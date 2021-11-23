var users = [
  {
    name : "Milosh" ,
    lastname : "Janjic" ,
    mail : "milosh_janjic@hotmail.com" ,
    years : 27
  },
  {
    name : "Stefan" ,
    lastname : "Jovanov" ,
    mail : "stefan_jovanov@hotmail.com" ,
    years : 15
  },
  {
    name : "Nikola" ,
    lastname : "Petrov" ,
    mail : "nikola_petrov@hotmail.com" ,
    years : 25 
  },
  {
    name : "Daniel" ,
    lastname : "Stojkov" ,
    mail : "daniel_stojkov@hotmail.com" ,
    years : 19
  }
];
var polnoletni = [];
var maloletni = [];

console.log(users.length);
for (i=0; i < users.length ; i++ ){
  console.log ("i=" +i);
  if(users[i].years > 18) {
    polnoletni.push(users[i]);
  }
  else{
    maloletni.push( users[i]);
  }
}
console.log("Lica koi sto se polnosletni se ");
for (j=0 ; j < polnoletni.length; j++){
  console.log(polnoletni[j].name);
}
console.log("Lica koi sto se maloletni se" );

for (i=0 ; i < maloletni.length ; i++){
  console.log(maloletni[i].name);
}