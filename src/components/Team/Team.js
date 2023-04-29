/** @format */

import "./Team.style.scss";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export const Team = () => {
  return (
    <section className='container team_container'>
      <span className='hiden'></span>
      <span className='team_span'>Who we are</span>
      <h4 className='team_h'>Our Professional Team</h4>
      <p className='team_p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className='team_list'>
        <li className='team_item'>
          <PictureTeam n={1} />
          <span className='item_name'>John Doe</span>
          <span className='item_job'>President</span>
        </li>

        <li className='team_item'>
          <PictureTeam n={2} />
          <span className='item_name'>Jane Doe</span>
          <span className='item_job'>Vice President</span>
        </li>

        <li className='team_item'>
          <PictureTeam n={3} />
          <span className='item_name'>Steve Smith</span>
          <span className='item_job'>Marketing Head</span>
        </li>
      </ul>
    </section>
  );
};

const PictureTeam = ({ n }) => {
  const j = require(`../../images/team/person${n}.jpg`);
  const j2 = require(`../../images/team/person${n}@2x.jpg`);
  const w = require(`../../images/team/person${n}.webp`);
  const w2 = require(`../../images/team/person${n}@2x.webp`);

  return (
    <>
      <div className='team_img_container'>
        <SocialLinks/>
        <picture className='team_image'>
          <source srcSet={`${w}, image.webp`} />
          <source srcSet={`${w2} 2x, image.webp`} type='image/webp' />
          <source srcSet={`${j2} 2x, image.jpg `} type='image/jpeg' />
          <img src={`${j}`} alt={`case${n}`} />
        </picture>
      </div>
    </>
  );
};

const SocialLinks = () => {
  return (
    <ul className='team_icons'>
      <li className='social_item team_social_item'>
        <FaFacebook className='social_icon' />
      </li>
      <li className='social_item team_social_item'>
        <FaTwitter className='social_icon' />
      </li>
      <li className='social_item team_social_item'>
        <FaYoutube className='social_icon' />
      </li>
      <li className='social_item team_social_item'>
        <FaLinkedinIn className='social_icon' />
      </li>
    </ul>
  );
};
