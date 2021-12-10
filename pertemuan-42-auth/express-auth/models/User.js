const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = Schema({
    fullname: String,
    email: String,
    password: String,
    isAdmin: Boolean
})

const User = mongoose.model("user", userSchema)

module.exports = User