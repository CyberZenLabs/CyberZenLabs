import styled from "styled-components/macro";
import IconMouse from "../images/mouse.svg";

export const DivContentBoxRowsSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content 27% auto;
`;

export const DivTitleTextSC = styled.div`
  position: relative;
  width: 100%;
  max-width: 896px;
  height: 100%;
  font-style: normal;
  font-weight: 800;
  font-size: 81px;
  line-height: 102px;
  letter-spacing: 0.08em;
  background: linear-gradient(270deg, #d815ff 0%, #09bbf9 102.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: grid;
  align-content: end;
  justify-content: center;
  justify-self: center;
`;

export const DivShadowTitleSC = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90.02deg,
    rgba(23, 175, 249, 0.4) -7.59%,
    rgba(213, 22, 255, 0.4) 93.79%
  );
  filter: blur(120px);
`;

export const DivColumnsIconAndTextSC = styled.div`
  width: 100%;
  height: 100%;
  max-height: 36px;
  max-width: 438px;
  display: grid;
  grid-template-columns: 1fr 16fr;
  align-self: end;
  justify-self: center;
`;

export const IconMouseSC = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${IconMouse});
  background-repeat: no-repeat;
  background-position: center;
`;

export const DivContentTextSC = styled.div`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 36px;
  letter-spacing: 0.08em;
  color: #ffffff;
  text-align: end;
`;
