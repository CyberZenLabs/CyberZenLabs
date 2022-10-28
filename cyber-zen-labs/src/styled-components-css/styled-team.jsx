import styled from "styled-components/macro";
import Sam from "../images/Sam.png";
import Denis from "../images/Denis.png";
import Kirill from "../images/Kirill.png";
import Ruslan from "../images/Ruslan.png";
import Ilya from "../images/Ilya.png";
import Andrey from "../images/Andrey.png";
import Irene from "../images/Irene.png";
import Dmitry from "../images/Dmitry.png";
import Stas from "../images/Stas.png";
import Sveta from "../images/Sveta.png";
import Lisa from "../images/Lisa.png";
import Alina from "../images/Alina.png";

export const DivMainRowsSC = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1350px;
  display: grid;
  grid-template-rows: 170px 83px 93px 194px 38px;
  @media(min-width: 1600px){min-width:1300px;}
  @media(max-width: 1600px){min-width:unset;}
  @media (max-width: 480px) {
    grid-template-rows: 170px 83px 93px 144px 38px;
  }
`;
export const DivLineAboutTeamSC=styled.div`
 display: grid;
  height: 100%;
  //top: 80px;
  //bottom: 0;
  min-height: 923px;
  justify-items: center;
  align-items: center;
  position: absolute;
  pointer-events: none;
  @media (max-height:873px) {
    min-height: 873px;
  }
`;
export const DivBoxTextTitleSC = styled.div`
  width: 100%;
  height: 110%;
  display: grid;
  justify-items: center;
`;

export const DivTextTitleSC = styled.div`
  pointer-events: none;
  max-width: 990px;
  width: 100%;
  height: 100%;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 0.05em;
  background: linear-gradient(270deg, #D815FF 0%, #09BBF9 102.1%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

text-shadow: 0px 4px 20px #D516FF;
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 560px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export const DivTextTeamSC = styled.div`
  max-width: 147px;
  width: 100%;
  height: 100%;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 56px;
  letter-spacing: 0.05em;

  background: linear-gradient(270deg, #d815ff 0%, #09bbf9 102.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 4px 20px #d516ff;
  pointer-events: none;
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 560px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

export const DivBoxColumnsPagesSC = styled.div`
  height: 100%;
  max-width: 648px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.4fr 1.6fr 1fr;
`;

export const DivPageSC = styled.div`
  cursor: pointer;
  width: fit-content;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  /* identical to box height */
  letter-spacing: 0.05em;
  text-shadow: ${(p) => (p.isActive ? "6px 5px 5px #a557e5" : "#FFF")};
  //border: 1px solid red;
  height: fit-content;
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  @media (max-width: 560px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

export const DivBoxColumnsFotosSC = styled.div`
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 40px;
  justify-self: center;
  @media (max-width: 480px) {
    grid-column-gap: 20px;
  }
`;

export const DivFotoSC = styled.div`
  background-image: url(${Sam});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
  
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export const DivFoto1SC = styled.div`
  background-image: url(${Denis});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export const DivFoto2SC = styled.div`
  background-image: url(${Kirill});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto3SC = styled.div`
  background-image: url(${Ruslan});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto4SC = styled.div`
  background-image: url(${Ilya});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto5SC = styled.div`
background-image: url(${Sveta});
  width: 180px;
  height: 180px;
  border-radius: 100%;

  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;

export const DivFoto6SC = styled.div`
background-image: url(${Stas});
  width: 180px;
  height: 180px;
  border-radius: 100%;
  
  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;

export const DivFoto7SC = styled.div`
background-image: url(${Dmitry});
  width: 180px;
  height: 180px;
  border-radius: 100%;
 
  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;

export const DivBoxColumnsFotos1SC = styled.div`
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 38px;
  justify-self: center;
  @media (max-width: 1600px) {
    display: none;
  }
`;

export const DivBoxColumnsNameSC = styled.div`
  max-width: 404px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 60px;
  justify-self: center;
  @media (max-width: 480px) {
    grid-template-columns: 40% 40%;
    justify-self: end;
    justify-content: center;
    justify-items: center;
    max-width: 424px;
    grid-column-gap: 30px;
  }
`;

export const DivNameSC = styled.div`
  pointer-events: none;
  width: 169px;
  height: 36px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  padding-left: 10px;
  @media (max-width: 480px) {
    font-size: 10px;
    padding-left: 45px;
    margin-right: 15px;
    display: grid;
    width: 119px;
  }
`;

export const DivName1SC = styled.div`
  pointer-events: none;
  width: 142px;
  height: 36px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  @media (max-width: 480px) {
    font-size: 10px;
    padding-right: 45px;
    width: 80%;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    padding-right: 15px;
    width: 80%;
  }
`;

export const DivName0SC = styled.div`
  pointer-events: none;
  width: 100%;
  height: 72px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  @media (max-width: 480px) {
    font-size: 10px;
    padding-left: 45px;
    margin-right: 15px;
    display: grid;
    width: 119px;
  }
`;

export const DivBoxColumnsName1SC = styled.div`
  max-width: 1485px;
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 45px;
  justify-self: center;
  @media (max-width: 1600px) {
    display: none;
  }
`;

export const DivName2SC = styled.div`
  pointer-events: none;
  width: 100%;
  height: 72px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
 
`;

export const DivBoxColumnsName2SC = styled.div`
  max-width: 783px;
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 78px;
  justify-self: center;
  @media (max-width: 888px) {
    display: none;
  }
`;

export const DivBoxColumnsFotos3SC = styled.div`
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 38px;
  justify-self: center;
  @media (max-width: 888px) {
    display: none;
  }
`;
export const DivFoto8SC = styled.div`
  background-image: url(${Andrey});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 765px) {
    display: none;
  }
`;

export const DivFoto9SC = styled.div`
  background-image: url(${Irene});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 765px) {
    display: none;
  }
`;
export const DivFoto10SC = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  background-image: url(${Alina});
  /*   background-size: 100%;
  background-repeat: no-repeat; */
  @media (max-width: 765px) {
    display: none;
  }
`;

export const DivFoto11SC = styled.div`
  background-image: url(${Lisa});
  width: 180px;
  height: 180px;
  border-radius: 100%;
  @media (max-width: 765px) {
    display: none;
  }
 
  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;

export const DivItemsSC = styled.div`
@media (max-width: 1600px) {
    display:none;
  }
  display: flex;
  justify-content: center;
  align-content: center;
  column-gap: 38px;
  height: max-content;
  @media (max-width: 480px) {
    column-gap: 20px;

  }

`;

export const DivItemSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content); 
  grid-row-gap: 14px;
  justify-content: center;
  justify-items: center;
  
  @media (max-width: 480px) {
    grid-row-gap: 5px;
  }
`;

export const DivItemPhotoSC = styled.div`
background-image: ${({ Photo }) => Photo && `url(${Photo})`};
width: 180px;
height: 180px;
background-size: 100%;
border-radius: 100%;

@media (max-width: 890px) {
  width: 150px;
height: 150px;
  }
  @media (max-width: 768px) {
    width: 180px;
height: 180px;
  }
  @media (max-width: 660px) {
    width: 150px;
height: 150px;
  }
@media (max-width: 550px) {
  width: 120px;
height: 120px;
  }
  @media (max-width: 450px) {
  width: 150px;
height: 150px;
  }
  @media (max-width: 360px) {
  width: 120px;
height: 120px;
  }



`;
export const DivItemPhotoTemporarySC = styled.div`
background-image: ${({ Photo }) => Photo && `url(${Photo})`};
width: 180px;
height: 180px;
background-size: 100%;
border-radius: 100%;
@media (max-width: 480px) {
  width: 120px;
height: 120px;
  }


`;
export const DivItemNameSC = styled.div`
display: grid;
justify-content: center;
justify-items: center;
font-weight: 400;
font-size: 14px;
line-height: 18px;
@media (max-width: 890px) {
  font-size: 10px;
line-height: 13px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
line-height: 18px;
  }
  @media (max-width: 660px) {
  font-size: 10px;
line-height: 13px;
  }
@media (max-width: 480px) {
  font-size: 10px;
line-height: 13px;
  }

`;

export const DivItemNameTemporarySC = styled.div`
display: grid;
justify-content: center;
justify-items: center;
font-weight: 400;
font-size: 14px;
line-height: 18px;

@media (max-width: 480px) {
  font-size: 10px;
line-height: 13px;
  }

`;