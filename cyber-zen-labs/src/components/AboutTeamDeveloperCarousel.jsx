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
    NameSC
} from "../styled-components-css/styled-AboutTeam";


import Sam from '../images/Sam.png';
import Kirill from '../images/Kirill.png';
import Ruslan from '../images/Ruslan.png';
import Ilya from '../images/Ilya.png';
import Sveta from '../images/Sveta.png';
import Stas from '../images/Stas.png';
import Dmitry from '../images/Dmitry.png';


const AboutTeamDesingCarousel = ({props}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1030 },
      items: 0,
      slidesToSlide: 0,
    },
    Desctop: {
        breakpoint: { max:1030 , min: 775 },
        items: 4,
        slidesToSlide: 1
      },
    mobile: {
        breakpoint: { max:775 , min: 485 },
        items: 3,
        slidesToSlide: 1
      },
    smallmobile: {
        breakpoint: { max: 485, min: 370 },
        items: 3,
        slidesToSlide: 1
      },
      verysmallmobile: {
        breakpoint: { max: 370, min: 240 },
        items: 2,
        slidesToSlide: 1
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
      containerClass="carousel-containerTeamDev"
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
  
      
      
      >

 <ImgIconSC Photo={Sam} > <NameSC>Sam Singer<br/>
  Founder and Owner </NameSC></ImgIconSC>
<ImgIconSC Photo={Kirill} > <NameSC>Kirill Drozdov<br/>
Full-stack Developer
 </NameSC></ImgIconSC>
 <ImgIconSC Photo={Ruslan} > <NameSC>Ruslan Gordin<br/>
Frontend Developer
 </NameSC></ImgIconSC>
 <ImgIconSC Photo={Ilya} > <NameSC>Ilya Morozov<br/>
Backend Developer
 </NameSC></ImgIconSC>
 <ImgIconSC Photo={Sveta} > <NameSC>Svetlana Soboleva<br/>
Frontend Developer
 </NameSC></ImgIconSC>
 <ImgIconSC Photo={Stas} > <NameSC>Stanislav Maximov<br/>
Backend Developer
 </NameSC></ImgIconSC>
 <ImgIconSC Photo={Dmitry} > <NameSC>Dmitry Galtsov<br/>
Frontend Developer
 </NameSC></ImgIconSC>
               
                

</Carousel>
    </>
  );
};

export default AboutTeamDesingCarousel;
