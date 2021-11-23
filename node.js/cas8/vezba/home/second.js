const express = require('express');
const bodyParser = require('body-parser');
​
const usersDb = require('./db/users.json');
const fs=require('fs');
// const { stringify } = require('querystring');
const app = express();
const PORT = process.env.PORT || 3000;
const path=require('path');
​
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
​
  const isFound = usersDb.findIndex(user => user.id === id) > -1;
​
  if (isFound) {
    const foundUser = usersDb.find(user => user.id === id);
    res.send({ body: foundUser });
    
  } else {
    res.send({ error: `User ${id} is not found.`});
  }
});

// Create
app.post('/users', (req, res) => {
  const {
    firstName,
    lastName,
    username
  } = req.body;
​
  const requestPayload = {
    id: String(usersDb.length + 1),
    firstName,
    lastName,
    username
  }
​
  usersDb.push(requestPayload);
  fs.writeFileSync('./db/users.json',JSON.stringify(usersDb),(error)=>{
    console.log(`${error}`)
    })
  res.send({ body: usersDb });
  
})


// Update   ( splice )
// Напишете го остатокот од фунцијата која што треба да овозможи ажурирање на податоците на корисникот според внесениот id
  // Овозможете проверка на валидација кој што треба да врати грешка доколку корисникот не постои со внесеното id, во спротивно,
  // да овозможи ажурирање

  app.put('/users/:id', (req, res) => {
    const {
      firstName,
      lastName,
      username
    } = Object.assign({}, req.body);
  ​
    // Напишете го остатокот од фунцијата која што треба да овозможи ажурирање на податоците на корисникот според внесениот id
    // Овозможете проверка на валидација кој што треба да врати грешка доколку корисникот не постои со внесеното id, во спротивно,
    // да овозможи ажурирање
  ​
    const { id } = req.params; // req.params.id
  ​
    const userIndex = usersDb.findIndex(user => user.id === id);
  ​
    if (userIndex > -1) {
      if (req.body.id) {
        res.send({ error: "Id cann't be overwritten." });
      } else {
        const toUpdateData = {
          id,
          firstName,
          lastName,
          username
        }
        usersDb[userIndex] = toUpdateData;
  ​
        res.send({ body: usersDb });
        fs.writeFileSync('./db/users.json',JSON.stringify(usersDb),(error)=>{
          console.log(`${error}`)
        })
      }
    } else {
      res.send({ error: `User ${id} is not found.`});
    }
  });
  

// Delete  (  pop || splice )
  // Напишете го остатокот од фунцијата која што треба да овозможи бришење на корисник според внесениот id

  app.delete('/users/:id', (req, res) => {
    ​
      const { id } = req.params;
      const userIndex = usersDb.findIndex(user => user.id === id);
      if (userIndex > -1) {
        usersDb.splice(userIndex, 1);
        fs.writeFileSync('./db/users.json',JSON.stringify(usersDb),(error)=>{
          console.log(`${error}`)
        })
        res.send({ body: `User ${id} has been removed.`});
        
      } else {
        res.send({ error: `User ${id} is not found.`});
      }
    });
    

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
})