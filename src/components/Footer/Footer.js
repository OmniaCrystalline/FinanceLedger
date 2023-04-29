/** @format */

import "./Footer.style.scss";
import { FaYoutube, FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <ul className='footer_icon_list'>
          <li className='social_item'>
            <FaFacebook className='social_icon' />
          </li>
          <li className='social_item'>
            <FaTwitter className='social_icon' />
          </li>
          <li className='social_item'>
            <FaYoutube className='social_icon' />
          </li>
          <li className='social_item'>
            <FaLinkedinIn className='social_icon' />
          </li>
        </ul>
        <span className='footer_span'>Copyright © 2021 - FinanceLedger</span>
      </footer>
    </>
  );
};
