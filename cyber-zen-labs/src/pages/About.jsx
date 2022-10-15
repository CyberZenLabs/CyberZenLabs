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
  [0, 80, 760, 80],
  [760, 80, 810, 120],
  [810, 120, 1350, 120],
  [1350, 120, 1450, 200],
  [1450, 200, 1450, 304],
  [1450,304, 1500, 334],
];

const PointsLine2 = [
  [window.innerWidth, 750, 990, 750],
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
      status: "",
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
        <Stage width={window.innerWidth} height={window.innerHeight - 170}>
          <Layer>
            {Tools.drawLine(PointsLine1)}
            <Circle x={1500} y={334} radius={5} fill="#ffffff" />
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
