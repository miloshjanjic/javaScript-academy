/*    Треба да напишете модул кој што ќе може:
  1. Да додава нов податок во json file 
  2. Да чита податоци од json file
  3. Да ажурира одреден податок од json file по id
  4. Да брише одреден податок од json file по id
  5. Да чита податоци за еден item од json file по id
  НАПОМЕНА: Кога ќе додавате нов item, треба да внимавате да не правите overwriting на json file, и податоците во json file да бидат во оваа структура [{}, {}, {}, {}]. Кога ќе ажурирате item треба да ја смените вредноста на property/properties кои ги менувате, на останати кои не ги ажурирате треба да и остане претходната вредност. Ова треба да биде исполнето. */

const fs = require('fs');

const person = {
  "id": "4",
  "firstName": "Koki",
  "lastName": "Kostov",
  "city" : "Kratovo"
}
const append = fs.appendFile('./json.json',JSON.stringify(person),(err)=>{
  if(err) throw err;
  console.log('The "person" was appended to file ')
});

/*
fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});    */
const read = fs.readFile('./json.json', (err,data)=> {
  if(err){
    console.log(err);
  }
  console.log(data.toString());
}); 
//console.log(read);  //  2. Да чита податоци од json file



