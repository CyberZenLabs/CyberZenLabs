import React, {useContext} from "react";

import {
  DivContainerFooterCenterSC,
  DivContainerFooterLeftSC,
  DivContainerFooterRightSC,
  DivContainerFooterSC,
  DivPhotoRightContainerSC,
  DivSoundPhotoLeftContainerSC,
  H1FooterTextSC,
  H1FooterTextSoundOnSC,
} from "../styled-components-css/styled-Footer";
import { DivMaxWidthSC } from "../styled-components-css/styled-navbar";
import GlobalDispatchContext from "../global_dispatch_context";

const Footer = () => {
  return (
    <DivMaxWidthSC>
      <DivContainerFooterSC>
        <DivContainerFooterLeftSC>
          <DivSoundPhotoLeftContainerSC/>
          <H1FooterTextSoundOnSC>sound on</H1FooterTextSoundOnSC>
        </DivContainerFooterLeftSC>
        <DivContainerFooterCenterSC>
          <H1FooterTextSC to="/">HOME</H1FooterTextSC>
          <H1FooterTextSC to="/about">ABOUT</H1FooterTextSC>
          <H1FooterTextSC to="#">SERVICES</H1FooterTextSC>
          <H1FooterTextSC to="#">PROJECTS</H1FooterTextSC>
          <H1FooterTextSC to="#">CONTACTS</H1FooterTextSC>
        </DivContainerFooterCenterSC>
        <DivContainerFooterRightSC>
      <DivPhotoRightContainerSC />
        </DivContainerFooterRightSC>
      </DivContainerFooterSC>
    </DivMaxWidthSC>
  );
};

export default Footer;
