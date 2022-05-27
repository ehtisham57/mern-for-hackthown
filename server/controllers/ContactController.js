const Contact = require("../model/ContactFormSchema")

const ContactCoontroller = async (req, res) => {

  const { Contactname, Contactemail,ContactText } =await req.body;
  const ContactOBJ= {
      ...req.body
    }
  if (!Contactname || !Contactemail || !ContactText) {
    return res.json({ message: "Required field are missing" });
  }
  else if(ContactText , Contactemail ,ContactText){
      
      Contact.create(ContactOBJ, (err , _)=>{
        if (err) {
            res.send(err);
          } else {
            res.status(201).send({ message: "Your Form Submitted" })
    
        }
      })
      
    }
 else {
      res.json({ error: "Invalid User" });
    } 
};

module.exports = ContactCoontroller; 