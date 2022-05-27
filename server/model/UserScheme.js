const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:2,
        max:30
    },
    email:{
        required:true,
        type:String,
        min:2,
        max:50
    },
    number:{
        required:true,
        type:Number,
        min:9
    },
    password:{
        required:true,
        type: String
    },
    work:{
        required:true,
        type: String 
    },
    
})



const User = mongoose.model('registration',userSchema)

module.exports = User;