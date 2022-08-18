import React, {useContext} from "react";
import GlobalDispatchContext from "../global_dispatch_context";
import {
  DivContainerNavBarSC,
  DivLogoBoxSC,
  DivMaxWidthSC,
  DivShowReelSC,
  LinkShowReelSC,
  LinkToHomeSC,
  LogoNavBarSC,
  TextNavBarSC,
} from "../styled-components-css/styled-navbar";

const NavBarTop = () => {
  const {state, dispatch} = useContext(GlobalDispatchContext);
  const {
    isBlackBack
  } = state
  return (
    <>
      <DivMaxWidthSC>
        <DivContainerNavBarSC>
          <LinkToHomeSC to='/'>
            <DivLogoBoxSC>
              <LogoNavBarSC />
              <TextNavBarSC>Cyberzen Labs</TextNavBarSC>
            </DivLogoBoxSC>
          </LinkToHomeSC>

          <DivShowReelSC>
            <LinkShowReelSC to="#"  isBlackBack={isBlackBack}>ShowReel</LinkShowReelSC>
          </DivShowReelSC>
        </DivContainerNavBarSC>
      </DivMaxWidthSC>
    </>
  );
};

export default NavBarTop;
