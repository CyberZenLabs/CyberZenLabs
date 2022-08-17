import React from "react";
import {
  DivContainerNavBarSC,
  DivLogoBoxSC,
  DivMaxWidthSC,
  DivShowReelSC,
  LinkNavBarSC,
  LinkShowReelSC,
  LogoNavBarSC,
  TextNavBarSC,
} from "../styled-components-css/styled-navbar";

const NavBarTop = () => {
  return (
    <>
      <DivMaxWidthSC>
        <DivContainerNavBarSC>
          <DivLogoBoxSC>
            <LogoNavBarSC />
            <TextNavBarSC>Cyberzen Labs</TextNavBarSC>
          </DivLogoBoxSC>
          <DivShowReelSC>
            <LinkShowReelSC to="#">ShowReel</LinkShowReelSC>
          </DivShowReelSC>
        </DivContainerNavBarSC>
      </DivMaxWidthSC>
    </>
  );
};

export default NavBarTop;
