import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import {CgChevronRight, CgChevronLeft} from "react-icons/cg";
export const DivContainerAboutDevSC = styled.div`
display: grid;
width: 100%;
justify-content: center;
justify-items: center;
`;
export const DivBlure=styled.div`
background: linear-gradient( 90.02deg,rgba(23,175,249,0.4) -7.59%,rgba(213,22,255,0.4) 93.79% );
    -webkit-filter: blur(120px);
    filter: blur(45px);
    position: absolute;
    top: 50;
   
    width: 100%;
    max-width: 1175px;
    height: 100%;
    max-height: 201px;
    @media (max-width: 1420px) {
  display:none;
  }`;
export const GridContainerItemsSC = styled.div`
display: grid;
width: 83%;
justify-content: center;
justify-items: center;
grid-template-rows: 275px 1fr;
 grid-row-gap: 30px;
 @media (min-height:1000px){grid-row-gap:0px;
padding-bottom:30px;}
  `;
export const DivDecriptionTextSC = styled.div`
display: grid;
font-weight: 400;
font-size: 35px;
line-height: 44px;
text-align: center;
letter-spacing: 0.05em;
width: 100%;
@media (max-width: 1420px) {
  font-size: 30px;
  }
  @media (max-width: 1260px) {
  font-size: 24px;
  }

  @media (max-width: 1260px) {
  font-size: 24px;
  line-height: 35px;

  }
  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 30px;

  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;

  }
`;

export const DivCustomTextSC = styled.div`
pointer-events: none;
text-align: left;
background: linear-gradient(270deg, #D815FF 0%, #09BBF9 102.1%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
max-width: max-content;
text-shadow: 4px 4px 12px #D516FF;
position: relative;
letter-spacing: 0.05em;

  `;

export const GridRowsIcons = styled.div`
//border: 1px solid red;
display: grid;
grid-row-gap:30px;
align-self:flex-end;

  `;
export const CarouselHidden = styled.div`

width:100%;
  `;
export const GridIconsSC = styled.div`

//border: 1px solid red;
display: grid;
grid-template-rows: repeat(2, 70px);
max-width: max-content;
max-height: max-content;
justify-items: center;
justify-content: center;
grid-row-gap:30px;
align-self:flex-end;
width: 100%;

@media (max-width: 1420px) {
  display:none;
  }
  `;
export const GridColumnsSecondIcons = styled.div`
//border: 1px solid blue;
display: grid;
grid-template-columns: repeat(11, 1fr);
grid-column-gap: 30px;
z-index: 10000000;

  `;
  export const GridColumnsIcons = styled.div`
  //border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-items: center;
  justify-content: center;
  z-index: 10000000;
  @media (max-width: 1420px) {
    grid-template-columns: repeat(8, 1fr);
  }
    `;
export const ImgIconSC = styled.div`
border-radius:100%;
width: 70px;
height: 70px;
background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  
@media (max-width: 768px) {

  }
  `;

export const DivCustomArrowRight = styled(CgChevronRight)`
width:3vw;
height: 3vw;
position: absolute;
right: 0px;

@media (max-width: 768px) {
  height: 4vw;
  width: 4vw;
  }
  @media (max-width: 480px) {
  height: 5vw;
  width: 5vw;
  }
`;

export const DivCustomArrowLeft = styled(CgChevronLeft)`
width:3vw;
height: 3vw;
position: absolute;
left: 0;

@media (max-width: 768px) {
  height: 4vw;
  width: 4vw;
  }
  @media (max-width: 480px) {
  height: 5vw;
  width: 5vw;
  }
`;