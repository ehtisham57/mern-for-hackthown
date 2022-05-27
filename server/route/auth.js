const express = require("express")


const loginController = require("../controllers/LoginController")
const signupController = require("../controllers/SignupController")
const ContactCoontroller =require("../controllers/ContactController")

// const bcryptjs = require("bcryptjs");
const router = express.Router()

///////////requires


require("../DB/conn")
const User = ("../model/UserScheme.js")
const contact = ("../model/ContactFormSchema.js")

/////////////////////////All routers

router.post("/register", signupController);
router.post("/login", loginController);
router.post("/api/contactform", ContactCoontroller);


module.exports = router