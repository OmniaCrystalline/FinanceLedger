/** @format */

import "./Cases.style.scss";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import useMediaQuery from "../../handlers/mediaQuery";

export const Cases = () => {
  const isMobile = useMediaQuery("max-width: 767px");
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const handleClick = (n) => openLightboxOnSlide(n);

  return (
    <>
      <section className='container cases relative'>
        <span className='hidden' id='cases'></span>
        <span className='cases_description_h'>This is what we do</span>
        <h3 className='cases_h'>Business Cases</h3>
        <p className='cases_description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <div>
          <div className='gallery'>
            <FsLightbox
              toggler={lightboxController.toggler}
              sources={source}
              slide={lightboxController.slide}
            />
            {isMobile &&
              source.map(
                (e, index) =>
                  isMobile && (
                    <Picture
                      n={index + 1}
                      key={index}
                      handleClick={handleClick}
                    />
                  )
              )}
            {!isMobile &&
              source.map(
                (e, index) =>
                  index < 6 && (
                    <Picture
                      n={index + 1}
                      key={index}
                      handleClick={handleClick}
                    />
                  )
              )}
          </div>
        </div>
      </section>
    </>
  );
};

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images/cases", false, /@2x\.(png|jpe?g|svg)$/)
);

const source = Object.values(images);

const Picture = ({ n, handleClick }) => {
  const j = require(`../../images/cases/cases${n}.jpg`);
  const j2 = require(`../../images/cases/cases${n}@2x.jpg`);
  const w = require(`../../images/cases/cases${n}.webp`);
  const w2 = require(`../../images/cases/cases${n}@2x.webp`);
  return (
    <>
      <div className='gallery_button' onClick={() => handleClick(n)}>
        <div className='cases_img_container'>
          <picture className='about_image'>
            <source srcSet={`${w}, image.webp`} />
            <source srcSet={`${w2} 2x, image.webp`} type='image/webp' />
            <source srcSet={`${j2} 2x, image.jpg `} type='image/jpeg' />
            <img src={`${j}`} alt={`case${n}`} />
          </picture>
        </div>
      </div>
    </>
  );
};
