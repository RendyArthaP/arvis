import React from 'react'
import Slider1 from '../assets/images/Slider1.JPG';
import Slider2 from '../assets/images/Slider2.JPG';
import Slider3 from '../assets/images/Slider3.JPG';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from '../utils/Slider';

const Hero = () => {
  return (
    <div>
      <Slider
        {...settings}
        className="m-2 overflow-hidden h-auto mx-auto"
      >
        <img 
          src={Slider1} 
          alt="slider"
          className="px-2"
        />
        <img 
          src={Slider2} 
          alt="slider"
          className="px-2"
        />
        <img 
          src={Slider3} 
          alt="slider"
          className="px-2"
        />
      </Slider>
    </div>
  )
}

export default Hero
