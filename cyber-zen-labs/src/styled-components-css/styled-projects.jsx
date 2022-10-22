import styled from "styled-components/macro";
import IconMouse from "../images/mouse.svg";
import GeoEco from "../images/GeoEco.png"

export const DivContentBoxRowsSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content 27% auto;
`;
export const DivImgProject=styled.div`

background-image: url(${GeoEco});
width: 93%;
height: 95%;
background-size: cover;
background-repeat: no-repeat;
display: grid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
 margin-top: 24px;
  border-radius: 20px;

`;
export const DivDescriptionProject=styled.div`
font-family: 'Orbitron';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
letter-spacing: 0.05em;
padding: 0 20px;
`;
export const DivTextProject=styled.div`

font-family: 'Kanit';
font-style: normal;
font-weight: 400;
font-size: 60px;
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
  height: 100%;
  font-style: normal;
  font-weight: 800;
  font-size: 81px;
  line-height: 102px;
  letter-spacing: 0.08em;
  background: linear-gradient(270deg, #d815ff 0%, #09bbf9 102.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: grid;
  align-content: end;
  justify-content: center;
  justify-self: center;
`;
export const DivGridProject =styled.div`
display: grid;
grid-template-rows: max-content max-content;
align-items: start;
    height: 85%;
    gap: 10px;
`;

export const DivShadowTitleSC = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90.02deg,
    rgba(23, 175, 249, 0.4) -7.59%,
    rgba(213, 22, 255, 0.4) 93.79%
  );
  filter: blur(120px);
`;

export const DivColumnsIconAndTextSC = styled.div`
  width: 100%;
  height: 100%;
  max-height: 36px;
  max-width: 438px;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-self: center;
  justify-self: center;
`;

export const IconMouseSC = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${IconMouse});
  background-repeat: no-repeat;
  background-position: center;
`;

export const DivContentTextSC = styled.div`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 36px;
  letter-spacing: 0.08em;
  color: #ffffff;
  text-align: end;
`;

export const DivBoxCarouselSC = styled.div`
    width: 100%;
  height: 442px;

 
  position: relative;
`;

export const DivBoxCarouselBackgroundEllipseSC = styled.div`
   width: 100%;
  height: 1900px;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  top: 150px;
  
`;

export const DivTaskItemSC = styled.div`
    position: absolute;
  bottom: 40px;
  left: calc((100% / 2) - 304px);
  box-shadow: 0px 0px 30px 9px #7167fb45;
  border-radius: 26px;
  width: 608px;
  height: 450px;
  padding: 2px;
  box-sizing: border-box;
  background: var(--blue-pink);
  gap: 10px;
 
`;

export const DivTaskItemContentSC = styled.div`
 
  border-radius: 24px;
  width: 100%;
  height: 100%;
  background: radial-gradient(73.28% 231.6% at 26.72% 52.96%, #0E1A5A 0%, #0E1A5A 5.27%, #21004B 100%);
 
  display: grid;
  grid-template-rows: 1fr 1fr;
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