import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SpanTextElementMenuSC = styled(Link)`
  font-size: var(--font-size-menu);
  text-align: center;

  color: var(--blue-pink);
  &:hover {
    text-shadow: 7px 7px 12px #C957E5;
  }
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
