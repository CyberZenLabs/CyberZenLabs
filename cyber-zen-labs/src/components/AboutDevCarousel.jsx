import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {CgChevronRight, CgChevronLeft} from "react-icons/cg";

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
    DivCustomArrowRight,
    DivCustomArrowLeft
} from "../styled-components-css/styled-AboutDev";


import AfterEffects from '../images/DevIcons/AfterEffects.svg';
import EtherJS from '../images/DevIcons/EthersJS.svg';
import Etherum from '../images/DevIcons/Etherum.svg';
import Express from '../images/DevIcons/Express.svg';
import Figma from '../images/DevIcons/Figma.svg';
import HardHat from '../images/DevIcons/HardHat.svg';
import HTML5 from '../images/DevIcons/HTML5.svg';
import JS from '../images/DevIcons/JS.svg';
import METAMASK from '../images/DevIcons/METAMASK.svg';
import MySQL from '../images/DevIcons/MySQL.svg';
import node from '../images/DevIcons/node.svg';
import PostgreSQL from '../images/DevIcons/PostgreSQL.svg';
import PyTeAl from '../images/DevIcons/PyTeAl.svg';
import Python from '../images/DevIcons/Python.svg';
import ReactIcon from '../images/DevIcons/React.svg';
import Sass from '../images/DevIcons/Sass.svg';
import Selenium from '../images/DevIcons/Selenium.svg';
import Solidity from '../images/DevIcons/Solidity.svg';
import styled_components from '../images/DevIcons/styled_components.svg';
import TRUFFLE from '../images/DevIcons/TRUFFLE.svg';
import web3 from '../images/DevIcons/web3.svg';
import Z from '../images/DevIcons/Z.svg';
import AI from '../images/DevIcons/AI.svg';
const AboutDevCarousel = ({props}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1420 },
      items: 0,
      slidesToSlide: 0

    },
    desktop: {
      breakpoint: { max: 1420, min: 1200 },
      items:8,
      slidesToSlide: 8
    },
    smalldesktop: {
      breakpoint: { max: 1200, min: 1000 },
      items:7,
      slidesToSlide: 8
    },
    tablet: {
      breakpoint: { max: 1000, min: 900 },
      items: 6,
      slidesToSlide: 6
    },
    smalltablet: {
      breakpoint: { max: 900, min: 768 },
      items: 5,
      slidesToSlide: 6
    },
    mobile: {
        breakpoint: { max: 768, min: 480 },
        items: 4,
        slidesToSlide: 4
      },
    smallmobile: {
        breakpoint: { max: 480, min: 360 },
        items: 3,
        slidesToSlide: 3
      }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <DivCustomArrowRight onClick={() => onClick()} />;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <DivCustomArrowLeft onClick={() => onClick()} />;
  };
  return (
    <>





      <Carousel
      customRightArrow={<CustomRightArrow/>} customLeftArrow={<CustomLeftArrow/>}
      sliderClass="carousel-slider"
      itemClass="carousel-item"
      containerClass="carousel-container"
        responsive={responsive}
  
      
      
      >
          
                  <ImgIconSC Photo={web3}/>
                  <ImgIconSC Photo={METAMASK}/>
                  <ImgIconSC Photo={styled_components}/>
                  <ImgIconSC Photo={Solidity}/>
                  <ImgIconSC Photo={HTML5}/>
                  <ImgIconSC Photo={node}/>
                  <ImgIconSC Photo={HardHat}/>
                  <ImgIconSC Photo={Z}/>
                  <ImgIconSC Photo={Python}/>
                  <ImgIconSC Photo={MySQL}/>
                  <ImgIconSC Photo={PyTeAl}/>
                  <ImgIconSC Photo={AI}/>
                  <ImgIconSC Photo={TRUFFLE}/>
                  <ImgIconSC Photo={Etherum}/>
                  <ImgIconSC Photo={Express}/>
                  <ImgIconSC Photo={Sass}/>
                  <ImgIconSC Photo={ReactIcon}/>
                  <ImgIconSC Photo={JS}/>
                  <ImgIconSC Photo={PostgreSQL}/>
                  <ImgIconSC Photo={EtherJS}/>
                  <ImgIconSC Photo={Selenium}/>
                  <ImgIconSC Photo={Figma}/>
                  <ImgIconSC Photo={AfterEffects}/>
</Carousel>

    </>
  );
};

export default AboutDevCarousel;
