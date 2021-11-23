 var day=prompt("Enter your day..");
 var dayNumber=0;

  if (day=="ponedelnik"){
   dayNumber="1";
  }
  else if (day=="vtornik"){
   dayNumber="2";
  }
  else if(day=="sreda"){
    dayNumber="3";
  }  
  else if(day=="cetvrtok"){
    dayNumber="4";
  }
  else if(day=="petok"){
    dayNumber="5";
  }
   else if(day=="sabota"){
    dayNumber="6";
  }
   else if(day=="nedela"){
    dayNumber="7";
  }
  else {
    dayNumber="denot ne postoi"
  }
  console.log (day + " e " + dayNumber + " den od nedelata ");