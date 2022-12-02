import styled from "styled-components/macro";

export const GrifContentSC = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  max-width: 846px;
  justify-content: center;
  justify-items: center;
`;

export const GridTextSC = styled.div`
  width: 95vw;
  display: grid;
  align-items: center;
  align-content: center;
  width: auto;
  justify-content: center;
  justify-items: center;
`;
export const H1TitleSC = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 90px;
  line-height: 130%;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-size: 70px;
  }
  @media (max-height: 550px) {
    font-size: 50px;
  }
  @media (max-width: 525px) {
    font-size: 40px;
  }
  @media (max-width: 430px) {
    font-size: 38px;
  }
  @media (max-width: 360px) {
    font-size: 36px;
  }
`;

export const H1TitleColumnsSC = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 20px;
`;
export const H1TitleTextSC = styled.h1`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 130%;
  color: #ffffff;
  height: max-content;
  display: grid;
  align-self: center;
  @media (max-width: 1000px) {
    font-size: 50px;
  }
  @media (max-width: 525px) {
    font-size: 26px;
  }
  @media (max-width: 430px) {
    font-size: 24px;
  }
  @media (max-width: 360px) {
    font-size: 22px;
  }
`;

export const DivBodyTextSC = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 130%;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-height: 550px) {
    font-size: 20px;
  }
  @media (max-width: 525px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;
export const DivTextContentSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-gap: 15px;
  align-items: center;
  align-content: center;
  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-height: 550px) {
    gap: 0px;
    margin-top: -5px;
  }
`;
export const DivLine404SC=styled.div`
@media(max-height:930px){display:none};
 display: grid;
  height: 100%;
  //top: 80px;
  //bottom: 0;
  min-height: 472px;
  justify-items: center;
  align-items: center;
  position: absolute;
  pointer-events: none;
`;
