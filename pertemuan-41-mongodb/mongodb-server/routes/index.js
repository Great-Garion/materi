const express = require("express")
const router = express.Router()

const userRouter = require("./user.router")
const courseRouter = require("./course.router")
const UserGetCourseRouter = require("./userGetCourse.router")

router.get("/", (req, res) => {
    res.status(200).json("hallo ini dari express")
})

router.use("/user", userRouter)
router.use("/course", courseRouter)
router.use("/user-get-course", UserGetCourseRouter)

module.exports = router