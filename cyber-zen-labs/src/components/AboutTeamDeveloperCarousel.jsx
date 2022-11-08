import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  DivItemSC,
  DivItemPhotoSC,
  DivItemNameSC,
  DivItemPhotoTemporarySC,
  DivItemNameTemporarySC

} from "../styled-components-css/styled-team";
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
    DivItemsCarouselSC
} from "../styled-components-css/styled-AboutTeam";


import Sam from "../images/Sam.png";
import Denis from "../images/Denis.png";
import Kirill from "../images/Kirill.png";
import Ruslan from "../images/Ruslan.png";
import Ilya from "../images/Ilya.png";
import Andrey from "../images/Andrey.png";
import Irene from "../images/Irene.png";
import Dmitry from "../images/Dmitry.png";
import Stas from "../images/Stas.png";
import Sveta from "../images/Sveta.png";
import Lisa from "../images/Lisa.png";
import Alina from "../images/Alina.png";
import NoPhoto from "../images/NoPhoto.png";

const AboutTeamDeveloperCarousel = ({indexSelectedButton}) => {
  console.log("indexSelectedButton",indexSelectedButton);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1601 },
      items: 6,
      slidesToSlide: 0,
      
    },
    PC: {
      breakpoint: { max:1600 , min: 1331 },
      
      items: 6,
      slidesToSlide: 1
      
    },
    MiniPC: {
      breakpoint: { max:1330 , min: 1101 },
      
      items: 5,
      slidesToSlide: 1
      
    },
    Desctop: {
        breakpoint: { max:1100 , min: 891 },
        
        items: 4,
        slidesToSlide: 1
        
      },
    mobile: {
        breakpoint: { max:890 , min: 769 },
        
        items: 4,
        slidesToSlide: 1
      },
    smallmobile: {
      
        breakpoint: { max: 768, min: 451 },
        items: 3,
        slidesToSlide: 1
      },
      verysmallmobile: {
        
        breakpoint: { max: 450, min: 240 },
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


{indexSelectedButton === 0 ? 
<Carousel indexSelectedButton={indexSelectedButton}
      
  containerClass="carousel-containerTeamDevLeadership"
    responsive={responsive}
    customRightArrow={<CustomRightArrow />}
    customLeftArrow={<CustomLeftArrow />}
    itemClass="carousel-itemTeamDevLeadership"
    sliderClass="carousel-sliderTeamDevLeadership"
  
  >
 
<DivItemSC>
<DivItemPhotoSC Photo={Denis} indexSelectedButton={indexSelectedButton}/>
<DivItemNameSC indexSelectedButton={indexSelectedButton}>Den Gordin <p>Project-manager</p></DivItemNameSC>
</DivItemSC>

  </Carousel>
        
       : null}
      
{indexSelectedButton === 1 ? 
<Carousel 
indexSelectedButton={indexSelectedButton}
      
  containerClass="carousel-containerTeamDev"
    responsive={responsive}
    customRightArrow={<CustomRightArrow />}
    customLeftArrow={<CustomLeftArrow />}
    itemClass="carousel-itemTeamDev"
    sliderClass="carousel-sliderTeamDev"
  
  >
  
  <DivItemSC>
    <DivItemPhotoSC Photo={Kirill}/>
    <DivItemNameSC>Kirill Drozdov<p>Full-stack Developer</p></DivItemNameSC>
  </DivItemSC>
  <DivItemSC>
    <DivItemPhotoSC Photo={Ruslan}/>
    <DivItemNameSC>Ruslan Gordin<p>Frontend Developer</p></DivItemNameSC>
  </DivItemSC>
  <DivItemSC>
    <DivItemPhotoSC Photo={Ilya}/>
    <DivItemNameSC>Ilya Morozov<p>Backend Developer</p></DivItemNameSC>
  </DivItemSC>
  <DivItemSC>
          <DivItemPhotoSC Photo={Sveta}/>
          <DivItemNameSC>Svetlana Soboleva<p>Frontend Developer</p></DivItemNameSC>
  </DivItemSC>
 <DivItemSC>
    <DivItemPhotoSC Photo={Stas}/>
    <DivItemNameSC>Stanislav Maximov<p>Backend Developer</p></DivItemNameSC>
  </DivItemSC>
 <DivItemSC>
    <DivItemPhotoSC Photo={Dmitry}/>
    <DivItemNameSC>Dmitry Galtsov<p>Frontend Developer</p></DivItemNameSC>
  </DivItemSC>

  </Carousel>
        
       : null}

{indexSelectedButton === 2 ? 
<Carousel indexSelectedButton={indexSelectedButton}
      
  containerClass="carousel-containerTeamDevDesign"
    responsive={responsive}
    customRightArrow={<CustomRightArrow />}
    customLeftArrow={<CustomLeftArrow />}
    itemClass="carousel-itemTeamDevDesign"
    sliderClass="carousel-sliderTeamDevDesign"

  >
  <DivItemSC>
<DivItemPhotoSC Photo={Andrey} indexSelectedButton={indexSelectedButton}/>
<DivItemNameSC indexSelectedButton={indexSelectedButton}>Andrey Baykov<p>UI/UX Designer</p></DivItemNameSC>
</DivItemSC>
<DivItemSC>
<DivItemPhotoSC Photo={Irene} indexSelectedButton={indexSelectedButton}/>
<DivItemNameSC indexSelectedButton={indexSelectedButton}>Irene Gordina<p>UI/UX Designer</p></DivItemNameSC>
</DivItemSC>
<DivItemSC>
<DivItemPhotoSC Photo={Lisa} indexSelectedButton={indexSelectedButton}/>
<DivItemNameSC indexSelectedButton={indexSelectedButton}>Lisa Raklova<p>UI/UX Designer</p></DivItemNameSC>
</DivItemSC>
<DivItemSC>
<DivItemPhotoSC Photo={Alina} indexSelectedButton={indexSelectedButton}/>
<DivItemNameSC indexSelectedButton={indexSelectedButton}>Alina Sagaidak<p>Motion Designer</p></DivItemNameSC>
</DivItemSC>
  </Carousel>
        
       : null}
       {indexSelectedButton === 3 ? 
<Carousel indexSelectedButton={indexSelectedButton}
           
  containerClass="carousel-containerTeamDevLeadership"
  responsive={responsive}
  customRightArrow={<CustomRightArrow />}
  customLeftArrow={<CustomLeftArrow />}
  itemClass="carousel-itemTeamDevLeadership"
  sliderClass="carousel-sliderTeamDevLeadership"
    

  >
  <DivItemSC>
<DivItemPhotoSC Photo={NoPhoto} indexSelectedButton={indexSelectedButton}/>
<DivItemNameSC indexSelectedButton={indexSelectedButton}>Name<p>lorem ipsum</p></DivItemNameSC>
</DivItemSC>
<DivItemSC>
<DivItemPhotoSC Photo={NoPhoto} indexSelectedButton={indexSelectedButton}/>
<DivItemNameSC indexSelectedButton={indexSelectedButton}>Name<p>lorem ipsum</p></DivItemNameSC>
</DivItemSC>
  </Carousel>
        
       : null}

</>
  );

};

export default AboutTeamDeveloperCarousel;
