import React, { useEffect, useState } from "react";
import "../styles/git-button.css";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";
import Konva from "konva";
import { DivGitContainerSC } from "../styled-components-css/styled-git-button";

const GetInTouchButton = () => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    var offsetHeight = document.getElementById("gitButton").offsetHeight;
    var offsetWidth = document.getElementById("gitButton").offsetWidth;
    // console.log("ffff", offsetHeight, offsetWidth);
    setWidth(offsetWidth);
    setHeight(offsetHeight);
  }, [window.innerWidth]);

  return (
    <>
      <DivGitContainerSC id="gitButton">
        <Stage width={width} height={height}>
          <Layer>
            <Circle x={width / 2} y={width / 2} radius={50} fill="green" />
          </Layer>
        </Stage>
      </DivGitContainerSC>
      {/* <div className='container-git'>
            <div className='outer-circle'></div>
        </div> */}
    </>
  );
};

export default GetInTouchButton;
