import React, { useContext, useState } from "react";
import {
  DivContainerFooterCenterSC,
  DivContainerFooterLeftSC,
  DivContainerFooterRightSC,
  DivContainerFooterSC,
  DivPhotoRightContainerSC,
  DivSoundPhotoLeftContainerSC,
  H1FooterTextSC,
  H1FooterTextSoundOnSC,
  FooterTextTeamSC,
  DivContainerFooterCenterTeamSC,
} from "../styled-components-css/styled-Footer";
import { DivMaxWidthSC } from "../styled-components-css/styled-navbar";
import GlobalDispatchContext from "../global_dispatch_context";

const Footer = () => {
  const listContent = [
    {
      about: (
        <>
          <DivMaxWidthSC>
            <DivContainerFooterSC>
              <DivContainerFooterLeftSC>
                <DivSoundPhotoLeftContainerSC />
                <H1FooterTextSoundOnSC>sound on</H1FooterTextSoundOnSC>
              </DivContainerFooterLeftSC>
              <DivContainerFooterCenterSC>
                <H1FooterTextSC to="/">HOME</H1FooterTextSC>
                <H1FooterTextSC to="/about">ABOUT</H1FooterTextSC>
                <H1FooterTextSC to="#">SERVICES</H1FooterTextSC>
                <H1FooterTextSC to="#">PROJECTS</H1FooterTextSC>
                <H1FooterTextSC to="/contacts">CONTACTS</H1FooterTextSC>
              </DivContainerFooterCenterSC>
              <DivContainerFooterRightSC>
                <DivPhotoRightContainerSC />
              </DivContainerFooterRightSC>
            </DivContainerFooterSC>
          </DivMaxWidthSC>
        </>
      ),
    },
    {
      sound: (
        <>
          <DivMaxWidthSC>
            <DivContainerFooterSC>
              <DivContainerFooterLeftSC>
                <DivSoundPhotoLeftContainerSC />
                <H1FooterTextSoundOnSC>sound on</H1FooterTextSoundOnSC>
              </DivContainerFooterLeftSC>
            </DivContainerFooterSC>
          </DivMaxWidthSC>
        </>
      ),
    },
    {
      default: (
        <>
          <DivMaxWidthSC>
            <DivContainerFooterSC>
              <DivContainerFooterLeftSC>
                <DivSoundPhotoLeftContainerSC />
                <H1FooterTextSoundOnSC>sound on</H1FooterTextSoundOnSC>
              </DivContainerFooterLeftSC>
              <DivContainerFooterCenterSC>
                <H1FooterTextSC to="/">HOME</H1FooterTextSC>
                <H1FooterTextSC to="/about">ABOUT</H1FooterTextSC>
                <H1FooterTextSC to="#">SERVICES</H1FooterTextSC>
                <H1FooterTextSC to="#">PROJECTS</H1FooterTextSC>
                <H1FooterTextSC to="/contacts">CONTACTS</H1FooterTextSC>
              </DivContainerFooterCenterSC>
              <DivContainerFooterRightSC>
                <DivPhotoRightContainerSC />
              </DivContainerFooterRightSC>
            </DivContainerFooterSC>
          </DivMaxWidthSC>
        </>
      ),
    },
  ];
  const [indexSelectedFooter, getFooter] = useState(0);

  return (
    <DivMaxWidthSC>
      <DivContainerFooterSC>
        <DivContainerFooterLeftSC>
          <DivSoundPhotoLeftContainerSC />
          <H1FooterTextSoundOnSC>sound on</H1FooterTextSoundOnSC>
        </DivContainerFooterLeftSC>
        <DivContainerFooterCenterSC>
          <H1FooterTextSC to="/">HOME</H1FooterTextSC>
          <H1FooterTextSC to="/about">ABOUT</H1FooterTextSC>
          <H1FooterTextSC to="#">SERVICES</H1FooterTextSC>
          <H1FooterTextSC to="#">PROJECTS</H1FooterTextSC>
          <H1FooterTextSC to="/contacts">CONTACTS</H1FooterTextSC>
        </DivContainerFooterCenterSC>
        <DivContainerFooterRightSC>
          <DivPhotoRightContainerSC to={"/getintouch"} />
        </DivContainerFooterRightSC>
      </DivContainerFooterSC>
    </DivMaxWidthSC>
  );
};

export default Footer;
