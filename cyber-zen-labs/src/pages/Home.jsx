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
  BuddhaHomeSC,
  DivHomeLineBoxSC,
  BuddhaBackHomeSC,
} from "../styled-components-css/styled.home";
import GlobalDispatchContext from "../global_dispatch_context";
import {
  DivKirdroBoxSC,
  DivRuslanBoxSC,
} from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../3dmodel/Buddha";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
var gradient = ctx.createConicGradient(2, 4, 3, 6);
gradient.addColorStop(2 / 6, "#D815FF");
gradient.addColorStop(4 / 6, "#09BBF9");

var gradient2 = ctx.createConicGradient(2, 4, 5, 2);
gradient2.addColorStop(2 / 6, "#D815FF");
gradient2.addColorStop(5 / 6, "#09BBF9");

var gradient3 = ctx.createConicGradient(3, 2, 2, 2);
gradient3.addColorStop(1 / 6, "#D815FF");
gradient3.addColorStop(5 / 6, "#09BBF9");

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
    let topPointCybZen;
    let leftPointCybZen;
    let lastPointX;

    if (boxId) {
      rect = document.getElementById(`${boxId}`).getBoundingClientRect();
      rightPointCybZen = rect.right;
      topPointCybZen = rect.top;
      leftPointCybZen = rect.left;
      console.log("rect", rect);
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
        } else if (innerWidth >= 480) {
          pointArr[0] = [
            0,
            topPointCybZen - 60,
            leftPointCybZen - 25,
            topPointCybZen - 60,
          ];
          pointArr[1] = [
            pointArr[0][2],
            pointArr[0][3],
            pointArr[0][2] + 35,
            pointArr[0][3] - 40,
          ];
          pointArr[2] = [
            pointArr[1][2],
            pointArr[1][3],
            pointArr[1][2] + 70,
            pointArr[1][3],
          ];
          pointArr[3] = [
            pointArr[2][2],
            pointArr[2][3],
            pointArr[2][2] + 30,
            pointArr[2][3] - 40,
          ];
          pointArr[4] = [pointArr[3][2], pointArr[3][3], 400, pointArr[3][3]];
          pointArr.pop();
        } else {
          pointArr[0] = [
            0,
            topPointCybZen - 60,
            leftPointCybZen,
            topPointCybZen - 60,
          ];
          pointArr[1] = [
            pointArr[0][2],
            pointArr[0][3],
            pointArr[0][2] + 35,
            pointArr[0][3] - 40,
          ];
          pointArr[2] = [
            pointArr[1][2],
            pointArr[1][3],
            pointArr[1][2] + 70,
            pointArr[1][3],
          ];
          pointArr[3] = [
            pointArr[2][2],
            pointArr[2][3],
            pointArr[2][2] + 30,
            pointArr[2][3] - 40,
          ];
          pointArr[4] = [
            pointArr[3][2],
            pointArr[3][3],
            rightPointCybZen - 40,
            pointArr[3][3],
          ];
          pointArr.pop();
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
      console.log("kekekekekekek");
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
            height: event.target.innerHeight ,
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
                fill={gradient}
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
                  fill={gradient2}
                />
              ) : (
                <Circle
                  x={pointsCircle2.x}
                  y={pointsCircle2.y}
                  radius={5}
                  fill={gradient2}
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
                  fill={gradient3}
                />
              ) : (
                <Circle
                  x={pointsCircle3.x}
                  y={pointsCircle3.y}
                  radius={5}
                  fill={gradient3}
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
                  A team of International Superstars Here to Assist In Building
                  the Highest Performing Enterprise Grade Blockchain and
                  Software Solutions
                </DescHomeBoxSC>
              </DivDescBoxtSC>
            </DivTextBoxtSC>{" "}
            <BuddhaHomeSC>
              {isBlackBack === "black" ? null : <BuddhaBackHomeSC />}

              <Canvas camera={{ position: [0, 1.5, 20], zoom: 1 }}>
                <hemisphereLight intensity={0.1} />
                {/* <spotLight
                  position={[10, 10, 10]}
                  angle={0.3}
                  penumbra={1}
                  intensity={2}
                  castShadow
                /> */}
                <Suspense fallback={null}>
                  <Model scale={0.55} />
                </Suspense>
              </Canvas>
            </BuddhaHomeSC>
          </DivHomeContentSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default Home;