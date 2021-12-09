const express = require("express");
const router = express.Router();

const {
  getAllUserGetCourse,
  // getCourseByID,
  postUserGetCourse,
} = require("../controllers/userGetCourse.controller");

router.get("/", getAllUserGetCourse);
// router.get("/:id", getCourseByID);
router.post("/", postUserGetCourse);
// update by id
// delete by id

module.exports = router;
