import React, {useContext, useEffect, useState} from "react";
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
    const [size, setSize] = useState({
        width:window.outerWidth,
        height:window.outerHeight
    })

    const [pointsLine1, setPointsLine1] = useState(PointsLine1)
    const [pointsCircle1, setPointsCircle1] = useState({
        x:0,
        y:0
    })

    const [pointsLine2, setPointsLine2] = useState(PointsLine2)
    const [pointsCircle2, setPointsCircle2] = useState({
        x:0,
        y:0
    })
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

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

    useEffect(() => {
        processCoords()
    }, [])

    useEffect(() => {
        var offsetHeight = document.getElementById('about-line-id').offsetHeight;
        var offsetWidth = document.getElementById('about-line-id').offsetWidth;

        setWidth(offsetWidth);
        setHeight(offsetHeight);
    }, [window.innerWidth]);

    console.log('lol', width, height);
    const processCoords = () => {

        const coords = Tools.getResponseCoords(PointsLine1,{
            width:window.outerWidth,
            height:window.outerHeight
        });
        const coordsLine2 = Tools.getResponseCoords(PointsLine2,{
            width:window.outerWidth,
            height:window.outerHeight
        });

        setPointsCircle1({
            x: coords[coords.length - 1][coords[coords.length - 1].length - 2],
            y: coords[coords.length - 1][coords[coords.length - 1].length - 1]
        })
        setPointsCircle2(
            {
                x: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 2],
                y: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 1]
            }
        )
        setPointsLine1(coords)
        setPointsLine2(coordsLine2)

        window.addEventListener('resize', function(event) {
            const coords2 = Tools.getResponseCoords(PointsLine1, {
                width:event.target.outerWidth,
                height:event.target.outerHeight
            });
            const _coordsLine2 = Tools.getResponseCoords(PointsLine2,{
                width:window.outerWidth,
                height:window.outerHeight
            });
            setPointsCircle1({
                x: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2],
                y: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1]
            })
            setPointsCircle2(
                {
                    x: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 2],
                    y: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 1]
                }
            )
            setPointsLine1(coords2)
            setPointsLine2(_coordsLine2)
            // console.log('><><><><><>', event.target.outerWidth)
            setSize({
                width:event.target.outerWidth,
                height:event.target.outerHeight
            })
        }, true);
    }


    return (
        <>
            <DivRuslanBoxSC>
                <Stage width={width} height={height}>
                    <Layer>
                        {Tools.drawLine(pointsLine1)}
                        <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill="#ffffff" />
                    </Layer>

                    <Layer>
                        {Tools.drawLine(pointsLine2)}
                        <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill="#ffffff" />
                    </Layer>

                </Stage>
            </DivRuslanBoxSC>
            <DivWrapMenuSC id="about-line-id">
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
