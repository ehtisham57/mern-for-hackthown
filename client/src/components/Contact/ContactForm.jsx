import React, { useState } from 'react'
import "./Contact.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ContactForm = () => {

      ///////////////////initializing form

  const [contact , setContact ]= useState({
    Contactname:"",
    Contactemail:"",
    ContactText:"",
  })
  let navigate = useNavigate();

  ////////////submit Form

  const formSubmit = (e)=>{
    e.preventDefault();

    axios
        .post("/api/contactform", contact)
        .then((res) => {
          console.log(res.data.message);
          alert(res.data.message)
          navigate("/")
        })
        .catch((err , res) => {
          console.log(err);
          alert(res.data.message)
        });
  }

  return (
   <>
    <form onSubmit={formSubmit}>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Name</label>

    <input type="text"
    placeholder="Enter Your Name" 
    class="form-control"
    value={contact.Contactname}
    onChange={(e)=>{
      setContact({...contact , Contactname :e.target.value})
    }}
    />

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>

    <input placeholder="Enter Your Email"
    type="email" class="form-control"
    id="exampleInputEmail1"
    value={contact.Contactemail}
    onChange={(e)=>{
      setContact({...contact , Contactemail :e.target.value})
    }}
    />

  </div>
  <div class="form-floating">

  <textarea class="form-control"
  placeholder="Leave a message here" 
  id="floatingTextarea"
  value={contact.ContactText}
  onChange={(e)=>{
    setContact({...contact , ContactText :e.target.value})
  }}
  >
  </textarea>

</div>
<br />
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default ContactForm