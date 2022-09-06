import React, { useContext, useState, useEffect } from "react";

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
  DivBarsSC,
} from "../styled-components-css/styled-Footer";
import { DivMaxWidthSC } from "../styled-components-css/styled-navbar";
import GlobalDispatchContext from "../global_dispatch_context";

const Footer = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);

  const { isPage } = state;

  return (
    <>
      {isPage === "about" ? (
        <DivMaxWidthSC>
          <DivContainerFooterSC>
            <DivContainerFooterLeftSC>
              <div className="MusicContainer">
                <div className="Bars" />
                <div className="Bars" />
                <div className="Bars" />
                <div className="Bars" />
              </div>
              <H1FooterTextSoundOnSC>sound on</H1FooterTextSoundOnSC>
            </DivContainerFooterLeftSC>
            <DivContainerFooterCenterTeamSC>
              <FooterTextTeamSC to="/team">Team</FooterTextTeamSC>
              <FooterTextTeamSC to="/aboutdev">Development</FooterTextTeamSC>
            </DivContainerFooterCenterTeamSC>
            <DivContainerFooterRightSC>
              <DivPhotoRightContainerSC to="/getintouch" />
            </DivContainerFooterRightSC>
          </DivContainerFooterSC>
        </DivMaxWidthSC>
      ) : null}
      {isPage === "home" ? (
        <DivMaxWidthSC>
          <DivContainerFooterSC>
            <DivContainerFooterLeftSC>
              <div className="MusicContainer">
                <div className="Bars" />
                <div className="Bars" />
                <div className="Bars" />
                <div className="Bars" />
              </div>
              <H1FooterTextSoundOnSC>sound on</H1FooterTextSoundOnSC>
            </DivContainerFooterLeftSC>
            <DivContainerFooterCenterSC>
              <H1FooterTextSC to="/">HOME</H1FooterTextSC>
              <H1FooterTextSC to="/about">ABOUT</H1FooterTextSC>
              <H1FooterTextSC to="/services">SERVICES</H1FooterTextSC>
              <H1FooterTextSC to="#">PROJECTS</H1FooterTextSC>
              <H1FooterTextSC to="/contacts">CONTACTS</H1FooterTextSC>
            </DivContainerFooterCenterSC>
            <DivContainerFooterRightSC>
              <DivPhotoRightContainerSC to="/getintouch" />
            </DivContainerFooterRightSC>
          </DivContainerFooterSC>
        </DivMaxWidthSC>
      ) : null}
      {isPage === "sound" ? (
        <DivMaxWidthSC>
          <DivContainerFooterSC>
            <DivContainerFooterLeftSC>
              <div className="MusicContainer">
                <div className="Bars" />
                <div className="Bars" />
                <div className="Bars" />
                <div className="Bars" />
              </div>
              <H1FooterTextSoundOnSC>sound on</H1FooterTextSoundOnSC>
            </DivContainerFooterLeftSC>
          </DivContainerFooterSC>
        </DivMaxWidthSC>
      ) : null}
    </>
  );
};

export default Footer;
