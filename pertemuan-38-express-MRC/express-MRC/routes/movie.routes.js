const express = require("express");
const route = express.Router();

const {
  getAllMovie,
  getMovieByID,
  addMovie,
} = require("../controllers/movie.controller");

route.get("/", getAllMovie);
route.get("/:id", getMovieByID);
route.post("/", addMovie);

module.exports = route;
