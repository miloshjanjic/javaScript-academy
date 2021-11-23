const fetch = require('node-fetch');
const config = require('../config');

const API_KEY_MOVIE = config.get('movie').api_key_movie;
const API_PREFIX_MOVIE = `http://www.omdbapi.com/?apikey=`;

const movieCache = {};
const movieTitle = async (movie) => {
  let currentTimestamp = new Date().getTime();
  if (movieCache[movie] && movieCache[movie].timestamp > currentTimestamp) {
    return movieCache[movie].data;
  }

  let result = await fetch(`${API_PREFIX_MOVIE}${API_KEY_MOVIE}&t=${movie}`);
  let data = await result.json();

  movieCache[movie] = {
    data,
    timestamp: new Date().getTime() + 60 * 1000
  };

  return movieCache[movie].data;
};


module.exports = {
  movieTitle
}