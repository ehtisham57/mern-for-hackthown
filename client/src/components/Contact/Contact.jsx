import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Contact.css"


import ContactImg from "../../assets/contact-us.jpg"
import ContactForm from './ContactForm'


const Contact = () => {
  return (
    <>
    <div>
        <div className="contact-main">
      <div>
        <h1 className='contact-mainHeading'>Welcome To Our Store</h1>
        <h3 className='contact-mainPara'>Any Query You Feel Free To Contact Us</h3>
        <NavLink to="/products" className='contact-mainLink'>Visit Here</NavLink>
      </div>       
    </div> 
    </div>
    
    <div className="container">
      {
        <ContactForm />
      }
    </div>
    </>
  )
}

export default Contact
