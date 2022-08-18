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
