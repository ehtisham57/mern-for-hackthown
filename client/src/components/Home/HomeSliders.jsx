import React from 'react'
import "./Home.css"

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


import Sli1 from "../../assets/slider1.jpg"
import Sli2 from "../../assets/slider2.jpg"
import Sli3 from "../../assets/slider3.jpg"
import Sli4 from "../../assets/slider4.jpg"
import Sli5 from "../../assets/slider5.jpg"
import Sli6 from "../../assets/slider6.jpg"
import Sli7 from "../../assets/slider7.jpg"
import Sli8 from "../../assets/slider8.jpg"




const HomeSliders = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);


  return (
    <>
    {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Sli2} className="d-block w-100" height="500px" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={Sli2} className="d-block w-100" height="700px" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={Sli3} className="d-block w-100" height="700px" alt="..." />
    </div>
  </div>
</div> */}
<div className="home-Slider">
<AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    animation="cubeAnimation"
    interval={6000}
  >
    <div data-src={Sli1} />
    <div data-src={Sli2} />
    <div data-src={Sli3} />
    <div data-src={Sli4} />
    <div data-src={Sli5} />
    <div data-src={Sli6} />
    <div data-src={Sli7} />
    <div data-src={Sli8} />

  </AutoplaySlider>
  </div>

    </>
  )
}

export default HomeSliders