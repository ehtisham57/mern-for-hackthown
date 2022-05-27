import React from 'react'
import { NavLink } from 'react-router-dom'
import "./About.css"
import AboutFeatures from './AboutFeatures'
const About = () => {
  return (
   <>
   <div className="about-main">
      <div>
        <h1 className='about-mainHeading'>Best Qualit is a Our main periority </h1>
        <h3 className='about-mainPara'>Client Satisfation is an Important Thing</h3>
        <br /><br />
        <NavLink to="/products" className='about-mainLink'>Explore Now →</NavLink>
      </div>       
    </div>

    <div className="container col-10 ">
      <div className="about-features-heading">
        <h1>Features</h1>
      </div>
      <div className="about-ImageSection"> 
      {<AboutFeatures/>}
      </div>
     
    </div>
   </>
  )
}

export default About