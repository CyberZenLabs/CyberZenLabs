import React from "react";
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
            <LinkShowReelSC to="#">ShowReel</LinkShowReelSC>
          </DivShowReelSC>
        </DivContainerNavBarSC>
      </DivMaxWidthSC>
    </>
  );
};

export default NavBarTop;
