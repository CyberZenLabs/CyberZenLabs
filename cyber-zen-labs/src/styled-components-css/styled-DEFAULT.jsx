import styled from 'styled-components/macro';

export const DivWrapSC = styled.div`

  width: 100vw;
  height: 100vh;
  ${({background}) => (background !== undefined ? `background: ${background};` : `background: var(--background-color);`)}
`;

export const DivContainerSC = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
`;