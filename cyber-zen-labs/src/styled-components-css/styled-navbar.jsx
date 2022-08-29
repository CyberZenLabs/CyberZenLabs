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
`;

export const DivContainerNavBarHomeSC = styled.div`
  position: absolute;
  width: 100%;
  //border:1px solid green;
  display: grid;
  height: 160px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  background: initial;
  @media (max-width:480px) {
    grid-template-columns: 1fr;
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
  @media (max-width:480px) {
    grid-template-columns: 1fr;
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
  @media (max-width:480px) {
display: none;
}
`;
export const DivShowReelCenterSC = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  @media (max-width:480px) {
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
`;

export const TextNavBarSC = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #fff;
`;

export const LinkShowReelSC = styled(Link)`
text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: ${({isBlackBack}) => (isBlackBack === 'black' ? 'var(--color-red-pink)' : ' #fff;')};
`;

export const LinkToHomeSC = styled(Link)`
text-decoration: none;
  width: max-content;
  height: max-content;

@media (max-width:480px) {
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
`;