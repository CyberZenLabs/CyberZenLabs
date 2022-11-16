import React, { useContext, useEffect, useState } from "react";
import {
    DivContainerSC,
    DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
    DescHomeBoxSC,
    DivDescBoxtSC,
    DivHomeContentSC,
    DivShadowBoxSC,
    DivTextBoxtSC,
    DivTitleBoxtSC,
    SloganBoxSC,
    TitleHomeBoxSC,
    DivHomeContentRowsSC,
    DescHomeBoxColumnsSC,
    GifBuddhaHomeSC,
    DivHomeLineBoxSC,
} from "../styled-components-css/styled.home";
import GlobalDispatchContext from "../global_dispatch_context";
import {
    DivKirdroBoxSC,
    DivRuslanBoxSC,
} from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";

const PointsLine1 = [
    [0, 150, 600, 150],
    [600, 150, 640, 190],
    [640, 190, 950, 190],
    [950, 190, 1000, 240],
    [1000, 240, 1000, 330],
    [1000, 330, 1040, 364],
];

const PointsLine2 = [
    [0, 660, 550, 660],
    [550, 660, 590, 620],
    [590, 620, 850, 620],
    [850, 620, 890, 580],
    [890, 580, 890, 466],
    [890, 466, 930, 426],
];

const PointsLine3 = [
    [4000, 688, 1320, 688],
    [1320, 688, 1280, 648],
    [1280, 648, 1130, 648],
    [1130, 648, 1080, 598],
    [1080, 598, 1080, 528],
    [1080, 528, 1040, 488],
];

const Home = () => {
    const { state, dispatch } = useContext(GlobalDispatchContext);
    const { isPage, isBlackBack, isForm } = state;

    const [pointsLine1, setPointsLine1] = useState(PointsLine1);
    const [pointsCircle1, setPointsCircle1] = useState({
        x: 0,
        y: 0,
    });

    const [pointsLine2, setPointsLine2] = useState(PointsLine2);
    const [pointsCircle2, setPointsCircle2] = useState({
        x: 0,
        y: 0,
    });

    const [pointsLine3, setPointsLine3] = useState(PointsLine3);
    const [pointsCircle3, setPointsCircle3] = useState({
        x: 0,
        y: 0,
    });

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        dispatch({
            type: "SET_IS_HOME",
            status: true,
        });
        return () => {
            dispatch({
                type: "SET_IS_HOME",
                status: false,
            });
        };
    }, []);

    useEffect(() => {
        processCoords();
    }, []);

    useEffect(() => {
        return () => {
            dispatch({
                type: "SET_IS_PAGE",
                status: "homePage",
            });
        };
    }, [isPage]);

    const getSizeCoords = (pointArr, innerWidth, boxId, lineNumber) => {
        let rect;
        let rightPointCybZen;

        if (boxId) {
            rect = document.getElementById(`${boxId}`).getBoundingClientRect();
            rightPointCybZen = rect.right;
            console.log('rect',rect);
        }

        switch (lineNumber) {
            case "line-1":
                if (innerWidth >= 1024) {
                    pointArr[1][2] = pointArr[0][2] + 30;
                    pointArr[2][0] = pointArr[0][2] + 30;
                    pointArr[2][2] = rightPointCybZen - 15;
                    pointArr[3][0] = rightPointCybZen - 15;
                    pointArr[3][2] = rightPointCybZen + 27;
                    pointArr[4][0] = rightPointCybZen + 27;
                    pointArr[4][2] = rightPointCybZen + 27;
                    pointArr[5][0] = rightPointCybZen + 27;
                    pointArr[5][2] = rightPointCybZen + 60;
                } else if (innerWidth >= 768) {
                    pointArr[1][2] = pointArr[0][2] + 30;
                    pointArr[2][0] = pointArr[0][2] + 30;
                    pointArr[2][2] = rightPointCybZen - 15;
                    pointArr[3][0] = rightPointCybZen - 15;
                    pointArr[3][2] = rightPointCybZen + 27;
                    pointArr[4][0] = rightPointCybZen + 27;
                    pointArr[4][2] = rightPointCybZen + 27;
                    pointArr[5][0] = rightPointCybZen + 27;
                    pointArr[5][2] = rightPointCybZen + 60;
                } else {
                    // pointArr[0] = [0, 150, 80, 150];
                    // pointArr[1] = [80, 150, 110, 130];
                    // pointArr[2] = [110, 130, 180, 130];
                    // pointArr[3] = [180, 130, 210, 110];
                    // pointArr[4] = [210, 110, 260, 110];
                }
                break;
            case "line-2":
                if (innerWidth >= 1024) {
                    pointArr[1][2] = pointArr[0][2] + 30;
                    pointArr[2][0] = pointArr[0][2] + 30;
                    pointArr[2][2] = rightPointCybZen - 15;
                    pointArr[3][0] = rightPointCybZen - 15;
                    pointArr[3][2] = rightPointCybZen + 15;
                    pointArr[4][0] = rightPointCybZen + 15;
                    pointArr[4][2] = rightPointCybZen + 15;
                    pointArr[5][0] = rightPointCybZen + 15;
                    pointArr[5][2] = rightPointCybZen + 48;
                } else if (innerWidth >= 768) {

                    // смещение по x
                    pointArr[1][2] = pointArr[0][2] + 30;
                    pointArr[2][0] = pointArr[0][2] + 30;
                    pointArr[2][2] = rightPointCybZen - 15;
                    pointArr[3][0] = rightPointCybZen - 15;
                    pointArr[3][2] = rightPointCybZen + 15;
                    pointArr[4][0] = rightPointCybZen + 15;
                    pointArr[4][2] = rightPointCybZen + 15;
                    pointArr[5][0] = rightPointCybZen + 15;
                    pointArr[5][2] = rightPointCybZen + 48;
                } else {
                    pointArr[1][2] = pointArr[0][2] + 30;
                    pointArr[2][0] = pointArr[0][2] + 30;
                    pointArr[2][2] = rightPointCybZen - 15;
                    pointArr[3][0] = rightPointCybZen - 15;
                    pointArr[3][2] = rightPointCybZen + 15;
                    pointArr[4][0] = rightPointCybZen + 15;
                    pointArr[4][2] = rightPointCybZen + 15;
                    pointArr[5][0] = rightPointCybZen + 15;
                    pointArr[5][2] = rightPointCybZen + 48;
                }
                break;
            case "line-3":
                if (innerWidth >= 1024) {
                    pointArr[5][2] = rightPointCybZen + 60;
                    pointArr[5][0] = pointArr[5][2] + 35;
                    pointArr[4][2] = pointArr[5][0];
                    pointArr[4][0] = pointArr[4][2];
                    pointArr[3][2] = pointArr[4][0];
                    pointArr[3][0] = pointArr[3][2] + 35;
                    pointArr[2][2] = pointArr[3][0];
                    pointArr[2][0] = pointArr[2][2] + 110;
                    pointArr[1][2] = pointArr[2][0];
                    pointArr[1][0] = pointArr[1][2] + 35;
                    pointArr[0][2] = pointArr[1][0];
                } else if (innerWidth >= 768) {
                    pointArr[5][2] = rightPointCybZen + 60;
                    pointArr[5][0] = pointArr[5][2] + 35;
                    pointArr[4][2] = pointArr[5][0];
                    pointArr[4][0] = pointArr[4][2];
                    pointArr[3][2] = pointArr[4][0];
                    pointArr[3][0] = pointArr[3][2] + 35;
                    pointArr[2][2] = pointArr[3][0];
                    pointArr[2][0] = pointArr[2][2] + 110;
                    pointArr[1][2] = pointArr[2][0];
                    pointArr[1][0] = pointArr[1][2] + 35;
                    pointArr[0][2] = pointArr[1][0];
                } else {
                    pointArr[5][2] = rightPointCybZen + 60;
                    pointArr[5][0] = pointArr[5][2] + 35;
                    pointArr[4][2] = pointArr[5][0];
                    pointArr[4][0] = pointArr[4][2];
                    pointArr[3][2] = pointArr[4][0];
                    pointArr[3][0] = pointArr[3][2] + 35;
                    pointArr[2][2] = pointArr[3][0];
                    pointArr[2][0] = pointArr[2][2] + 110;
                    pointArr[1][2] = pointArr[2][0];
                    pointArr[1][0] = pointArr[1][2] + 35;
                    pointArr[0][2] = pointArr[1][0];
                }
                break;
            default:
                break;
        }

        return pointArr;
    };

    const processCoords = () => {
        let coords = Tools.getResponseCoords(PointsLine1, {
            width: window.innerWidth,
            height: window.innerHeight,
        });
        let coordsLine2 = Tools.getResponseCoords(PointsLine2, {
            width: window.innerWidth,
            height: window.innerHeight,
        });
        let coordsLine3 = Tools.getResponseCoords(PointsLine3, {
            width: window.innerWidth,
            height: window.innerHeight,
        });

        let _coordsTemp = Tools.copy(coords);
        let _coordsTemp2 = Tools.copy(coordsLine2);
        let _coordsTemp3 = Tools.copy(coordsLine3);

        if (window.innerWidth <= 1470) {
            getSizeCoords(
                _coordsTemp,
                window.innerWidth,
                "cyb-zen-title-home",
                "line-1"
            );
            getSizeCoords(
                _coordsTemp2,
                window.innerWidth,
                "cyb-zen-desc-home",
                "line-2"
            );
            getSizeCoords(
                _coordsTemp3,
                window.innerWidth,
                "cyb-zen-title-home",
                "line-3"
            );
        }

        if (window.innerHeight > 800) {
            setPointsCircle1({
                x: _coordsTemp[_coordsTemp.length - 1][
                _coordsTemp[_coordsTemp.length - 1].length - 2
                    ],
                y: _coordsTemp[_coordsTemp.length - 1][
                _coordsTemp[_coordsTemp.length - 1].length - 1
                    ],
            });

            setPointsCircle2({
                x: _coordsTemp2[_coordsTemp2.length - 1][
                _coordsTemp2[_coordsTemp2.length - 1].length - 2
                    ],
                y: _coordsTemp2[_coordsTemp2.length - 1][
                _coordsTemp2[_coordsTemp2.length - 1].length - 1
                    ],
            });

            setPointsCircle3({
                x: _coordsTemp3[_coordsTemp3.length - 1][
                _coordsTemp3[_coordsTemp3.length - 1].length - 2
                    ],
                y: _coordsTemp3[_coordsTemp3.length - 1][
                _coordsTemp3[_coordsTemp3.length - 1].length - 1
                    ],
            });
            setPointsLine1(_coordsTemp);
            setPointsLine2(_coordsTemp2);
            setPointsLine3(_coordsTemp3);
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        } else {
            coords = Tools.getResponseCoords(
                PointsLine1,
                {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                true,
                1920,
                800
            );
            coordsLine2 = Tools.getResponseCoords(
                PointsLine2,
                {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                true,
                1920,
                800
            );
            coordsLine3 = Tools.getResponseCoords(
                PointsLine3,
                {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                true,
                1920,
                800
            );

            _coordsTemp = Tools.copy(coords);
            _coordsTemp2 = Tools.copy(coordsLine2);
            _coordsTemp3 = Tools.copy(coordsLine3);
            setPointsCircle1({
                x: _coordsTemp[_coordsTemp.length - 1][
                _coordsTemp[_coordsTemp.length - 1].length - 2
                    ],
                y: _coordsTemp[_coordsTemp.length - 1][
                _coordsTemp[_coordsTemp.length - 1].length - 1
                    ],
            });

            setPointsCircle2({
                x: _coordsTemp2[_coordsTemp2.length - 1][
                _coordsTemp2[_coordsTemp2.length - 1].length - 2
                    ],
                y: _coordsTemp2[_coordsTemp2.length - 1][
                _coordsTemp2[_coordsTemp2.length - 1].length - 1
                    ],
            });

            setPointsCircle3({
                x: _coordsTemp3[_coordsTemp3.length - 1][
                _coordsTemp3[_coordsTemp3.length - 1].length - 2
                    ],
                y: _coordsTemp3[_coordsTemp3.length - 1][
                _coordsTemp3[_coordsTemp3.length - 1].length - 1
                    ],
            });
            setPointsLine1(_coordsTemp);
            setPointsLine2(_coordsTemp2);
            setPointsLine3(_coordsTemp3);
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            console.log('kekekekekekek');
        }

        window.addEventListener(
            "resize",
            function (event) {
                // console.log('>>><><>>>>><><>', event.target.innerHeight, event.target.outerHeight)
                const coords2 = Tools.getResponseCoords(PointsLine1, {
                    width: event.target.innerWidth,
                    height: event.target.innerHeight,
                });
                const _coordsLine2 = Tools.getResponseCoords(PointsLine2, {
                    width: event.target.innerWidth,
                    height: event.target.innerHeight,
                });
                const _coordsLine3 = Tools.getResponseCoords(PointsLine3, {
                    width: event.target.innerWidth,
                    height: event.target.innerHeight,
                });

                let _coordsTemp11 = Tools.copy(coords2);
                let _coordsTemp22 = Tools.copy(_coordsLine2);
                let _coordsTemp33 = Tools.copy(_coordsLine3);

                if (event.target.innerWidth <= 1470) {
                    getSizeCoords(
                        _coordsTemp11,
                        event.target.innerWidth,
                        "cyb-zen-title-home",
                        "line-1"
                    );
                    getSizeCoords(
                        _coordsTemp22,
                        event.target.innerWidth,
                        "cyb-zen-desc-home",
                        "line-2"
                    );
                    getSizeCoords(
                        _coordsTemp33,
                        event.target.innerWidth,
                        "cyb-zen-title-home",
                        "line-3"
                    );
                }

                if (event.target.innerHeight > 800) {

                    setPointsCircle1({
                        x: _coordsTemp11[_coordsTemp11.length - 1][
                        _coordsTemp11[_coordsTemp11.length - 1].length - 2
                            ],
                        y: _coordsTemp11[_coordsTemp11.length - 1][
                        _coordsTemp11[_coordsTemp11.length - 1].length - 1
                            ],
                    });

                    setPointsCircle2({
                        x: _coordsTemp22[_coordsTemp22.length - 1][
                        _coordsTemp22[_coordsTemp22.length - 1].length - 2
                            ],
                        y: _coordsTemp22[_coordsTemp22.length - 1][
                        _coordsTemp22[_coordsTemp22.length - 1].length - 1
                            ],
                    });

                    setPointsCircle3({
                        x: _coordsTemp33[_coordsTemp33.length - 1][
                        _coordsTemp33[_coordsTemp33.length - 1].length - 2
                            ],
                        y: _coordsTemp33[_coordsTemp33.length - 1][
                        _coordsTemp33[_coordsTemp33.length - 1].length - 1
                            ],
                    });
                    setPointsLine1(_coordsTemp11);
                    setPointsLine2(_coordsTemp22);
                    setPointsLine3(_coordsTemp33);
                    setSize({
                        width: event.target.innerWidth,
                        height: (event.target.innerHeight = 880),
                    });
                }

                // console.log('><><><><><>', event.target.outerWidth)
                // setSize({
                //     width: event.target.innerWidth,
                //     height: event.target.innerHeight,
                // });
            },
            true
        );
    };

    return (
        <>
            <DivHomeLineBoxSC>
                <Stage width={size.width} height={size.height}>
                    {isBlackBack === "black" ? (
                        <Layer>
                            {Tools.drawLineBlack(pointsLine1)}
                            <Circle
                                x={pointsCircle1.x}
                                y={pointsCircle1.y}
                                radius={5}
                                fill="#F61067"
                            />
                        </Layer>
                    ) : (
                        <Layer>
                            {Tools.drawLine(pointsLine1)}
                            <Circle
                                x={pointsCircle1.x}
                                y={pointsCircle1.y}
                                radius={5}
                                fill="#ffffff"
                            />
                        </Layer>
                    )}
                    {isBlackBack === "black" ? (
                        <Layer>
                            {Tools.drawLineBlack(pointsLine2)}
                            <Circle
                                x={pointsCircle2.x}
                                y={pointsCircle2.y}
                                radius={5}
                                fill="#F61067"
                            />
                        </Layer>
                    ) : (
                        <Layer>
                            {Tools.drawLine(pointsLine2)}
                            {isForm ? (
                                <Circle
                                    x={pointsCircle2.x}
                                    y={pointsCircle2.y}
                                    radius={5}
                                    fill="#ffffff"
                                />
                            ) : (
                                <Circle
                                    x={pointsCircle2.x}
                                    y={pointsCircle2.y}
                                    radius={5}
                                    fill="#ffffff"
                                />
                            )}
                        </Layer>
                    )}
                    {isBlackBack === "black" ? (
                        <Layer>
                            {Tools.drawLineBlack(pointsLine3)}
                            <Circle
                                x={pointsCircle3.x}
                                y={pointsCircle3.y}
                                radius={5}
                                fill="#F61067"
                            />
                        </Layer>
                    ) : (
                        <Layer>
                            {Tools.drawLine(pointsLine3)}
                            {isForm ? (
                                <Circle
                                    x={pointsCircle3.x}
                                    y={pointsCircle3.y}
                                    radius={5}
                                    fill="#ffffff"
                                />
                            ) : (
                                <Circle
                                    x={pointsCircle3.x}
                                    y={pointsCircle3.y}
                                    radius={5}
                                    fill="#ffffff"
                                />
                            )}
                        </Layer>
                    )}
                </Stage>
            </DivHomeLineBoxSC>
            <DivWrapSC>
                <DivContainerSC>
                    <DivHomeContentSC>
                        <DivTextBoxtSC>
                            <DivTitleBoxtSC>
                                <TitleHomeBoxSC
                                    id="cyb-zen-title-home"
                                    isBlackBack={isBlackBack}
                                >
                                    CYBERZEN LABS
                                    {isBlackBack === "black" ? null : (
                                        <DivShadowBoxSC></DivShadowBoxSC>
                                    )}
                                </TitleHomeBoxSC>
                                <SloganBoxSC>The future is now</SloganBoxSC>
                            </DivTitleBoxtSC>
                            <DivDescBoxtSC>
                                <DescHomeBoxSC id="cyb-zen-desc-home" isBlackBack={isBlackBack}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                                    quam eu amet massa viverra.
                                </DescHomeBoxSC>
                            </DivDescBoxtSC>
                        </DivTextBoxtSC>{" "}
                        {/* {isBlackBack === "black" ? <GifBuddhaHomeSC /> : null} */}
                    </DivHomeContentSC>
                </DivContainerSC>
            </DivWrapSC>
        </>
    );

};

export default Home;