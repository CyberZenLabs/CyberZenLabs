import { useState, useContext, useEffect } from "react";
import {
  DivContainerAboutSC,
  DivWrapMenuSC,
  GridContentSC,
} from "../styled-components-css/styled-About";
import { SpanTextElementMenuSC } from "../styled-components-css/styled-menu";
import GlobalDispatchContext from "../global_dispatch_context";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";
const BurgerMenu = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage } = state;
  const PointsLine1 = [
    [0, 715, 360, 715],
    [360, 715, 385, 670],
    [385, 670, 600, 670],
    [600, 670, 660, 600],
    [660, 600, 660, 510],
    [660, 510, 690, 480],
  ];
  
  const PointsLine2 = [
    [1920, 980, 1650, 980],
    [1650, 980, 1610, 940],
    [1610, 940, 1360, 940],
    [1360, 940, 1290, 870],
    [1290, 870, 1290, 780],
    [1290, 780, 1260, 750],

  ];
  const PointsLine3 = [
    [1920, 285, 1550, 285],
    [1550, 285, 1520, 315],
    [1520, 315, 1275, 315],
    [1275, 315, 1225, 365],
    [1225, 365, 1225, 440],
    [1225, 440, 1200, 460],


  ];
  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "sound",
      });
    };
  }, [isPage]);
  return (
    <>
    <DivRuslanBoxSC>
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {Tools.drawLine(PointsLine1)}
        <Circle x={690} y={480} radius={5} fill="#ffffff" />
      </Layer>

      <Layer>
        {Tools.drawLine(PointsLine2)}
        <Circle x={1260} y={750} radius={5} fill="#ffffff" />
      </Layer>
      <Layer>
        {Tools.drawLine(PointsLine3)}
        <Circle x={1200} y={460} radius={5} fill="#ffffff" />
      </Layer>
    </Stage>
  </DivRuslanBoxSC>
    <DivWrapMenuSC>
      <DivContainerAboutSC>
        <GridContentSC>
          <SpanTextElementMenuSC to="/">HOME</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/services">SERVICES</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/about">ABOUT</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/contacts">CONTACTS</SpanTextElementMenuSC>
          <SpanTextElementMenuSC to="/projects">PROJECTS</SpanTextElementMenuSC>
        </GridContentSC>
      </DivContainerAboutSC>
    </DivWrapMenuSC>
    </>
  );
};

export default BurgerMenu;
