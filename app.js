const express = require("express")
const app = express()
// const database = require("./database/dbconnect")
const bodyParser = require("body-parser")
// database.connnect
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))
PORT = process.env.PORT || 3000


app.set("view engine" , "ejs")

app.get("/" , require("./router/index"))
app.get("/signup" , require("./router/index"))

app.get("/login/user" , require("./router/after-login"))

app.post("/login" ,require("./router/index"))
app.post("/signup" ,require("./router/index"))




app.listen(PORT,()=>{
    console.log("Server Started")
})
