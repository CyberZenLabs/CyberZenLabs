import React, { useContext, useEffect } from "react";
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
  [950, 190, 1030, 270],
  [1030, 270, 1030, 374],
  [1030, 374, 1060, 404],
];

const PointsLine2 = [
  [0, 680, 550, 680],
  [550, 680, 590, 640],
  [590, 640, 880, 640],
  [880, 640, 920, 600],
  [920, 600, 920, 520],
  [920, 520, 950, 490],
];
const Home = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isPage, isBlackBack, isForm } = state;

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
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "homePage",
      });
    };
  }, [isPage]);

  return (
    <>
      <DivKirdroBoxSC>
        <Stage width={window.innerWidth} height={window.innerHeight - 20}>
          {isBlackBack === "black" ? (
            <Layer>
              {Tools.drawLineBlack(PointsLine1)}
              <Circle x={1060} y={404} radius={5} fill="#F61067" />
            </Layer>
          ) : (
            <Layer>
              {Tools.drawLine(PointsLine1)}
              {isForm ? (
                <Circle x={1060} y={404} radius={5} fill="#ffffff" />
              ) : (
                <Circle x={1060} y={404} radius={5} fill="#ffffff" />
              )}
            </Layer>
          )}
          {isBlackBack === "black" ? (
            <Layer>
              {Tools.LineBlack(PointsLine2)}
              <Circle x={950} y={490} radius={5} fill="black" />
            </Layer>
          ) : (
            <Layer>
              {Tools.drawLine(PointsLine2)}
              {isForm ? (
                <Circle x={950} y={490} radius={5} fill="#ffffff" />
              ) : (
                <Circle x={950} y={490} radius={5} fill="#ffffff" />
              )}
            </Layer>
          )}
        </Stage>
      </DivKirdroBoxSC>
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
            </DivTextBoxtSC>
          </DivHomeContentSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default Home;
