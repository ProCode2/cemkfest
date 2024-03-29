import Image from "next/image";
import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Image1 from "../public/images/gallery/1.webp";
import Image2 from "../public/images/gallery/2.webp";
import Image3 from "../public/images/gallery/3.webp";
import Image4 from "../public/images/gallery/4.webp";
import Image5 from "../public/images/gallery/5.webp";
import Image6 from "../public/images/gallery/6.webp";

const Slideshow = () => {
  //Array of Images
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#49668c"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#49668c"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };
  return (
    <div className="m-10">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <Image
              className="w-full max-w-2xl mx-3 object-contain rounded-md shadow-xl"
              src={each}
              alt="Spandan"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
