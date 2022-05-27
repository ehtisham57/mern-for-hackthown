import React from 'react'
import { NavLink } from 'react-router-dom'
import "./About.css"


import Sli1 from "../../assets/slider1.jpg"
import Sli3 from "../../assets/slider3.jpg"
import Sli4 from "../../assets/slider4.jpg"
import Sli5 from "../../assets/slider5.jpg"
import Sli6 from "../../assets/slider6.jpg"
import Sli7 from "../../assets/slider7.jpg"
import Sli8 from "../../assets/slider8.jpg"



const AboutFeatures = () => {
  return (
  <>
  <div className="container">
  <div class="row row-cols-1 row-cols-md-3 g-4">


  <div class="col">
    <div class="card-group">
  <div class="card CardObj">
    <img src={Sli1} class="card-img-top" alt="..." />
    <div class="card-footer">
    <NavLink to="/products" className='about-cardLink'>Explore Now →</NavLink>
    </div>
  </div>
</div>
</div>



<div class="col">
    <div class="card-group">
  <div class="card CardObj">
    <img src={Sli3} class="card-img-top" alt="..." />
    <div class="card-footer">
    <NavLink to="/products" className='about-cardLink'>Explore Now →</NavLink>
    </div>
  </div>
</div>
</div>

<div class="col">
    <div class="card-group">
  <div class="card CardObj">
    <img src={Sli4} class="card-img-top" alt="..." />
    <div class="card-footer">
    <NavLink to="/products" className='about-cardLink'>Explore Now →</NavLink>
    </div>
  </div>
</div>
</div>

<div class="col">
    <div class="card-group">
  <div class="card CardObj">
    <img src={Sli5} class="card-img-top" alt="..." />
    <div class="card-footer">
    <NavLink to="/products" className='about-cardLink'>Explore Now →</NavLink>
    </div>
  </div>
</div>
</div>

<div class="col">
    <div class="card-group">
  <div class="card CardObj">
    <img src={Sli6} class="card-img-top" alt="..." />
    <div class="card-footer">
    <NavLink to="/products" className='about-cardLink'>Explore Now →</NavLink>
    </div>
  </div>
</div>
</div>

<div class="col">
    <div class="card-group">
  <div class="card CardObj">
    <img src={Sli7} class="card-img-top" alt="..." />
    <div class="card-footer">
    <NavLink to="/products" className='about-cardLink'>Explore Now →</NavLink>
    </div>
  </div>
</div>
</div>

<div class="col">
    <div class="card-group">
  <div class="card CardObj">
    <img src={Sli8} class="card-img-top" alt="..." />
    <div class="card-footer">
    <NavLink to="/products" className='about-cardLink'>Explore Now →</NavLink>
    </div>
  </div>
</div>
</div>


</div>
</div>
  
    </>
  )
}

export default AboutFeatures