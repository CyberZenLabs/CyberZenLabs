import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const GridContentSC = styled.div`
  display: grid;
  align-self: center;

  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 70px;
  justify-content: center;
  align-content:center;
  @media (max-width:1000px) {
    grid-row-gap: 60px;
}
@media (max-width:480px) {
  grid-row-gap: 40px;
}
  `;

export const SpanTextElementSC = styled(Link)`
  font-size: var(--font-size-menu);
  text-align: center;

  color: var(--blue-pink);
  &:hover {
    text-shadow: 7px 7px 12px #C957E5;
}
@media (max-width:1000px) {
  font-size: 40px;
line-height: 50px;
}
@media (max-width:480px) {
  font-size: 22px;
line-height: 28px;
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
`;
export const DivWrapMenuSC = styled.div`
 // width: 100vw;
  min-height: calc(100vh - 320px);
  //padding-top: 160px;
  
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  //border:1px solid red;
`;