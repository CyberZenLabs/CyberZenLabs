import React, { useContext, useState, useEffect, useRef } from "react";
import ReactHowler from "react-howler";
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
  DivGitButtonBoxSC,
} from "../styled-components-css/styled-Footer";
import { DivMaxWidthSC } from "../styled-components-css/styled-navbar";
import GlobalDispatchContext from "../global_dispatch_context";
import Audio from "../audio/Homepage.mp3";

import CyberModal from "./Modal";

import GetInTouchButton from "./GetInTouchButton";

const Footer = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isOpen } = state;
  const { isPage } = state;

  const [music, setMusic] = useState(true);
  const MusicBeh = () => {
    setMusic(!music);
  };
  const [musHook, setMusHook] = useState(true);
  useEffect(() => {
    if (isOpen) {
      setMusHook(music);
      setMusic(false);
    } else if (!isOpen && musHook) {
      setMusic(true);
    }
  }, [isOpen]);
  return (
    <>
      {isPage === "about" ? (
        <DivMaxWidthSC>
          <DivContainerFooterSC>
            <DivContainerFooterLeftSC onClick={MusicBeh}>
              {music ? (
                <div className="MusicContainer">
                  <div className="Bars" />
                  <div className="Bars" />
                  <div className="Bars" />
                  <div className="Bars" />
                </div>
              ) : (
                <div className="MusicContainerStop">
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                </div>
              )}
              <H1FooterTextSoundOnSC>
                {" "}
                {music ? "sound on" : "sound off"}
              </H1FooterTextSoundOnSC>
            </DivContainerFooterLeftSC>
            <DivContainerFooterCenterTeamSC>
              <FooterTextTeamSC to="/team">Team</FooterTextTeamSC>
              <FooterTextTeamSC to="/aboutdev">Development</FooterTextTeamSC>
            </DivContainerFooterCenterTeamSC>
            <DivContainerFooterRightSC>
              <DivPhotoRightContainerSC
                onClick={() =>
                  dispatch({
                    type: "SET_IS_OPEN",
                    status: true,
                  })
                }
              />
            </DivContainerFooterRightSC>
          </DivContainerFooterSC>
        </DivMaxWidthSC>
      ) : null}
      {isPage === "home" ? (
        <DivMaxWidthSC>
          <DivContainerFooterSC>
            <DivContainerFooterLeftSC onClick={MusicBeh}>
              {music ? (
                <div className="MusicContainer">
                  <div className="Bars" />
                  <div className="Bars" />
                  <div className="Bars" />
                  <div className="Bars" />
                </div>
              ) : (
                <div className="MusicContainerStop">
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                </div>
              )}
              <H1FooterTextSoundOnSC>
                {" "}
                {music ? "sound on" : "sound off"}
              </H1FooterTextSoundOnSC>
            </DivContainerFooterLeftSC>
            <DivContainerFooterCenterSC>
              <H1FooterTextSC to="/">HOME</H1FooterTextSC>
              <H1FooterTextSC to="/about">ABOUT</H1FooterTextSC>
              <H1FooterTextSC to="/services">SERVICES</H1FooterTextSC>
              <H1FooterTextSC to="/projects">PROJECTS</H1FooterTextSC>
              <H1FooterTextSC to="/contacts">CONTACTS</H1FooterTextSC>
            </DivContainerFooterCenterSC>
            <DivContainerFooterRightSC>
              <DivGitButtonBoxSC
                onClick={() =>
                  dispatch({
                    type: "SET_IS_OPEN",
                    status: true,
                  })
                }
              >
                <GetInTouchButton />
              </DivGitButtonBoxSC>
            </DivContainerFooterRightSC>
          </DivContainerFooterSC>
        </DivMaxWidthSC>
      ) : null}
      {isPage === "sound" ? (
        <DivMaxWidthSC>
          <DivContainerFooterSC>
            <DivContainerFooterLeftSC onClick={MusicBeh}>
              {music ? (
                <div className="MusicContainer">
                  <div className="Bars" />
                  <div className="Bars" />
                  <div className="Bars" />
                  <div className="Bars" />
                </div>
              ) : (
                <div className="MusicContainerStop">
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                  <div className="BarsStop" />
                </div>
              )}
              <H1FooterTextSoundOnSC>
                {" "}
                {music ? "sound on" : "sound off"}
              </H1FooterTextSoundOnSC>
            </DivContainerFooterLeftSC>
          </DivContainerFooterSC>
        </DivMaxWidthSC>
      ) : null}
      <CyberModal open={isOpen} />
      <ReactHowler
        src={Audio}
        playing={music}
        preload={true}
        loop={true}
        volume={0.12}
      />
    </>
  );
};

export default Footer;
