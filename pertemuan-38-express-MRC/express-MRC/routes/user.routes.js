const express = require('express');
const route = express.Router()

const users = require('../models/User');

route.get("/", (req, res) => {
  res.json(users)
})

module.exports = route