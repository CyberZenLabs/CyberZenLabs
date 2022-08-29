import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivColumnsContentContacts = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const DivLeftPenalSC = styled.div`
  width: 100%;
  height: 100%;
  max-width: 709px;
  display: grid;
  grid-template-rows: 245px 183px 84px 84px;
`;

export const DivRightPenalSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: end;
  z-index: 3;
`;

export const DivBoxBlurSC = styled.div`
  width: 100%;
  max-width: 789px;
  height: 100%;
  border-radius: 100%;
  background: linear-gradient(180deg, #fd03ff 29.3%, #3ab4fa 78.61%);
  filter: blur(450px);
  z-index: 2;
`;

export const ImgBuddhaSC = styled.img`
  position: absolute;
  width: 789px;
  height: 704px;
  z-index: 3;
  aspect-ratio: 1/1;
`;

export const DivBoxTextWriteToUsSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: end;
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
`;

export const DivColumnsTelephoneSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 86px;
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
`;

export const DivColumnsTelegramSC = styled.div`
 //border: 1px solid red;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 86px;
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
`;

export const DivColumnsemailSC = styled.div`
 //border: 1px solid red;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 86px;
`;

export const DivDecLineSC = styled.div`
  max-width: 487px;
  width: 100%;
  height: 4px;
  background: var(--blue-pink);
`;
