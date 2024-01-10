const mongoose = require("mongoose")
mongoose.connect("")

const schema = mongoose.Schema({
    name: String,
    description: String,
    interest: String,
    facebook: String,
    linkedin: String
})

const User = mongoose.model("User",schema)

module.exports = {
    User
}