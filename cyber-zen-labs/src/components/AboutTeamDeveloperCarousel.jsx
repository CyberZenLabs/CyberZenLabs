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
    NameSC,
    MarginLeft2,
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
      breakpoint: { max: 4000, min: 1601 },
      items: 0,
      slidesToSlide: 0,
      
    },
    PC: {
      breakpoint: { max:1600 , min: 1201 },
      
      items: 5,
      slidesToSlide: 1
      
    },
    
    Desctop: {
        breakpoint: { max:1200 , min: 931 },
        
        items: 4,
        slidesToSlide: 2
        
      },
    mobile: {
        breakpoint: { max:930 , min: 671 },
        
        items: 3,
        slidesToSlide: 2
      },
    smallmobile: {
      
        breakpoint: { max: 670, min: 370 },
        items: 2,
        slidesToSlide: 2
      },
      verysmallmobile: {
        
        breakpoint: { max: 370, min: 240 },
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
      
       
      containerClass="carousel-containerTeamDev"
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        itemClass="carousel-itemTeamDev"
        partialVisible={false}
        spacing={5}
      
      >

 <MarginLeft2><ImgIconSC Photo={Sam} > <NameSC>Sam Singer<br/>
  Founder and Owner </NameSC></ImgIconSC></MarginLeft2>
<ImgIconSC Photo={Kirill} > <NameSC>Kirill Drozdov<br/>
Full-stack Developer
 </NameSC></ImgIconSC>
 <MarginLeft2><ImgIconSC Photo={Ruslan} > <NameSC>Ruslan Gordin<br/>
Frontend Developer
 </NameSC></ImgIconSC></MarginLeft2>
 <ImgIconSC Photo={Ilya} > <NameSC>Ilya Morozov<br/>
Backend Developer
 </NameSC></ImgIconSC>
 <MarginLeft2><ImgIconSC Photo={Sveta} > <NameSC>Svetlana Soboleva<br/>
Frontend Developer
 </NameSC></ImgIconSC></MarginLeft2>
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
