require("dotenv").config()
const express = require("express")
const model = require("../database/dbconnect")
const JWT = require("jsonwebtoken")

const Router = express.Router()


Router.get("/login/user" , (req,res)=>{
    let cookie = req.headers['cookie'].split(';')[3]
    let token = cookie.slice(7,cookie.length)
    let user = JWT.verify(token , process.env.JWT_SECRET)
    model.findOne({_id : user.id} , (err , found)=>{
        if(err){
            console.log(err)
        }
        if(found){
            console.log(found)
        }else{
            console.log("No Found")
        }
    })
})

module.exports = Router