/** @format */
import "../../variables.scss";

import "./About.style.scss";
import people from "../../images/home/people.jpg";
import peopleW from "../../images/home/people.webp";
import people2 from "../../images/home/people@2x.jpg";
import people2W from "../../images/home/people@2x.webp";

export const About = () => {
  return (
    <>
      <section className='container about relative'>
        <span className='hidden' id='about'></span>
        <div className='about_image_container'>
          <picture className='about_image'>
            <source srcSet={`${peopleW}, image.webp`} />
            <source srcSet={`${people2W} 2x, image.webp`} type='image/webp' />
            <source srcSet={`${people2} 2x, image.jpg `} type='image/jpeg' />
            <img src={`${people}`} alt='people' />
          </picture>
        </div>

        <div className='about_content'>
          <span className='about_you'>What you are looking for</span>
          <h2 className='about_h'>We provide bespoke solutions</h2>
          <p className='about_p'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button type='button' className='btn contrast_btn'>
            Read More
          </button>
        </div>
      </section>
    </>
  );
};
