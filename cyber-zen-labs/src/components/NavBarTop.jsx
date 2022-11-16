import React, { useContext } from "react";
import GlobalDispatchContext from "../global_dispatch_context";
import BurgerMenu from "../pages/BurgerMenu";
import {
  DivContainerNavBarSC,
  DivLogoBoxSC,
  DivMaxWidthSC,
  DivShowReelSC,
  LinkShowReelSC,
  LinkShowReel2SC,
  LinkToHomeSC,
  LogoNavBarSC,
  TextNavBarSC,
  DivShowReelCenterSC,
  DivContainerNavBarHomeSC,
  LinkToBurgerSC,
  IconBurgerSC,
  BurgerMenuDisplaySC,
  DivDecLineSC,
} from "../styled-components-css/styled-navbar";
import useSound from 'use-sound';
import Sfx from '../audio/efx.wav';
const NavBarTop = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isHome, isForm } = state;
  const [plays] = useSound(Sfx);
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
            <BurgerMenuDisplaySC>
              <LinkToBurgerSC to="/menu" onMouseEnter={plays}>
                <IconBurgerSC></IconBurgerSC>
              </LinkToBurgerSC>
            </BurgerMenuDisplaySC>
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
              {isForm === true ? (
                <LinkShowReel2SC to="#" isBlackBack={isBlackBack}>
                  SHOWREEL
                  <DivDecLineSC />
                </LinkShowReel2SC>
              ) : (
                <LinkShowReelSC to="#" isBlackBack={isBlackBack}>
                  SHOWREEL
                </LinkShowReelSC>
              )}
            </DivShowReelCenterSC>
            <LinkToBurgerSC to="/menu" onMouseEnter={plays}>
              <IconBurgerSC></IconBurgerSC>
            </LinkToBurgerSC>
          </DivContainerNavBarSC>
        </DivMaxWidthSC>
      )}
    </>
  );
};

export default NavBarTop;
