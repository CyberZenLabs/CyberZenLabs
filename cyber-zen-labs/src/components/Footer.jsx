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

        var rightPointLine1 = document.getElementById("footer-page-box").offsetWidth + document.getElementById("footer-page-box").offsetLeft;
        var leftPointLine1 = document.getElementById("footer-page-box").offsetLeft;

        var _pointsLine1 = pointsLine1
        _pointsLine1[0][2] = leftPointLine1
        _pointsLine1[1][0] = leftPointLine1
        
        _pointsLine1[1][2] = rightPointLine1

        setPointsLine1(_pointsLine1)
        console.log("kek", rightPointLine1, leftPointLine1);

        setWidth(offsetWidth);
        setHeight(offsetHeight);
        setSize({
            width: offsetWidth,
            height: offsetHeight,
        });
    };

    const processCoords = () => {
        const coordsLine1 = Tools.getResponseCoords(
            PointsLine1,
            {
                width: window.innerWidth,
                height: window.innerHeight,
            },
            window.innerWidth >= 1921 ? false : true
        );

        

        const coordsLine2 = Tools.getResponseCoords(
            PointsLine2,
            {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        );

        // setPointsCircle1({
        //   x: coords[coords.length - 1][coords[coords.length - 1].length - 2],
        //   y: coords[coords.length - 1][coords[coords.length - 1].length - 1],
        // });

        // setPointsLine1(coordsLine1);
        setPointsLine2(coordsLine2);
        getSize();
        window.addEventListener(
            "resize",
            function (event) {
                const _coordsLine1 = Tools.getResponseCoords(
                    PointsLine1,
                    {
                        width: event.target.innerWidth,
                        height: event.target.innerHeight,
                    },
                    event.target.innerWidth >= 1921 ? false : true
                );

                const _coordsLine2 = Tools.getResponseCoords(
                    PointsLine2,
                    {
                        width: event.target.innerWidth,
                        height: event.target.innerHeight,
                    }
                );

                // setPointsCircle1({
                //   x: coords2[coords2.length - 1][
                //     coords2[coords2.length - 1].length - 2
                //   ],
                //   y: coords2[coords2.length - 1][
                //     coords2[coords2.length - 1].length - 1
                //   ],
                // });

                // setPointsLine1(_coordsLine1);
                setPointsLine2(_coordsLine2);
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

            {isPage === "homePage" ? (
                <>
                    {" "}
                    <FooterLinesSC>
                        <Stage width={size.width} height={size.height}>
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
                            <DivContainerFooterCenterSC id="footer-page-box">
                                <H1FooterTextSC to="/" isForm={isHome}>
                                    HOME
                                </H1FooterTextSC>
                                <H1FooterTextSC to="/about">ABOUT</H1FooterTextSC>
                                <H1FooterTextSC to="/services" isForm={isServ}>
                                    SERVICES
                                </H1FooterTextSC>
                                <H1FooterTextSC to="/projects" isForm={isProj}>
                                    PROJECTS
                                </H1FooterTextSC>
                                <H1FooterTextSC to="/contacts" isForm={isForm}>
                                    CONTACTS
                                </H1FooterTextSC>
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
                </>
            ) : null}
            {isPage === "home" ? (
                <>
                    {" "}
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
                            <DivContainerFooterCenterSC id="footer-page-box">
                                <H1FooterTextSC to="/" isForm={isHome}>
                                    HOME
                                </H1FooterTextSC>
                                <H1FooterTextSC to="/about">ABOUT</H1FooterTextSC>
                                <H1FooterTextSC to="/services" isForm={isServ}>
                                    SERVICES
                                </H1FooterTextSC>
                                <H1FooterTextSC to="/projects" isForm={isProj}>
                                    PROJECTS
                                </H1FooterTextSC>
                                <H1FooterTextSC to="/contacts" isForm={isForm}>
                                    CONTACTS
                                </H1FooterTextSC>
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
                </>
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
                volume={0}
            />
        </DivWrapFooterSC>
    );
};

export default Footer;
