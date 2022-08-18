import React from "react";
import {
  DivContainerAboutSC,
  DivWrapMenuSC,
  GridContentSC,
} from "../styled-components-css/styled-About";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import { SpanTextElementMenuSC } from "../styled-components-css/styled-menu";

const BurgerMenu = () => {
  return (
    <DivWrapMenuSC>
      <DivContainerAboutSC>
        <GridContentSC>
          <SpanTextElementMenuSC to="/">HOME</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="#">SERVICES</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/about">ABOUT</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/contacts">CONTACTS</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="#">PROJECTS</SpanTextElementMenuSC>
        </GridContentSC>
      </DivContainerAboutSC>
    </DivWrapMenuSC>
  );
};

export default BurgerMenu;
