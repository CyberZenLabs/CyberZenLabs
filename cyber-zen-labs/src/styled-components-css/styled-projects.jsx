import styled from "styled-components/macro";
import IconMouse from "../images/mouse.svg";
import GeoEco from "../images/GeoEco.png"

export const DivContentBoxRowsSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content 27% auto;
  max-height: calc(100vh - 350px);
 // border: 1px solid green;
`;
export const DivImgProject=styled.div`

background-image: url(${GeoEco});
width: 93%;
height: 95%;
display: grid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
 margin-top: 10px;
  border-radius: 20px;

`;
export const DivDescriptionProject=styled.div`
font-family: 'Orbitron';
font-style: normal;
font-weight: 400;
line-height: clamp(2px, 2vw, 28px);
letter-spacing: 0.05em;
padding: 0 20px;
font-size: clamp(6px, 2vw, 18px);
display: grid;
text-align: center;
`;
export const DivTextProject=styled.div`

font-family: 'Kanit';
font-style: normal;
font-weight: 400;
font-size: clamp(12px, 4vw, 55px);
//font-size: clamp(25px, 4vh, 60px);
line-height: 105%;

/* or 67px */
text-align: center;
letter-spacing: 0.05em;

color: #FFFFFF;
`;

export const DivTitleTextSC = styled.div`
  position: relative;
  width: 100%;
  max-width: 896px;
  max-height: 70px;
  height: 8vh;
  min-height: 4vw;
  font-style: normal;
  font-weight: 800;
  line-height: 70px;
  letter-spacing: 0.08em;
  background: linear-gradient(270deg, #d815ff 0%, #09bbf9 102.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: grid;
  align-content: center;
  justify-content: center;
  justify-self: center;
  font-size: clamp(22px, 8vw, 81px);
  //border: 1px solid red;
`;
export const DivGridProject =styled.div`
display: grid;
grid-template-rows: max-content max-content;
align-items: start;
    height: fit-content;
    gap: 10px;
    
    //border: 1px solid red;
   
`;

export const DivShadowTitleSC = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 80%;
  height: 10vh;
  background: linear-gradient(
    90.02deg,
    rgba(23, 175, 249, 0.4) -7.59%,
    rgba(213, 22, 255, 0.4) 93.79%
  );
  filter: blur(5vw); //!!
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
`;

export const DivColumnsIconAndTextSC = styled.div`
  width: max-content;
  height: 100%;
  max-height: 36px;
  max-width: 438px;
  display: grid;
  grid-template-columns: 1fr max-content;
  gap:10px;
  align-self: end;
  justify-self: center;
  justify-items: center;
  align-items: center;
 // border: 1px solid red;
  margin-bottom: 1vh;
`;

export const IconMouseSC = styled.div`
 width: 3vw;
  height:5vw;
  max-width: 15px;
  max-height: 22px;
  border-radius: 50%;
  background-image: url(${IconMouse});
  background-size: clamp(6px, 5vw, 25px);
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  animation: fadeInFromNone 2s ease-out infinite;
  box-shadow: 0px 0px 12px 2px #09bbf9;
`;

export const DivContentTextSC = styled.div`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0.08em;
  color: #ffffff;
  text-align: end;
  font-size: clamp(8px, 2.5vw,19px);
`;

export const DivBoxCarouselSC = styled.div`
    width: 100%;
  height: 442px;
  position: relative;
 // border:1px solid red;
`;

export const DivBoxCarouselBackgroundEllipseSC = styled.div`
   width: 100%;
  height: 1900px;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  top: 150px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
`;

export const DivTaskItemSC = styled.div`
    position: absolute;
    top: 0; //!!
  bottom: 40px;
  //left: calc((100% / 2) - 304px);
  box-shadow: 0px 0px 30px 9px #7167fb45;
  border-radius: 26px;
  width: 60vw;
  max-width: 608px;
  max-height: 520px;
  height: 40vh;
  padding: 2px;
  box-sizing: border-box;
  background: var(--blue-pink);
  gap: 10px;
  //max-height: 45vh;//!!
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
 //border:1px solid red;

`;

export const DivTaskItemContentSC = styled.div`
 
  border-radius: 24px;
  width: 100%;
  height: 100%;
  background: radial-gradient(73.28% 231.6% at 26.72% 52.96%, #0E1A5A 0%, #0E1A5A 5.27%, #21004B 100%);
 
  display: grid;
  grid-template-rows: 50% max-content;
  justify-items: center;
  align-items: center;
  font-family: var(--font-family-kanit);
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 105%;
  /* or 67px */
  text-align: center;
  letter-spacing: 0.05em;
gap: 10px;
  color: #FFFFFF;
  //border: 1px solid red;
`;

export const DivTaskItemContentTempSC = styled.div`
 
  border-radius: 24px;
  width: 100%;
  height: 100%;
  background: radial-gradient(73.28% 231.6% at 26.72% 52.96%, #0E1A5A 0%, #0E1A5A 5.27%, #21004B 100%);
 
  //display: grid;
  justify-items: center;
  align-items: center;
  font-family: var(--font-family-kanit);
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 105%;
  /* or 67px */
  text-align: center;
  letter-spacing: 0.05em;

  color: #FFFFFF;
`;