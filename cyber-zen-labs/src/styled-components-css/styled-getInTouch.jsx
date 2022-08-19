import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Clip from "../images/Clip.svg";

export const DivContainerPenalsSC = styled.div`
  width: 100%;
  max-width: 1340px;
  height: 100%;
  display: grid;
  justify-self: center;
  grid-template-columns: 50% 50%;
  grid-column-gap: 98px;
`;

export const DivBoxRowsLeftPenalSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 74px 31px 99px 30px 94px 31px 99px 31px 75px;
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
`;

export const DivBoxBorderSC = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  height: 80%;
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
`;

export const DivBoxBorder1SC = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
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
`;

export const DivBoxColumnsMoneySC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 38px;
  height: 156px;
  width: 100%;
  max-width: max-content;
`;

export const DivBoxRowsRightPenalSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100px 258px 99px 31px 233px;
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
  width: 24px;
  height: 28px;
  background-image: url(${Clip});
`;

export const DivTextAddAttachmentSC = styled.div`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
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

  /* Inside auto layout */
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
`;
