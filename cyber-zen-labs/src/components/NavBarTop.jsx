import React, { useContext } from "react";
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
  DivShowReelCenterSC,
  DivContainerNavBarHomeSC,
  LinkToBurgerSC,
  IconBurgerSC,
} from "../styled-components-css/styled-navbar";

const NavBarTop = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isHome } = state;
  return (
    <>
      {isHome === true ? (
        <DivMaxWidthSC>
          <DivContainerNavBarHomeSC>
            <LinkToHomeSC to="/">
              <DivLogoBoxSC>
                <LogoNavBarSC />
                <TextNavBarSC>Cyberzen Labs</TextNavBarSC>
              </DivLogoBoxSC>
            </LinkToHomeSC>

            <DivShowReelSC>
              <LinkShowReelSC to="#" isBlackBack={isBlackBack}>
                SHOWREEL
              </LinkShowReelSC>
            </DivShowReelSC>
          </DivContainerNavBarHomeSC>
        </DivMaxWidthSC>
      ) : (
        <DivMaxWidthSC>
          <DivContainerNavBarSC>
            <LinkToHomeSC to="/">
              <DivLogoBoxSC>
                <LogoNavBarSC />
                <TextNavBarSC>Cyberzen Labs</TextNavBarSC>
              </DivLogoBoxSC>
            </LinkToHomeSC>
            <DivShowReelCenterSC>
              <LinkShowReelSC to="#" isBlackBack={isBlackBack}>
                SHOWREEL
              </LinkShowReelSC>
            </DivShowReelCenterSC>
            <LinkToBurgerSC to="/menu">
              <IconBurgerSC></IconBurgerSC>
            </LinkToBurgerSC>
          </DivContainerNavBarSC>
        </DivMaxWidthSC>
      )}
    </>
  );
};

export default NavBarTop;
