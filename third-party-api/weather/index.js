// bojan@beyondbasics.co

// imports/requires
const express = require('express');
const weather = require('./handlers/weather');
const movies = require('./handlers/movie');
const config = require('./pkg/config');

// declarations
const api = express();

// middlewares
api.use(express.json());

// routes
api.get('/weather/:city', weather.getWeather);
api.get('/weather/city/:city/state/:state', weather.getWeatherByStateCity);

api.get('/movie/:title', movies.getMovie);

// start
api.listen(config.get('service').port, err => {
  if (err) {
    return console.log(err);
  }
  console.log(`Service successfully started on port ${config.get('service').port}`);
});