import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivContainerAboutDevSC = styled.div`
display: grid;
width: 100%;
justify-content: center;
justify-items: center;
`;
export const GridContainerItemsSC = styled.div`
display: grid;
width: 83%;
justify-content: center;
justify-items: center;
grid-template-rows: max-content 1fr max-content;
 grid-row-gap: 30px;
  `;
export const DivDecriptionTextSC = styled.div`

font-weight: 400;
font-size: 35px;
line-height: 44px;
text-align: center;
letter-spacing: 0.05em;
  `;

export const DivCustomTextSC = styled.div`

text-align: left;
background: linear-gradient(270deg, #D815FF 0%, #09BBF9 102.1%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
max-width: max-content;
text-shadow: 4px 4px 12px #D516FF;
position: relative;
  `;

export const GridMoreIcons = styled.div`

display: grid;
grid-template-columns: repeat(12, 1fr);
border-radius: 100%;
max-width: max-content;
max-height: max-content;
  `;

export const ImgIconSC = styled.div`
border-radius:100%;
background: #C4C4C4;
width: 70px;
height: 70px;
  `;