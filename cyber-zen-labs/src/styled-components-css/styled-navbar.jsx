import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg";
import Burger from "../images/BurgerIcon.svg";

export const DivMaxWidthSC = styled.div`

  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
  width: 90vw;
  // border:1px solid red;
  @media (max-width: 480px) {
    height: 40px;
  }
`;
export const FooterLinesSC = styled.div`
  position: absolute;
  pointer-events: none;
  top: -40px;
`;
export const LinkShowReel2SC = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  /* identical to box height */

  background: linear-gradient(180deg, #d516ff 26.39%, #8f0036 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 0px 49.392px #441b5f;
  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 20px;
  }
`;
export const DivDecLineSC = styled.div`
  max-width: 487px;
  width: 100%;
  height: 2px;
  background: linear-gradient(180deg, #d516ff 26.39%, #8f0036 100%);
  @media (max-width: 1000px) {
    max-width: 229px;
    height: 2px;
  }
  @media (max-width: 768px) {
    max-width: 307px;
    height: 2px;
  }
  @media (max-width: 675px) {
    max-width: 208px;
    height: 2px;
  }
`;
export const DivBoxTextWriteToUsSC = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  align-items: start;
  padding-top: 100px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    justify-content: center;
  }
`;
export const DivTextWriteToUsSC = styled.div`
  pointer-events: none;
  width: 100%;
  height: 80px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 65px;
  text-decoration: none;
  background: var(--blue-pink);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: grid;
  align-content: start;

  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 1px 1px 20px #8b22c3;
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 16px;
    height: 16px;
  }
  @media (max-width: 675px) {
    font-size: 16px;
    line-height: 16px;
    height: 16px;
  }
`;

export const DivWrapFooterSC = styled.div`
  position: relative;
`;

export const DivContainerNavBarHomeSC = styled.div`
  position: absolute;
  width: 100%;
  //border:1px solid green;
  display: grid;
  height: 160px;
  grid-template-columns: 1fr 1fr ;
  justify-content: space-between;
  align-items: center;
  background: initial;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1.4fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    height: 60px;
  }
`;
export const DivContainerNavBarSC = styled.div`
  position: absolute;
  width: 100%;
  //border:1px solid green;
  display: grid;
  height: 160px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  background: initial;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    height: 60px;
  }
`;
export const DivLogoBoxSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
`;
export const DivShowReelSC = styled.div`
  width: 100%;
  display: grid;
  justify-content: end;
  @media (max-width: 480px) {
    justify-content: start;
  }
`;
export const DivShowReelCenterSC = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const LogoNavBarSC = styled.div`
  background-image: url(${Logo});
  background-size: 140%;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  display: grid;
  background-position: center;
  @media (max-width: 768px) {
    background-size: 150%;
    width: 60px;
    height: 60px;
  }
`;

export const TextNavBarSC = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const LinkShowReelSC = styled(Link)`
  min-height: 30px;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${({ isBlackBack }) =>
    isBlackBack === "black" ? "var(--color-red-pink)" : " #fff;"};
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const LinkToHomeSC = styled(Link)`
  text-decoration: none;
  width: max-content;
  height: max-content;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const LinkToBurgerSC = styled(Link)`
  width: 100%;
  display: grid;
  justify-content: end;
`;

export const IconBurgerSC = styled.div`
  background-image: url(${Burger});

  width: 27px;
  height: 22.41px;
  @media (max-width: 480px) {
    scale: 0.7;
  }
`;

export const BurgerMenuDisplaySC = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: grid;
  }
`;
