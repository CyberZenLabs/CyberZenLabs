import React from "react";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";

const PointsLine1 = [
  [1900, 250, 1050, 250],
  [980, 200, 1050, 250],
  [550, 200, 980, 200],
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

const RuslanDev2 = () => {
  return (
    <DivRuslanBoxSC>
      <Stage width={window.innerWidth} height={window.innerHeight - 20}>
        <Layer>
          {Tools.drowLine(PointsLine1)}
          <Circle x={1500} y={264} radius={5} fill="#ffffff" />
        </Layer>

        <Layer>
          {Tools.drowLine(PointsLine2)}
          <Circle x={330} y={496} radius={5} fill="#ffffff" />
        </Layer>
      </Stage>
    </DivRuslanBoxSC>
  );
};

export default RuslanDev2;
