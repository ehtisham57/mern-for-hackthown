import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"
import HomeSliders from './HomeSliders'

const Contact = () => {
  return (
    <>
    <div className="home-main">
      <div>
        <h1 className='home-mainHeading'>Welcome To Our Store</h1>
        <h3 className='home-mainPara'>Here You Get All The Clothes Item</h3>
        <NavLink to="/products" className='home-mainLink'>Visit Here</NavLink>
      </div>       
    </div> 

                     {/*-------------------slider ----------------*/}
    <div className="container-fluid home-slider">
    <div className="container col-10 ">
      {<HomeSliders />}   
    </div></div>
    
    
    </>
  )
}

export default Contact
