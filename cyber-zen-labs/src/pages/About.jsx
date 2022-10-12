import React, { useContext, useEffect } from "react";
import {
  DivContainerAboutSC,
  DivWrapMenuSC,
  GridContentSC,
  SpanTextElementSC,
} from "../styled-components-css/styled-About";
import GlobalDispatchContext from "../global_dispatch_context";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";

const PointsLine1 = [
  [10, 10, 760, 10],
  [760, 10, 810, 50],
  [810, 50, 1350, 50],
  [1350, 50, 1450, 130],
  [1450, 130, 1450, 234],
  [1450, 234, 1500, 264],
];

const PointsLine2 = [
  [1905, 750, 990, 750],
  [990, 750, 930, 710],
  [930, 710, 500, 710],
  [500, 710, 370, 630],
  [370, 630, 370, 526],
  [370, 526, 330, 496],
];

const About = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage, isAboutBack } = state;

  useEffect(() => {
    dispatch({
      type: "SET_IS_PAGE",
      status: "sound",
    });
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "home",
      });
    };
  }, [isPage]);

  useEffect(() => {
    dispatch({
      type: "SET_IS_ABOUT_BACK",
      status: "purple",
    });
    return () => {
      dispatch({
        type: "SET_IS_ABOUT_BACK",
        status: "",
      });
    };
  }, [isAboutBack]);
  return (
    <>
      <DivRuslanBoxSC>
        <Stage width={window.innerWidth} height={window.innerHeight - 320}>
          <Layer>
            {Tools.drawLine(PointsLine1)}
            <Circle x={1500} y={264} radius={5} fill="#ffffff" />
          </Layer>

          <Layer>
            {Tools.drawLine(PointsLine2)}
            <Circle x={330} y={496} radius={5} fill="#ffffff" />
          </Layer>
        </Stage>
      </DivRuslanBoxSC>
      <DivWrapMenuSC>
        <DivContainerAboutSC>
          <GridContentSC>
            <SpanTextElementSC to="/">Home</SpanTextElementSC>
            <SpanTextElementSC to="/team">Team</SpanTextElementSC>
            <SpanTextElementSC to="/AboutDev">Development</SpanTextElementSC>
          </GridContentSC>
        </DivContainerAboutSC>
      </DivWrapMenuSC>
    </>
  );
};

export default About;
