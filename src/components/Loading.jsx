import React, { useEffect, useState, useRef, useContext } from "react";
import "../styles/git-button.css";
import { Stage, Layer, Circle } from "react-konva";
import Konva from "konva";
import GlobalDispatchContext from "../global_dispatch_context";

const Loading = ({ containerId }) => {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [circle, setCircle] = useState(null)
    const [outSideCircleArray, setOutSideCircleArray] = useState([
        210, 10, 5, 15, 20,
    ]);

    const outSideCircleRef = useRef();
    const inSideCircleRef = useRef();
    const { state, dispatch } = useContext(GlobalDispatchContext);
    const { isBlackBack, isPage } = state;

    useEffect(() => {
        let anim = null
        let period = 20;

        anim = new Konva.Animation(
            (frame) => {
                var turnRight = (frame.timeDiff * period) / 800;
                var leftRight = -(frame.timeDiff * period) / 1300;
                if (outSideCircleRef.current && inSideCircleRef.current) {
                    outSideCircleRef.current.rotate(turnRight);
                    inSideCircleRef.current.rotate(leftRight);
                }

            },
            outSideCircleRef.current.getLayer(),
            inSideCircleRef.current.getLayer()
        );
        anim.start();
        return () => {
            anim.stop();
            anim = null
        };

    }, [outSideCircleRef, inSideCircleRef]);

    useEffect(() => {
        var offsetHeight = document.getElementById(containerId).offsetHeight;
        var offsetWidth = document.getElementById(containerId).offsetWidth;

        setWidth(offsetWidth);
        setHeight(offsetHeight);
    }, [window.innerWidth]);

    //   var angularSpeed = 90;
    //   var anim = new Konva.Animation(function (frame) {
    //     var angleDiff = (frame.timeDiff * angularSpeed) / 1000;
    //     blueRect.rotate(angleDiff);
    //     yellowRect.rotate(angleDiff);
    //     redRect.rotate(angleDiff);
    //   }, layer);

    return (
        <>
            <Stage width={width} height={height}>
                <Layer>
                    <Circle
                        key={"circle-button-1"}
                        ref={outSideCircleRef}
                        x={width / 2}
                        y={height / 2}
                        radius={45}
                        stroke={isBlackBack === "black" ? "#f61067" : "#D516FF"}
                        dash={outSideCircleArray}
                        shadowColor={isBlackBack === "black" ? "#f61067" : "#D516FF"}
                        shadowBlur={5}
                    />
                    <Circle
                        key={"circle-button-2"}
                        ref={inSideCircleRef}
                        x={width / 2}
                        y={height / 2}
                        radius={30}
                        stroke={isBlackBack === "black" ? "#f61067" : "#D516FF"}
                        strokeWidth={5}
                        dash={[40, 10, 90, 20, 5, 10, 30]}
                        shadowColor={isBlackBack === "black" ? "#f61067" : "#D516FF"}
                        shadowBlur={5}
                    />
                </Layer>
            </Stage>
        </>
    );
};

export default Loading;
