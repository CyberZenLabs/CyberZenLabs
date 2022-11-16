import styled from "styled-components/macro";
import IconMouse from "../images/mouse.svg";

export const DivContentBoxRowsSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content 27% auto;
  max-height: calc(100vh - 350px);
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
  
  line-height: 102px;
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
  align-self: end;
  justify-self: center;
  align-items: center;
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
  top: ${({position}) => (position.y)}px;
  left: ${({position}) => (position.x)}px;
  box-shadow: 0px 0px 50px 9px #7167fb45;
  border-radius: 26px;
  width: 60vw;
  max-width: 608px;
  max-height: 520px;
  height: 40vh;
  padding: 2px;
  box-sizing: border-box;
  background: var(--blue-pink);
 
`;

export const DivTaskItemContentSC = styled.div`
 
  border-radius: 24px;
  width: 100%;
  height: 100%;
  background: radial-gradient(73.28% 231.6% at 26.72% 52.96%, #0E1A5A 0%, #0E1A5A 5.27%, #21004B 100%);
 
  display: grid;
  
  justify-items: center;
  align-items: center;
  font-family: var(--font-family-kanit);
  font-style: normal;
  font-weight: 400;
  line-height: 105%;
  /* or 67px */
  text-align: center;
  letter-spacing: 0.05em;

  color: #FFFFFF;
  font-size: clamp(10px, 8vw, 64px);
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