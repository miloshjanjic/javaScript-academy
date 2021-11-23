const fetch = require('node-fetch');
const config = require('../config');

const API_KEY_WEATHER = config.get('weather').api_key_weather;
const API_PREFIX_WEATHER = `http://api.openweathermap.org/data/${config.get('weather').api_version_weather}`;

let cityCache = {};
const forCity = async (city) => {
  let currentTimestamp = new Date().getTime();
  if (cityCache[city] && cityCache[city].timestamp > currentTimestamp) {
    return cityCache[city].data;
  }

  let result = await fetch(`${API_PREFIX_WEATHER}/weather?q=${city}&appid=${API_KEY_WEATHER}`);
  let data = await result.json();

  cityCache[city] = {
    data,
    timestamp: new Date().getTime() + 60 * 1000
  };

  return cityCache[city].data;
};

let cityStateCache = {};
const forCityState = async (city, state) => {
  const currentTimestamp = new Date().getTime();
  if (cityStateCache[city] && cityStateCache[city].state == state && cityStateCache[city].timestamp > currentTimestamp) {
    return cityStateCache[city].city;
  }

  const result = await fetch(`${API_PREFIX_WEATHER}/weather?q=${city},${state}&units=metric&appid=${API_KEY_WEATHER}`);
  let data = await result.json();

  cityStateCache[city] = {
    city: data,
    state: state,
    timestamp: new Date().getTime() + 60 * 1000
  };

  return cityStateCache[city].city;
};

module.exports = {
  forCity,
  forCityState
};