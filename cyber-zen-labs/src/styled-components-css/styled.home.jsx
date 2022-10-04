import styled from "styled-components/macro";

export const DivHomeContentSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivTextBoxtSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 80px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    row-gap: 0px;
    margin-bottom: 0px;
    grid-template-rows: fit-content;
  }
`;

export const DivTitleBoxtSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
`;

export const TitleHomeBoxSC = styled.h1`
  pointer-events: none;
  font-weight: 900;
  font-size: 80px;
  line-height: 100px;
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
  @media (max-width: 1400px) {
    font-size: 70px;
  }
  @media (max-width: 1250px) {
    font-size: 60px;
  }
  @media (max-width: 1130px) {
    font-size: 52px;
  }
  @media (max-width: 1000px) {
    font-size: 44px;
  }
  @media (max-width: 600px) {
    justify-self: center;
    font-size: 28px;
  }
`;

export const SloganBoxSC = styled.h1`
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 0.05em;
  pointer-events: none;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 600px) {
    display: grid;
    justify-self: center;
    font-size: 24px;
  }
`;

export const DivDescBoxtSC = styled.div`
  width: 85%;
  display: grid;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const DescHomeBoxSC = styled.span`
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  pointer-events: none;
  color: ${({ isBlackBack }) =>
    isBlackBack === "black" ? "var(--color-red-pink)" : "#d516ff"};

  text-shadow: ${({ isBlackBack }) =>
    isBlackBack === "black" ? "none" : "0px 5px 30px"};
  @media (max-width: 1000px) {
    font-size: 26px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 600px) {
    text-align: center;
    font-size: 24px;
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
