import React, { useContext, useEffect } from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
  GrifContentSC,
  H1TitleSC,
  DivTextContentSC,
  GridTextSC,
  H1TitleColumnsSC,
  H1TitleTextSC,
  DivBodyTextSC,
} from "../styled-components-css/styled-404";
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
const Page_404 = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isPage } = state;

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "none",
      });
    };
  }, [isPage]);

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
      <DivWrapSC>
        <DivContainerSC>
          <GrifContentSC>
            <GridTextSC>
              <DivTextContentSC>
                <H1TitleColumnsSC>
                  <H1TitleSC>404</H1TitleSC>
                  <H1TitleTextSC>Not Found</H1TitleTextSC>
                </H1TitleColumnsSC>
                <DivBodyTextSC>
                  The requested URL was not found on this server. That's all we
                  know
                </DivBodyTextSC>
              </DivTextContentSC>
            </GridTextSC>
          </GrifContentSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default Page_404;
