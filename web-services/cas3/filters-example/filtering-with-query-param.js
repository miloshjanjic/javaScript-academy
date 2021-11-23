const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/carsdb',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

app.get('/cars', (req, res) => {
    console.log(req.query.price, typeof req.query.price, isNaN(req.query.price));

    if(req.query.price && Number.isInteger(parseInt(req.query.price))) {
      res.send(cars.filter((car) => car.price < req.query.price));
    } else {
      res.send(cars);
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000....')
});