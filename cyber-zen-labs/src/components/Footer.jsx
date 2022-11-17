import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import ReactHowler from "react-howler";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";
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
import {
    DivMaxWidthSC,
    DivWrapFooterSC,
    FooterLinesSC,
} from "../styled-components-css/styled-navbar";
import GlobalDispatchContext from "../global_dispatch_context";
import Audio from "../audio/Homepage.mp3";
import CyberModal from "./Modal";
import GetInTouchButton from "./GetInTouchButton";
import useSound from 'use-sound';
import boopSfx from '../audio/footerEfx.wav';
import Sfx from '../audio/efx.wav';
const PointsLine2 = [[0, 0, 415, 0]];

const PointsLine1 = [
    [415, 0, 510, 80],
    [510, 80, 1490, 80],
];

const Footer = () => {
    const { state, dispatch } = useContext(GlobalDispatchContext);
    const { isOpen, isBlackBack, isPage, isForm, isHome, isServ, isProj } = state;

    const [pointsLine1, setPointsLine1] = useState(PointsLine1);
    const [pointsLine2, setPointsLine2] = useState(PointsLine2);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    const [size, setSize] = useState({
        width: width,
        height: height,
    });

    // console.log('lol', size);
    const [play] = useSound(boopSfx, {volume:0.1});
    const [plays] = useSound(Sfx, {volume:0.1});
    const [music, setMusic] = useState(true);
    const MusicBeh = () => {
        setMusic(!music);
    };
    const [musHook, setMusHook] = useState(true);

    useEffect(() => {
        processCoords();
    }, []);

    useLayoutEffect(() => {
        getSize();
        // console.log(document.getElementById('footer-dkjaskdn').offsetHeight, document.getElementById('footer-dkjaskdn').innerWidth);
    }, []);

    const getSize = () => {
        var offsetHeight = document.getElementById("footer-dkjaskdn").offsetHeight;
        var offsetWidth = document.getElementById("footer-dkjaskdn").offsetWidth;

        var rect = document.getElementById("footer-page-box").getBoundingClientRect();
        var rightPointLine1 = rect.right;
        var leftPointLine1 = rect.left;

        // console.log('lolol',leftPointLine1);

        var _pointsLine1 = pointsLine1
        _pointsLine1[0][0] = leftPointLine1 - 70
        _pointsLine1[0][2] = leftPointLine1
        _pointsLine1[1][0] = leftPointLine1
        _pointsLine1[1][2] = rightPointLine1

        var _pointsLine2 = pointsLine2
        pointsLine2[0][2] = leftPointLine1 - 70

        setPointsLine1(_pointsLine1)
        setPointsLine2(_pointsLine2)
        
        setWidth(offsetWidth);
        setHeight(offsetHeight);
        setSize({
            width: offsetWidth,
            height: offsetHeight,
        });
    };

    const processCoords = () => {
        getSize();
        window.addEventListener(
            "resize",
            function (event) {
                getSize();
            },
            true
        );
    };

    useEffect(() => {
        if (isOpen) {
            setMusHook(music);
            setMusic(false);
        } else if (!isOpen && musHook) {
            setMusic(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isPage === "none") {
            setMusic(false);
        }
    }, [isPage]);
    
    return (
        <DivWrapFooterSC id="footer-dkjaskdn">
            {isPage === "about" ? (
                <DivMaxWidthSC>
                    <DivContainerFooterSC>
                        <DivContainerFooterLeftSC onClick={MusicBeh} onMouseDown={plays}>
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
                            <FooterTextTeamSC to="/team" onMouseEnter={play}>Team</FooterTextTeamSC>
                            <FooterTextTeamSC to="/aboutdev" onMouseEnter={play}>Development</FooterTextTeamSC>
                        </DivContainerFooterCenterTeamSC>
                        <DivContainerFooterRightSC>
                            <DivGitButtonBoxSC onMouseEnter={plays}
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

            {isPage === "homePage" ? (
                <>
                    {" "}
                    <FooterLinesSC>
                        <Stage width={size.width} height={size.height - 10}>
                            {isBlackBack === "black" ? (
                                <Layer>
                                    {Tools.drawLineBlack(pointsLine2)}
                                    {Tools.drawLineBlack(pointsLine1)}
                                    <Circle
                                        shadowColor={"#f61067"}
                                        shadowBlur={5}
                                        x={550}
                                        y={828}
                                        radius={5}
                                        fill="#F61067"
                                    />
                                </Layer>
                            ) : (
                                <Layer>
                                    {Tools.drawLine(pointsLine2)}
                                    {Tools.drawLine(pointsLine1)}
                                    {isForm ? (
                                        <Circle x={1420} y={828} radius={5} fill="#ffffff" />
                                    ) : (
                                        <Circle x={550} y={828} radius={5} fill="#ffffff" />
                                    )}
                                </Layer>
                            )}
                        </Stage>
                    </FooterLinesSC>
                    <DivMaxWidthSC>
                        <DivContainerFooterSC>
                            <DivContainerFooterLeftSC onClick={MusicBeh} onMouseDown={plays}>
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
                            <DivContainerFooterCenterSC id="footer-page-box">
                                <H1FooterTextSC to="/" isForm={isHome} onMouseEnter={play}>
                                    HOME
                                </H1FooterTextSC>
                                <H1FooterTextSC to="/about" onMouseEnter={play}>ABOUT</H1FooterTextSC>
                                <H1FooterTextSC to="/services" isForm={isServ} onMouseEnter={play}>
                                    SERVICES
                                </H1FooterTextSC>
                                {/* <H1FooterTextSC to="/projects" isForm={isProj}>
                                    PROJECTS
                                </H1FooterTextSC> */}
                                <H1FooterTextSC to="/contacts" isForm={isForm} onMouseEnter={play}>
                                    CONTACTS
                                </H1FooterTextSC>
                            </DivContainerFooterCenterSC>
                            <DivContainerFooterRightSC>
                                <DivGitButtonBoxSC onMouseEnter={plays}
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
                </>
            ) : null}
            {isPage === "home" ? (
                <>
                    {" "}
                    <DivMaxWidthSC>
                        <DivContainerFooterSC>
                            <DivContainerFooterLeftSC onClick={MusicBeh} onMouseDown={plays}>
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
                            <DivContainerFooterCenterSC id="footer-page-box">
                                <H1FooterTextSC to="/" isForm={isHome} onMouseEnter={play}>
                                    HOME
                                </H1FooterTextSC>
                                <H1FooterTextSC to="/about" onMouseEnter={play}>ABOUT</H1FooterTextSC>
                                <H1FooterTextSC to="/services" isForm={isServ} onMouseEnter={play}>
                                    SERVICES
                                </H1FooterTextSC>
                                {/* <H1FooterTextSC to="/projects" isForm={isProj}>
                                    PROJECTS
                                </H1FooterTextSC> */}
                                <H1FooterTextSC to="/contacts" isForm={isForm} onMouseEnter={play}>
                                    CONTACTS
                                </H1FooterTextSC>
                            </DivContainerFooterCenterSC>
                            <DivContainerFooterRightSC>
                                <DivGitButtonBoxSC onMouseEnter={plays}
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
                </>
            ) : null}
            {isPage === "sound" ? (
                <DivMaxWidthSC>
                    <DivContainerFooterSC>
                        <DivContainerFooterLeftSC onClick={MusicBeh} onMouseDown={plays}>
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
                volume={0.1}
            />
        </DivWrapFooterSC>
    );
};

export default Footer;
