const express = require('express');
const bodyParser = require('body-parser'); // ovozmozuva parsiranje na celoto body koe ke go isprakjame kako request i ke go dobivame kako response
// da gi procitame site podatoci od users.json vo index.js
const usersDb = require('./db/users.json');
const fs = require('fs');
// so ovoj kod od 5-ta do 11 linija imame setirano ednostavna express js aplikacija
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD operation (Create, Read, Update, Delete)
// HTTP Methods (POST, GET, PUT, DELETE)
/*  Params gi oznacuva site parametri koi eden request gi sodrzi, najcesto vo URL path se oznacuva kako ':param' kade param moze da bide property od objektot koj sto go citame.
Params e property object od req.*/

// List
app.get('/users', (req, res) => {
  res.send({ body: usersDb });
})

// Get
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  // da gi procitame i da se zapoznaeme so propertijata od req.

  const isFound = usersDb.findIndex(user => user.id === id) > -1; //vrakja objekt dokolku go pronajde. Pa so proverkata if(isFound)

  if (isFound) { //sekogas vrakja false, bidejki isFound ima vrednost na objekt a ne true ili false. 
    const foundUser = usersDb.find(user => user.id === id);
    res.send({ body: foundUser });
  } else {
    res.send({ error: `User ${id} is not found.` });
  }
});

// Create
app.post('/users', (req, res) => {
  const {
    firstName,
    lastName,
    username
  } = req.body;

  const requestPayload = {
    id: String(usersDb.length + 1),
    firstName,
    lastName,
    username
  }

  usersDb.push(requestPayload);
  fs.writeFileSync('./db/users.json', JSON.stringify(usersDb), (error) => {
    console.log(`${error}`);
  })
  res.send({ body: usersDb });
})

// Update   ( splice )
// Напишете го остатокот од фунцијата која што треба да овозможи ажурирање на податоците на корисникот според внесениот id
// Овозможете проверка на валидација кој што треба да врати грешка доколку корисникот не постои со внесеното id, во спротивно,
// да овозможи ажурирање

app.put('/users/:id', (req, res) => {
  const {
    firstname,
    lastname,
    username
  } = Object.assign({}, req.body);

  const { id } = req.params;

  const userIndex = usersDb.findIndex(user => user.id === id); // user.id i id se i dvete string i zatoa proverkata === e okej. So ova go naogjame indeksot na objektot vo nizata

  if (userIndex > -1) {
    if (req.body.id) {
      res.send({ error: "Id cant be owervriten" });
    } else {
      const toUpdateData = {
        id,
        firstname,
        lastname,
        username
      } //se updejtuva celiot objekt a ne samo eden atribut na objektot
      usersDb[userIndex] = toUpdateData;
      res.send({ body: usersDb }); // vo body moze da go dodelime i req.body
      fs.writeFileSync('./db/users.json', JSON.stringify(usersDb), (error) => {
        console.log(`${error}`)
      })
    }
  } else {
    res.send({ error: `Users ${id} is not found.` });
  }

});

// Delete  (  pop || splice )
// Напишете го остатокот од фунцијата која што треба да овозможи бришење на корисник според внесениот id

app.delete('/users/:id', (req, res) => {
  // const delete = usersDb.find(user => user.id == id);
  // const del = usersDb.indexOf();
  const { id } = req.params;

  const userIndex = usersDb.findIndex(user => user.id === id);

  if (userIndex > -1) {
    usersDb.splice(userIndex, 1); //[1.2.3.]  splice prima index i od toj index mu kazuvame kolku elementi da izbrisi. Vo ovoj slucaj od index na user-ot zima eden i so toa go brisi samiot korisnik
    fs.writeFileSync('./db/users.json', JSON.stringify(usersDb), (error) => {
      console.log(`${error}`)
    })
    res.send({ body: `User ${id} has been removed` });
  } else {
    res.send({ error: `User ${id} is not found` });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
})