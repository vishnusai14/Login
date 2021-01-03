require("dotenv").config()
const express = require("express")
const model = require("../database/dbconnect")
const mongoose = require("mongoose")
const router = express.Router()
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")




router.get("/" , (req,res)=>{
    res.render("login")
})

router.get("/signup" , (req,res)=>{
    res.render("signup")
})



router.post("/login" ,(req,res)=>{
    let email = req.body.email
    let password = req.body.password
    model.findOne({email : email} , (err , found)=>{
        if(err){
            console.log(err)
        }else{
            if(found){
                console.log(found)
                if(found.password === password){
                    let token = JWT.sign({username  : found.username , id : found._id} , process.env.JWT_SECRET)
                    res.cookie('token' , token)
                    res.render("secret")
    
                }
            }else{
                console.log("No User Found")
            }
        }
    })
})


router.post("/signup" , (req,res)=>{
    console.log(req.body)
    let email = req.body.email
    let password = req.body.password
    let username = req.body.username
    console.log(email)
    // let hashPassword = bcrypt.hash(password , 15)
    let newUser = new model({
        email : email,
        password :password,
        username : username
    })
    console.log(newUser)
    newUser.save((err,user)=>{
        if(err){
            console.log(err)
        }else{
            console.log(user)
        }
    })
    res.redirect("/")
})


module.exports = router