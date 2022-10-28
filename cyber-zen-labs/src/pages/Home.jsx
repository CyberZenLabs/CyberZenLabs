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
    processCoords()
  }, []);

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "homePage",
      });
    };
  }, [isPage]);

  const processCoords = () => {
    const coords = Tools.getResponseCoords(PointsLine1, {
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const coordsLine2 = Tools.getResponseCoords(PointsLine2, {
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const coordsLine3 = Tools.getResponseCoords(PointsLine3, {
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setPointsCircle1({
      x: coords[coords.length - 1][coords[coords.length - 1].length - 2],
      y: coords[coords.length - 1][coords[coords.length - 1].length - 1],
    });

    setPointsCircle2({
      x: coordsLine2[coordsLine2.length - 1][
        coordsLine2[coordsLine2.length - 1].length - 2
      ],
      y: coordsLine2[coordsLine2.length - 1][
        coordsLine2[coordsLine2.length - 1].length - 1
      ],
    });

    setPointsCircle3({
      x: coordsLine3[coordsLine3.length - 1][
        coordsLine3[coordsLine3.length - 1].length - 2
      ],
      y: coordsLine3[coordsLine3.length - 1][
        coordsLine3[coordsLine3.length - 1].length - 1
      ],
    });
    setPointsLine1(coords);
    setPointsLine2(coordsLine2);
    setPointsLine3(coordsLine3);

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
        setPointsCircle1({
          x: coords2[coords2.length - 1][
            coords2[coords2.length - 1].length - 2
          ],
          y: coords2[coords2.length - 1][
            coords2[coords2.length - 1].length - 1
          ],
        });

        setPointsCircle2({
          x: _coordsLine2[_coordsLine2.length - 1][
            _coordsLine2[_coordsLine2.length - 1].length - 2
          ],
          y: _coordsLine2[_coordsLine2.length - 1][
            _coordsLine2[_coordsLine2.length - 1].length - 1
          ],
        });

        setPointsCircle3({
          x: _coordsLine3[_coordsLine3.length - 1][
            _coordsLine3[_coordsLine3.length - 1].length - 2
          ],
          y: _coordsLine3[_coordsLine3.length - 1][
            _coordsLine3[_coordsLine3.length - 1].length - 1
          ],
        });

        setPointsLine1(coords2);
        setPointsLine2(_coordsLine2);
        setPointsLine3(_coordsLine3);
        // console.log('><><><><><>', event.target.outerWidth)
        setSize({
          width: event.target.innerWidth,
          height: event.target.innerHeight,
        });
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
              <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill="#F61067" />
            </Layer>
          ) : (
            <Layer>
              {Tools.drawLine(pointsLine1)}
              {isForm ? (
                <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill="#ffffff" />
              ) : (
                <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill="#ffffff" />
              )}
            </Layer>
          )}
          {isBlackBack === "black" ? (
            <Layer>
              {Tools.LineBlack(pointsLine2)}
              <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill="black" />
            </Layer>
          ) : (
            <Layer>
              {Tools.drawLine(pointsLine2)}
              {isForm ? (
                <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill="#ffffff" />
              ) : (
                <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill="#ffffff" />
              )}
            </Layer>
          )}
          {isBlackBack === "black" ? (
            <Layer>
              {Tools.drawLineBlack(pointsLine3)}
              <Circle x={pointsCircle3.x} y={pointsCircle3.y} radius={5} fill="#F61067" />
            </Layer>
          ) : (
            <Layer>
              {Tools.drawLine(pointsLine3)}
              {isForm ? (
                <Circle x={pointsCircle3.x} y={pointsCircle3.y} radius={5} fill="#ffffff" />
              ) : (
                <Circle x={pointsCircle3.x} y={pointsCircle3.y} radius={5} fill="#ffffff" />
              )}
            </Layer>
          )}
        </Stage>
      </DivHomeLineBoxSC>
      <DivWrapSC>
        <DivContainerSC>
          <DivHomeContentRowsSC>
            <DivTextBoxtSC>
              <TitleHomeBoxSC isBlackBack={isBlackBack}>
                CYBERZEN LABS
                {isBlackBack === "black" ? null : (
                  <DivShadowBoxSC></DivShadowBoxSC>
                )}
              </TitleHomeBoxSC>
            </DivTextBoxtSC>
            <DescHomeBoxColumnsSC>
              <DivDescBoxtSC>
                <SloganBoxSC>The future is now</SloganBoxSC>
                <DescHomeBoxSC isBlackBack={isBlackBack}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  quam eu amet massa viverra.
                </DescHomeBoxSC>
              </DivDescBoxtSC>
            </DescHomeBoxColumnsSC>
          </DivHomeContentRowsSC>

          <DivHomeContentSC>
            <DivTextBoxtSC>
              <DivTitleBoxtSC>
                <TitleHomeBoxSC isBlackBack={isBlackBack}>
                  CYBERZEN LABS
                  {isBlackBack === "black" ? null : (
                    <DivShadowBoxSC></DivShadowBoxSC>
                  )}
                </TitleHomeBoxSC>
                <SloganBoxSC>The future is now</SloganBoxSC>
              </DivTitleBoxtSC>
              <DivDescBoxtSC>
                <DescHomeBoxSC isBlackBack={isBlackBack}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  quam eu amet massa viverra.
                </DescHomeBoxSC>
              </DivDescBoxtSC>
            </DivTextBoxtSC>{" "}
            {isBlackBack === "black" ? <GifBuddhaHomeSC /> : null}
          </DivHomeContentSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default Home;
