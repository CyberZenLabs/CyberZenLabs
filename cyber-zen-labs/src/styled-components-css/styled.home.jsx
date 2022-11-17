import styled from "styled-components/macro";
import buddhablack from "../images/BuddhaBlack.gif";
export const DivHomeContentSC = styled.div`
  width: 100%;
  max-width: 100vw;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    align-items: center;
  }
`;

export const DivTextBoxtSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 80px;
  margin-bottom: 130px;
  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    row-gap: 40px;
    margin-bottom: 0px;
    grid-template-rows: fit-content;
  }
`;

export const DivTitleBoxtSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 20px;
  margin-top: 30px;
  @media (max-width: 1024px) {
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    //align-items: center;
    justify-content: center;
    row-gap: 10px;
  }
`;

export const TitleHomeBoxSC = styled.h1`
  pointer-events: none;
  font-weight: 900;
  font-size: 80px;
  letter-spacing: 0.08em;
  background: ${({ isBlackBack }) =>
    isBlackBack === "black" ? "var(--color-red-pink)" : "var(--blue-pink)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: ${({ isBlackBack }) =>
    isBlackBack === "black" ? "0px 0px 8px #F61067" : "none"};
  position: relative;
  width: max-content;
  @media (max-width: 1919px) {
    font-size: 70px;
  }
  @media (max-width: 1700px) {
    font-size: 60px;
  }
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    font-size: 44px;
  }
  @media (max-width: 600px) {
    font-size: 37px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const SloganBoxSC = styled.h1`
  font-weight: 400;
  font-size: 36px;
  letter-spacing: 0.05em;
  pointer-events: none;
  width: max-content;
  @media (max-width: 1700px) {
    font-size: 33px;
  }
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const DivDescBoxtSC = styled.div`
  width: 80%;
  display: grid;
  @media (max-width: 1919px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    justify-items: center;
  }
`;

export const DescHomeBoxSC = styled.span`
  width: 100%;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  pointer-events: none;
  color: ${({ isBlackBack }) =>
    isBlackBack === "black" ? "var(--color-red-pink)" : "#d516ff"};

  text-shadow: ${({ isBlackBack }) =>
    isBlackBack === "black" ? "none" : "0px 5px 30px"};
  @media (max-width: 1700px) {
    font-size: 33px;
  }
  @media (max-width: 1024px) {
    font-size: 25px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    max-width: 300px;
  }
`;

export const DivShadowBoxSC = styled.div`
  position: absolute;
  top: 0px;
  left: -6%;
  width: 110%;
  height: 100%;
  //border-radius: 50%;
  background: linear-gradient(
    90.02deg,
    rgba(23, 175, 249, 0.6) -7.59%,
    rgba(213, 22, 255, 0.6) 93.79%
  );
  filter: blur(100px);
`;

export const DivHomeContentRowsSC = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    grid-template-rows: 55px auto;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const DescHomeBoxColumnsSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 385px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const DivHomeLineBoxSC = styled.div`
@media(max-height:1000px){display:none};
  display: grid;
  height: 100%;
  /* min-height: 785px; */
  justify-items: center;
  align-items: center;
  position: absolute;
  pointer-events: none;
`;

export const BuddhaHomeSC = styled.div`
  width: 550px;
  height: 550px;
  z-index: 30;
  position: relative;
`;

export const BuddhaBackHomeSC = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(253, 3, 255, 0.9) 29.3%,
    rgba(58, 180, 250, 0.9) 78.61%
  );
  filter: blur(205px);
  opacity: 0.7;
  border-radius: 50%;
`;


