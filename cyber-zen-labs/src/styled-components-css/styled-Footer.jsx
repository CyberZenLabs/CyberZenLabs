import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Cyber_Vetka_image from "../images/Cyber-Vetka.svg";
import Music_Switch from "../images/Music-Switch.svg";

export const ContainerFooterSC = styled.div`
//position: absolute;
width: 100%;
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  background: initial;
`;

export const DivImageVetkaSC = styled.div`
display:grid;
  background-image: url(${Cyber_Vetka_image});
  background-repeat: no-repeat;
  object-fit: cover;
   background-size: 100%;
`;

export const GridMaxWidthSC = styled.div`
   height: 240px;
  display:grid;
  width: 100vw;
  grid-template-rows: 1fr 1fr;

`;

export const GrivImageSC = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  width: 100vw;
`;

export const DivMusicSwitchContainer = styled.div`
  display:grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;

`;

export const IcomMusicSwitchSC = styled.div`
  display:grid;
  background-image: url(${Music_Switch});
  background-repeat: no-repeat;
  object-fit: cover;
   background-size: 59%;

`;