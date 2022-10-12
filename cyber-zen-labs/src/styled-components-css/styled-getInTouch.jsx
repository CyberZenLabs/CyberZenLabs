import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Clip from "../images/Clip.svg";

export const DivContainerPenalsSC = styled.div`
  width: 100%;
  max-width: 1478px;
  height: 100%;
  display: grid;
  justify-self: center;
  grid-template-columns: 50% 50%;
  grid-column-gap: 70px;
  @media (max-width: 1060px) {
    grid-column-gap: 25px;
  }
  @media (max-width: 810px) {
    display: none;
  }
`;

export const DivContainerPenals2SC = styled.div`
  display: none;
  @media (max-width: 810px) {
    display: grid;
    width: 100%;
    max-width: 1478px;
    height: 100%;
    justify-self: center;
    grid-template-rows: 25px 30px 80px 30px 80px 30px 80px 30px 80px 60px 141px 1px 48px 1fr 1fr;
  }
`;
export const DivBoxRowsLeftPenalSC = styled.div`
  max-width: 625px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 29px 33px 86px 33px 81px 33px 86px 33px 60px;
  @media (max-width: 810px) {
    max-width: 100%;
  }
`;

export const DivBoxTextSC = styled.div`
  width: 100%;
  max-width: 259px;
  height: 30px;
  display: grid;
  align-self: end;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  @media (max-width:1060px) {
    font-size: 16px;
  }
  @media (max-width: 410px) {
    font-size: 14px;
  }
`;

export const DivBoxBorderSC = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  max-width: 621px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #e0f5e9;
  //box-shadow: 0px 5px 8px #868791;
  background: initial;
  display: grid;
  align-self: end;
  align-items: end;
  align-content: end;
  color: #fff;
  font-family: "Orbitron";
  :focus {
    outline: none;
  }
  @media (max-width: 810px) {
    max-width: 100%;
  }
`;
export const DivBoxBorder2SC = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  max-width: 621px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #e0f5e9;
  //box-shadow: 0px 5px 8px #868791;
  background: initial;
  display: grid;
  align-self: start;
  align-items: start;
  align-content: start;
  color: #fff;
  font-family: "Orbitron";
  :focus {
    outline: none;
  }
  @media (max-width: 810px) {
    max-width: 100%;
  }
`;

export const DivBoxBorderBigInputSC = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  max-width: 621px;
  height: 30px;
  border-bottom: 1px solid #e0f5e9;
  background: initial;
  display: grid;
  align-self: end;
  align-items: end;
  align-content: end;
  color: #fff;
  font-family: "Orbitron";
  :focus {
    outline: none;
  }
  @media (max-width: 810px) {
    max-width: 100%;
  }
`;

export const DivBoxColumnsMoneySC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 38px;
  height: 156px;
  width: 110%;
  max-width: max-content;
  @media (max-width: 410px) {
    grid-column-gap: 32px;
  }
`;

export const DivBoxRowsRightPenalSC = styled.div`
  max-width: 621px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 64px 231px 79px 40px 203px;
  @media (max-width: 810px) {
    max-width: 100%;
  }
`;

export const DivTextDescriptionSC = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  display: grid;
  align-content: end;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  @media (max-width: 1060px) {
    font-size: 16px;
  }
  @media (max-width: 810px) {
    align-content: start;
  }
  @media (max-width: 410px) {
    font-size: 14px;
  }
`;

export const DivBoxColumnIconTextSC = styled.div`
  width: 100%;
  max-width: 246px;
  height: 30px;
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

export const DivBoxIconClipSC = styled.div`
  cursor: pointer;
  width: 24px;
  height: 28px;
  background-size: 100%;
  background-image: url(${Clip});
  @media (max-width: 1060px) {
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const DivTextAddAttachmentSC = styled.div`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  @media (max-width: 1060px) {
    font-size: 16px;
  }
`;

export const ButtonGradientSC = styled(Link)`
  width: 100%;
  height: 100%;

  max-width: 427px;
  max-height: 100px;
  display: grid;
  justify-self: center;
  align-self: center;
  background: var(--blue-pink);
  box-shadow: 0px 0px 80px #311941;
  border-radius: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  justify-items: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  @media (max-width: 1060px) {
    max-width: 350px;
    max-height: 85px;
  }
  @media (max-width: 410px) {
    max-width: 300px;
    max-height: 80px;
    font-size: 36px;
  }
`;

export const SpanBudgetSC = styled.div`
  width: 100%;
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: start;
  @media (max-width: 1060px) {
    font-size: 16px;
  }
  @media (max-width: 410px) {
    font-size: 14px;
  }
`;

/* export const SpanFakeSC = styled.div`

`; */
