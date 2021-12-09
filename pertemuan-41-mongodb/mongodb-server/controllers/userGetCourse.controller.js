const db = require("../config/db");
const UserGetCourse = require("../models/UserGetCourse")

module.exports = {
  getAllUserGetCourse: async (req, res) => {
    try {
      const userGetCourse = await UserGetCourse.find({}, "-__v").populate("user course")

      res.json(userGetCourse)
      
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: error.message || 'Internal Server Error'
      })
    }
  },

//   getUserByID: async (req, res) => {
//     try {
//       const {id} = req.params
//       const user = await User.findById(id, "-password -__v")

//       res.json(user)
      
//     } catch (error) {
//       console.log(error)
//       res.status(500).json({
//         message: error.message || 'Internal Server Error'
//       })
//     }
//   },

  postUserGetCourse: async (req, res) => {
    try {
      let data = req.body;

      await UserGetCourse.create(data)

      res.json("user success get this course")

    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
