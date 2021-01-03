const mongoose = require("mongoose")



const connect = mongoose.connect("mongodb://localhost:27017/todo-list-new4" ,   {useUnifiedTopology : true , useFindAndModify : true , useNewUrlParser : true})
const userSchema = mongoose.Schema({
    email : String,
    password : String,
    username : String
})
const userModel = new mongoose.model("users" , userSchema)
module.exports = userModel