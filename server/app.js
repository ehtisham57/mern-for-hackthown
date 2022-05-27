const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");


////////////////////PORT
dotenv.config({path:"./config.env"})
const app = express()
const PORT = process.env.PORT


// const User = require("./model/UserScheme")
require("./DB/conn")

///////////////////////////middleware
app.use(express.json())
app.use(require("./route/auth"))

//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// middleware()

const middleware = (req ,res,next)=>{
    // console.log("Hello my middleware");
    next()
}



/////////////////////all routes

app.get('/',(req,res)=>{
    res.send("HEllo world")
})

app.get('/about',middleware,(req,res)=>{
    res.send("HEllo about world")
})

app.get('/contact',(req,res)=>{
    res.send("HEllo contact world")
})

app.get('/signup',(req,res)=>{
    res.send("HEllo signup world")
})

app.get('/signin',(req,res)=>{
    res.send("HEllo signin world")
})


////////////////////////server listen

app.listen(PORT ,()=>{console.log(`localhost://${PORT}`)})