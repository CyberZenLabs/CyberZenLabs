import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import buddha from "../images/buddha.png";

export const DivColumnsContentContacts = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivRowsContentContacts = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-rows: 1fr 2fr;
  }
  @media (max-width: 360px) {
    grid-template-rows: 1fr 2.5fr;
  }
`;

export const DivLeftPenalSC = styled.div`
  width: 90%;
  height: 100%;
  max-width: 709px;
  display: grid;
  grid-template-rows: 120px 183px 84px 84px;
  @media (max-width: 1000px) {
    width: 100%;
    grid-template-rows: 120px 83px 44px 44px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 376px;
  }

  @media (max-width: 675px) {
    grid-template-columns: 1fr 1.3fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1.1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
  }
`;

export const DivRightPenalSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: end;
  
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    height: 70%;
    align-self: center;
  }
`;

export const DivBoxBlurSC = styled.div`
  position: absolute;
  width: 100%;
  max-width: 789px;
  height: 100%;
  max-height: 704px;
  border-radius: 100%;
  background: linear-gradient(180deg, #fd03ff 29.3%, #3ab4fa 78.61%);
  filter: blur(450px);
  z-index: 2;
  @media (max-width: 1700px) {
    width: 75%;
    height: 75%;
  }
  @media (max-width: 1250px) {
    width: 100%;
    height: 75%;
  }
  @media (max-width: 1150px) {
    height: 65%;
  }
  @media (max-width: 1000px) {
    height: 85%;
  }
  @media (max-width: 895px) {
    width: 75%;
    height: 75%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 75%;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 60%;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const ImgBuddhaSC = styled.div`
  //position: absolute;
  background-image: url(${buddha});
  width: 789px;
  height: 704px;
  background-size: 100%;
  z-index: 30;
  @media (max-width: 1700px) {
    width: 494px;
    height: 429px;
  }
  @media (max-width: 1150px) {
    width: 424px;
    height: 359px;
  }
  @media (max-width: 895px) {
    width: 330px;
    height: 295px;
  }
  @media (max-width: 600px) {
    width: 280px;
    height: 245px;
    top: 270px;
  }
  @media (max-width: 540px) {
    width: 230px;
    height: 195px;
    background-size: 115%;
    margin-right: 0px;
    padding-bottom: 50px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const DivTopPenalSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: end;
  z-index: 3;
  @media (max-width: 768px) {
    align-items: end;
  }
  @media (max-width: 600px) {
    align-items: end;
  }
`;

export const DivBoxTextWriteToUsSC = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  align-items: start;
  padding-top: 100px;
  min-width: 500px;
  @media (max-width: 1000px) {
    width: 100%;
    min-width: 0px;
  }
  @media (max-width: 705px) {
    min-width: 305px;
  }
  @media (max-width: 675px) {
    min-width: 0px;
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
  font-size: 64px;
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
    font-size: 30px;
    line-height: 38px;
    height: 38px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    height: 56px;
  }
  @media (max-width: 675px) {
    font-size: 27px;
    line-height: 34px;
    height: 34px;
  }
`;

export const DivColumnsTelephoneSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 41% 59%;
  @media (max-width: 768px) {
    grid-template-columns: max-content max-content;
    gap: 25px;
  }
  //border: 1px solid red;
`;

export const DivTextTelephoneSC = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  display: grid;
  align-content: end;
  //border: 1px solid red;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const DivNumTelephoneSC = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  display: grid;
  align-content: end;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const DivColumnsTelegramSC = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 41% 59%;
  @media (max-width: 768px) {
    grid-template-columns: max-content max-content;
    gap: 25px;
  }
`;

export const DivNumTelegramSC = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  display: grid;
  align-content: end;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const DivTextTelegramSC = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  display: grid;
  align-content: end;
  //border: 1px solid red;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const DivColumnsemailSC = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 41% 59%;
  @media (max-width: 768px) {
    grid-template-columns: max-content max-content;
    gap: 25px;
  }
`;

export const DivDecLineSC = styled.div`
  max-width: 487px;
  width: 100%;
  height: 4px;
  background: var(--blue-pink);
  @media (max-width: 1000px) {
    max-width: 229px;
    height: 2px;
  }
  @media (max-width: 768px) {
    max-width: 307px;
    height: 3px;
  }
  @media (max-width: 675px) {
    max-width: 208px;
    height: 2px;
  }
`;
