const db = require("../config/db");
const Course = require("../models/Course")

module.exports = {
  getAllCourse: async (req, res) => {
    try {
      const courses = await Course.find({}, "-__v")

      res.json(courses)
      
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: error.message || 'Internal Server Error'
      })
    }
  },

  getCourseByID: async (req, res) => {
    try {
      const {id} = req.params
      const course = await Course.findById(id, "-__v")

      res.json(course)
      
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: error.message || 'Internal Server Error'
      })
    }
  },

  postCourse: async (req, res) => {
    try {
      let course = req.body;

      const newCourse = await Course.create(course)

      res.json("course has been created")

    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
