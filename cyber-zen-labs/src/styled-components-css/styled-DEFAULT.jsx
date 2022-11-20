

import styled from "styled-components/macro";

export const DivWrapSC = styled.div`
  // width: 100vw;
  display: grid;
  min-height: calc(100vh - 320px);
  @media (max-width: 480px) {
    min-height: calc(100vh - 260px);
  }
  //padding-top: 160px;
  
`;

export const DivContainerSC = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  padding-bottom: 25px;
  display: grid;
  justify-items: center;
  width: 90vw;
 // border: 1px solid red;
`;


