import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import buddha from "../images/buddha.png";

export const DivColumnsContentContacts = styled.div`
  width: 100%;
  height: 704px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const DivLeftPenalSC = styled.div`
  width: 100%;
  height: 100%;
  max-width: 709px;
  display: grid;
  grid-template-rows: 171px 183px 84px 84px;
`;
export const DivRightPenalSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: end;
`;

export const ImgBuddhaSC = styled.div`
  background-image: url(${buddha});
  max-width: 789px;
  max-height: 704px;
  width: 100%;
  height: 100%;
`;

export const DivBoxTextWriteToUsSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: end;
`;
export const DivTextWriteToUsSC = styled.div`
  width: 100%;
  height: 76px;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-decoration: underline;
  text-decoration-color: linear-gradient(270deg, #d815ff 0%, #09bbf9 102.1%);
  background: var(--blue-pink);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 1px 1px 20px #8b22c3;
`;

export const DivColumnsTelephoneSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 29% 71%;
  gap: 86px;
`;

export const DivTextTelephoneSC = styled.div`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  display: grid;
  align-content: end;
`;

export const DivNumTelephoneSC = styled.div`
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 26% 74%;
  gap: 86px;
`;

export const DivNumTelegramSC = styled.div`
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
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  display: grid;
  align-content: end;
`;

export const DivColumnsemailSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 19% 81%;
  gap: 86px;
`;
