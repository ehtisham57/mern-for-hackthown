const mongoose = require("mongoose")

const ContactFormSchema = new mongoose.Schema({
    Contactname:{
        type:String,
        required:true,
        min:2,
        max:30
    },
    
    Contactemail:{
        required:true,
        type:String,
        min:2,
        max:50
    },
    ContactText :{
        required:true,
        type:String,
        max:1200
    }
})



const Contact = mongoose.model('contact',ContactFormSchema)

module.exports = Contact;