/** @format */

import "./Hero.style.scss";

import { FaAngleRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className='container hero_container' id='home'>
      <div className='hero_content'>
        <p className='hero_slogan'>The Sky Is The Limit</p>
        <h1 className='hero_p'>We provide world class financial assistance</h1>
        <button className='btn hero_btn green_btn' type='button'>
          <FaAngleRight className='arrow_btn' />
          Read More
        </button>
      </div>
    </div>
  );
};


