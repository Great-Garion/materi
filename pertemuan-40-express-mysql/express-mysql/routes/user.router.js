const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  postUser,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/", postUser);
// update by id
// delete by id

module.exports = router;
