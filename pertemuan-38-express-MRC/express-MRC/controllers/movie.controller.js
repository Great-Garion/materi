const movies = require("../models/Movie");

module.exports = {
  getAllMovie: (req, res) => {
    res.json(movies);
  },

  getMovieByID: (req, res) => {
    const { id } = req.params;

    let movie = movies.find((item) => item.id == id);
    if (movie) {
      res.json(movie);
    } else {
      res.json("movie not found");
    }
  },

  addMovie: (req, res) => {
    let movie = req.body;
    console.log("data dari body", movie);

    movies.push(movie);

    res.json("success added new movie");
  },
};
