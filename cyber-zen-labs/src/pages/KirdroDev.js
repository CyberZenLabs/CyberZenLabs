import React from "react";
import {
  DivKirdroBoxSC,
  DivRuslanBoxSC,
} from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";

const PointsLine1 = [
  [10, 10, 500, 10],
  [500, 10, 540, 50],
  [540, 50, 800, 50],
  [800, 50, 880, 130],
  [880, 130, 880, 234],
  [880, 234, 910, 264],
];

const PointsLine2 = [
  [10, 600, 400, 600],
  [400, 600, 440, 560],
  [440, 560, 660, 560],
  [660, 560, 740, 480],
  [740, 480, 740, 376],
  [740, 376, 770, 346],
];

const KirdroDev = () => {
  return (
    <DivKirdroBoxSC>
      <Stage width={window.innerWidth} height={window.innerHeight - 20}>
        <Layer>
          {Tools.drawLine(PointsLine1)}
          <Circle x={910} y={264} radius={5} fill="#ffffff" />
        </Layer>


                <Layer >
                    {
                        Tools.drawLine(PointsLine2)
                    }
                    <Circle x={770} y={346} radius={5} fill="#ffffff" />
                </Layer>
            </Stage>
        </DivKirdroBoxSC>
    );

};

export default KirdroDev;
