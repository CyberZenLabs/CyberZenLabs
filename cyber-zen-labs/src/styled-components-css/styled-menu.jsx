import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SpanTextElementMenuSC = styled(Link)`
  font-size: var(--font-size-menu);
  text-align: center;

  color: var(--blue-pink);
  &:hover {
    text-shadow: 0px 0px 23px #FFFFFF;
}

`;