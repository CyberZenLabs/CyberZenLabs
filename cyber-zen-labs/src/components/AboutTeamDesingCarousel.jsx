import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
    DivContainerAboutDevSC,
    DivDecriptionTextSC,
    GridContainerItemsSC,
    DivCustomTextSC,
    GridRowsIcons,
    ImgIconSC,
    GridColumnsIcons,
    GridColumnsSecondIcons,
    GridIconsSC,
    CarouselHidden,
    DivCustomArrow
} from "../styled-components-css/styled-AboutTeam";


import Andrey from '../images/Andrey.png';
import Irene from '../images/Irene.png';
import Lisa from '../images/Lisa.png';


const AboutDevCarousel = ({props}) => {

  const responsive = {
   
    mobile: {
        breakpoint: { max: 768, min: 480 },
        items: 3,
        slidesToSlide: 1
      },
    smallmobile: {
        breakpoint: { max: 480, min: 360 },
        items: 2,
        slidesToSlide: 2
      }
  };
  var settings = {
    
  }
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <DivCustomArrowRight onClick={() => onClick()} />;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <DivCustomArrowLeft onClick={() => onClick()} />;
  };
   
  return (
    <>




      <Carousel 
      containerClass="carousel-container"
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
  
      
      
      >

                  <ImgIconSC Photo={Andrey}/>
                  <ImgIconSC Photo={Irene}/>
                  <ImgIconSC Photo={Lisa}/>
                  <ImgIconSC Photo={Andrey}/>
               
                

</Carousel>
    </>
  );
};

export default AboutDevCarousel;
