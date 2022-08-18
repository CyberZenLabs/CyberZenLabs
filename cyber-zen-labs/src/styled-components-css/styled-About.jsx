import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const GridContentSC = styled.div`
  display: grid;
  align-self: center;

  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 96px;
  justify-content: center;
  align-content:center;
  `;

export const SpanTextElementSC = styled(Link)`
  font-size: var(--font-size-menu);
  text-align: center;

  color: var(--blue-pink);
  &:hover {
    text-shadow: 7px 7px 12px #C957E5;
}

`;

export const DivContainerAboutSC = styled.div`
 // border:1px solid red;
  margin: 0 auto;
  max-width: var(--max-width);
  width: 90vw;
display: grid;
  align-content: center;
  justify-content: center;
  margin-top:-80px;
`;
export const DivWrapMenuSC = styled.div`
 // width: 100vw;
  min-height: calc(100vh - 160px);
  //padding-top: 160px;
  
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  //border:1px solid red;
`;