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
    DivCustomArrow,
    DivCustomArrowLeft,
    DivCustomArrowRight,
    MarginLeft,
    MarginArrow,
    NamesSC,
} from "../styled-components-css/styled-AboutTeam";


import Andrey from '../images/Andrey.png';
import Irene from '../images/Irene.png';
import Lisa from '../images/Lisa.png';


const AboutTeamDesingCarousel = ({props}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 769 },
      items: 0,
      slidesToSlide: 0,
    },
    mobile: {
        breakpoint: { max:768 , min: 540 },
        items: 3,
        slidesToSlide: 1
      },
    smallmobile: {
        breakpoint: { max: 485, min: 360 },
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
      containerClass="carousel-containerTeam"
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
  
      
      
      >

                 <MarginLeft> <ImgIconSC Photo={Andrey} ><NamesSC>Andrey Baykov<br/>
UI/UX Designer</NamesSC></ImgIconSC  ></MarginLeft>
<ImgIconSC Photo={Irene} ><NamesSC>Irene Gordina<br/>
UI/UX Designer</NamesSC></ImgIconSC  >
                  <MarginLeft> <ImgIconSC Photo={Lisa} ><NamesSC>Lisa Raklova<br/>
UI/UX Designer</NamesSC></ImgIconSC  ></MarginLeft>
<ImgIconSC Photo={Andrey} ><NamesSC>Alina Sagaidak<br/>
Motion Designer</NamesSC></ImgIconSC  >
               
                

</Carousel>
    </>
  );
};

export default AboutTeamDesingCarousel;
