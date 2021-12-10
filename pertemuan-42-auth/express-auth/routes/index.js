const express = require("express")
const validateToken = require("../middlewares/validateToken")
const router = express.Router()

const authRouter = require("./auth.router")
const userRouter = require("./user.router")


router.get("/", (req, res) => {
    res.json("belajar auth dari express")
})

router.use("/auth", authRouter)

router.use(validateToken)
router.use("/user", userRouter)

module.exports = router