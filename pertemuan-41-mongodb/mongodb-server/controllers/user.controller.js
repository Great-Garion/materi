const db = require("../config/db");
const User = require("../models/User")

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({}, "-password -__v")

      res.json(users)
      
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: error.message || 'Internal Server Error'
      })
    }
  },

  getUserByID: async (req, res) => {
    try {
      const {id} = req.params
      const user = await User.findById(id, "-password -__v")

      res.json(user)
      
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: error.message || 'Internal Server Error'
      })
    }
  },

  postUser: async (req, res) => {
    try {
      let user = req.body;

      await User.create(user)

      res.json("user has been created")

    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
