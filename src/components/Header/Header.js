/** @format */

import "./Header.style.scss";
import { FaBookOpen } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { useEffect } from "react";
import { useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isTransparent, setIsTransparent] = useState(false);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const breakpoint = window.innerWidth >= 768 ? 70 : 120;
      setIsTransparent(scrollHeight >= breakpoint);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        className={
          isTransparent ? "scrolled header_container container" : "header_container container"
        }>
        <div className='logo'>
          <FaBookOpen className='logo_icon' />
          <span className='finance'>Finance</span>
          <span className='ledger'>Ledger</span>
        </div>

        <div className='header_links_container'>
          <AnchorLink
            className={
              activeLink === "home"
                ? "header_nav_link active"
                : "header_nav_link"
            }
            onClick={() => handleSetActiveLink("home")}
            href='#home'>
            Home
          </AnchorLink>
          <AnchorLink
            className={
              activeLink === "about"
                ? "header_nav_link active"
                : "header_nav_link"
            }
            onClick={() => handleSetActiveLink("about")}
            href='#about'>
            About
          </AnchorLink>
          <AnchorLink
            className={
              activeLink === "cases"
                ? "header_nav_link active"
                : "header_nav_link"
            }
            onClick={() => handleSetActiveLink("cases")}
            href='#cases'>
            Cases
          </AnchorLink>
          <AnchorLink
            href='#blog'
            className={
              activeLink === "blog"
                ? "header_nav_link active"
                : "header_nav_link"
            }
            onClick={() => handleSetActiveLink("blog")}>
            Blog
          </AnchorLink>
          <AnchorLink
            href='#contact'
            className={
              activeLink === "contact"
                ? "header_nav_link active"
                : "header_nav_link"
            }
            onClick={() => handleSetActiveLink("contact")}>
            Contact
          </AnchorLink>
        </div>
      </div>
    </header>
  );
};
