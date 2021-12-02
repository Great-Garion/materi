const express = require("express");
const { mwUser } = require("../utils/middleware");
const route = express.Router();
const movieRouter = require("./movie.routes");
const userRouter = require('./user.routes');

route.get("/", (req, res) => {
  res.json("ini dari express");
});

route.use("/movie", movieRouter);
route.use("/user", mwUser, userRouter)

module.exports = route;
