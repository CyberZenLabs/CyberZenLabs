
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState, useContext, useReducer } from "react";
import { DivRootSC } from "../styled-components-css/styles-root";
import GlobalDispatchContext from '../global_dispatch_context'
import reducer from '../reducer'

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
import Alina from '../images/Alina.png';


const AboutTeamDesingCarousel = ({props}) => {
 
  const initialState = useContext(GlobalDispatchContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
      isBlackBack,
      
  } = state

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 891 },
      items: 0,
      slidesToSlide: 0,
    },
    mobile: {
        breakpoint: { max:890 , min: 680 },
        items: 3,
        slidesToSlide: 1
      },
    smallmobile: {
        breakpoint: { max: 680, min: 360 },
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
                  <MarginLeft> <ImgIconSC Photo={Alina}  ><NamesSC>Alina Sagaidak<br/>
Motion Designer</NamesSC></ImgIconSC  ></MarginLeft>
<ImgIconSC Photo={Lisa}  ><NamesSC>Lisa Raklova<br/>
UI/UX Designer </NamesSC></ImgIconSC  >
               
                

</Carousel>
    </>
  );
};

export default AboutTeamDesingCarousel;
