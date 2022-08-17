import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const GridContentSC = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 96px;
  justify-content: center;
  align-content:center;
  height:100%;
  `;

export const SpanTextElementSC = styled(Link)`
  font-size: var(--font-size-menu);
  text-align: center;

  color: var(--blue-pink);
  &:hover {
    text-shadow: 7px 7px 12px #C957E5;
}

`;
