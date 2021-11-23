const express = require('express');
const app = express()

// db simulation
const players = [
  {
    name: 'Boban',
    lastName: 'Sugareski'
  },
  {
    name: 'Kosta',
    lastName: 'Petrov'
  },
  {
    name: 'Nikola',
    lastName: 'G.'
  }
];

app.use(express.json());
// app.use(express.urlencoded());

app
  .get('/people', (req, res) => {
    console.log('Ova se query params', req.query)
    res.send({
      message: 'GET request to /people',
      players: players,
      name: req.body.name
    });
  })
  .get('/people/:name/:lastName', (req, res) => {

    console.log(req.params)
    res.send(`${req.params.name} ${req.params.lastName} naviva za Arsenal`)
  })

  .get('/people', (req, res) => {
    console.log('query params', req.query)
    res.send({
      message: 'GET request to/people',
      players: players,
      name: req.body.name
    });
  })

  .get('/game', (req, res) => {
    console.log(`${req.query.ime} saka ${req.query.sport}`);
    res.send(`${req.query.ime} saka ${req.query.sport}`);
  })
  .get('/school/:name/:lastName/:birth/:school', (req, res) => {
    console.log(`${req.params.name} ${req.params.lastName} ${req.params.birth}godishte uci vo ${req.params.school}`);
    res.send(`${req.params.name} ${req.params.lastName} ${req.params.birth}-to godishte uci vo ${req.params.school}`)

  })

  .get('/people/:id', (req, res) => {
    console.log(req.params.id)
    const user1 = { name: 'Nikola' }
    res.send(user1)
  })

  .post('/people', (req, res) => {
    console.log('Ova e body na request', req.body)
    res.send('POST /people')
  })

app.listen(3000, () => { console.log('App is running on port 3000....'); });

// Domasna 1: Da se iskoristi json middleware za da se parse-iraat podatocite isprateni vo request-ot
// hint: podatocite treba da gi dobiete vo req.body

//! query parametrite se zemaa so req.query
//! /users - vaka izgleda vo express
//! /users?id=5&name=Boban - vaka izgleda vo browser
//! req.query = {
//!   id: 5,
//!   name: Boban
// }

//! route parametrite se zemaa so req.params
//! /users/:id/profiles/:name vaka se pisuva vo express
//! /users/5/profiles/boban vaka izgleda vo browser
//! req.params = {
//!   id: 5,
//!   name: Boban
// }