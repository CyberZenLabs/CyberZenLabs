import { useState, useContext, useEffect } from "react";
import {
  DivContainerAboutSC,
  DivWrapMenuSC,
  GridContentSC,
} from "../styled-components-css/styled-About";
import { SpanTextElementMenuSC } from "../styled-components-css/styled-menu";
import GlobalDispatchContext from "../global_dispatch_context";

const BurgerMenu = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage } = state;

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "sound",
      });
    };
  }, [isPage]);
  return (
    <DivWrapMenuSC>
      <DivContainerAboutSC>
        <GridContentSC>
          <SpanTextElementMenuSC to="/">HOME</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/services">SERVICES</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/about">ABOUT</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/contacts">CONTACTS</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="#">PROJECTS</SpanTextElementMenuSC>
        </GridContentSC>
      </DivContainerAboutSC>
    </DivWrapMenuSC>
  );
};

export default BurgerMenu;
