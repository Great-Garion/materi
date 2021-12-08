const express = require("express");
const router = express.Router();

const {
  getAllCourse,
  getCourseByID,
  postCourse,
} = require("../controllers/course.controller");

router.get("/", getAllCourse);
router.get("/:id", getCourseByID);
router.post("/", postCourse);
// update by id
// delete by id

module.exports = router;
