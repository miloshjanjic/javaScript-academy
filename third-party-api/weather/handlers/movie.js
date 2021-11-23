const movies = require('../pkg/movie');

const getMovie = async (req, res) => {
  try {
    let data = await movies.movieTitle(req.params.title);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send('Internal Server Error');
    console.log(err);
  }
};

module.exports = {
  getMovie
}