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
grid-template-rows: 1fr max-content 1fr;
 grid-row-gap: 30px;
  `;
export const DivDecriptionTextSC = styled.div`
pointer-events: none;
display: grid;
font-weight: 400;
font-size: 35px;
line-height: 44px;
text-align: center;
letter-spacing: 0.05em;
width: 100%;
`;

export const DivCustomTextSC = styled.div`
pointer-events: none;
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

export const GridRowsIcons = styled.div`
//border: 1px solid red;
display: grid;
grid-template-rows: repeat(2, 70px);
max-width: max-content;
max-height: max-content;
justify-items: center;
justify-content: center;
grid-row-gap:30px;
align-self:flex-end;
  `;
export const GridColumnsSecondIcons = styled.div`
//border: 1px solid blue;
display: grid;
grid-template-columns: repeat(11, 1fr);
grid-column-gap: 30px;

  `;
  export const GridColumnsIcons = styled.div`
  //border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;

    `;
export const ImgIconSC = styled.div`
border-radius:100%;
width: 70px;
height: 70px;
background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  `;