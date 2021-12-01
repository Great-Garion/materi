const express = require("express");
const route = express.Router();
const movieRouter = require("./movie.routes");

route.get("/", (req, res) => {
  res.json("ini dari express");
});

route.use("/movie", movieRouter);

module.exports = route;
