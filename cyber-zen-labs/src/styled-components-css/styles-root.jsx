import styled from "styled-components/macro";

export const DivRootSC = styled.div`
    width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 160px max-content;
  background: ${(p) => (p.isBlackBack === 'black' ? 'black' : 'var(--background-color)')};
 // transition: .3s background-color;
  //transition-timing-function: cubic-bezier(.29, 1.01, 1, -0.68);
`