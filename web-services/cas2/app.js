const express = require('express');
const app = express();

const cars = [
  {
    id: 1,
    model: 'Volvo',
    price: 4000
  },
  {
    id: 2,
    model: 'Fiat',
    price: 2500
  },
  {
    id: 3,
    model: 'Audi',
    price: 5000
  },
  {
    id: 4,
    model: 'Kia',
    price: 3200
  }
];

app.use(express.json());

app.get('/cars', (req, res) => {
  console.log('query params', req.query)
  if (req.query.price) {
    res.send(cars.filter((car) => car.price < req.query.price))
  }
  else{
    res.send(cars)
  }
});

app.listen(3000, () => { console.log('App is running on port 3000..'); });

// Napravete brand new express app, definirajte niza od objekti
//  kade sto sekoj objekt pretstavuva avtomobil. 
//  Za sekoj avtomobil se cuvaat id, name i price.
// Otvorete GET ruta /cars na koja kje gi dobiete site avtomobili
//  vo JSON response.Na istata ruta, dodadete moznost da se 
//  filtriraat samo onie avtomobili koi se poniski od nekoja cena.
//  Cenata da moze da se isprati kako query param
// (pr: /cars?price=50 da gi vrati site koli so cena poniska od 50)