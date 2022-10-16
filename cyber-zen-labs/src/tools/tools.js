import { Line } from "react-konva";
import React from "react";

const Tools = {
  drawLine: (pointsLine) => {
    const componentNode = pointsLine.map((item, i) => {
      return (
        <Line
          key={`wqadfs${i}`}
          points={item}
          stroke="#ffffff"
          strokeWidth={1}
          tension={0.5}
          lineCap="square"
          lineJoin="bevel"
          bezier={false}
          shadowColor={"#A557E5"}
          shadowBlur={10}
          shadowOffset={{ x: 10, y: 10 }}
          shadowOpacity={1}
          // globalCompositeOperation={
          //     'source-over'
          // }
        />
      );
    });
    return componentNode;
  },
  drawLineBlack: (pointsLine) => {
    const componentNode = pointsLine.map((item, i) => {
      return (
        <Line
          key={`wqadfs${i}`}
          points={item}
          stroke="#F61067"
          strokeWidth={1}
          tension={0.5}
          lineCap="square"
          lineJoin="bevel"
          bezier={false}
          // globalCompositeOperation={
          //     'source-over'
          // }
        />
      );
    });
    return componentNode;
  },
  LineBlack: (pointsLine) => {
    const componentNode = pointsLine.map((item, i) => {
      return (
        <Line
          key={`wqadfs${i}`}
          points={item}
          stroke="black"
          strokeWidth={1}
          tension={0.5}
          lineCap="square"
          lineJoin="bevel"
          bezier={false}
          // globalCompositeOperation={
          //     'source-over'
          // }
        />
      );
    });
    return componentNode;
  },
};

export default Tools;
