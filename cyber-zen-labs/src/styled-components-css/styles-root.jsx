import styled from "styled-components/macro";

export const DivRootSC = styled.div`

overflow: hidden;
    width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 160px max-content 160px;
  background: ${(p) => (p.isBlackBack === 'black' ? 'black'  : p.isAboutBack === 'purple' ? '#1B074F': 'var(--background-color)')};
  @media(max-width: 480px) {
    grid-template-rows: 100px max-content 160px;
  }
  @media(max-width: 360px) {
    grid-template-rows: 160px max-content 160px;
  }
 // transition: .3s background-color;
  //transition-timing-function: cubic-bezier(.29, 1.01, 1, -0.68);

`