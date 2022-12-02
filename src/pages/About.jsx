import React, {useContext, useEffect, useState,useLayoutEffect} from "react";
import {
    DivContainerAboutSC,
    DivWrapMenuSC,
    GridContentSC,
    SpanTextElementSC,
    DivLineAboutSC,
} from "../styled-components-css/styled-About";
import GlobalDispatchContext from "../global_dispatch_context";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";
import useSound from 'use-sound';
import Sfx from '../audio/footerEfx.wav';
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');


var gradient = ctx.createConicGradient(2, 4, 3, 6);
gradient.addColorStop(2 / 6, '#D815FF');
gradient.addColorStop(4 / 6, '#09BBF9');

var gradient2 = ctx.createConicGradient(2, 4, 5, 2);
gradient2.addColorStop(2 / 6, '#D815FF');
gradient2.addColorStop(5 / 6, '#09BBF9');

const PointsLine1 = [
    [0, 160, 760, 160],
    [760, 160, 810, 200],
    [810, 200, 1350, 200],
    [1350, 200, 1450, 280],
    [1450, 280, 1450, 384],
    [1450,384, 1500, 414],
];

const PointsLine2 = [
    [4000, 750, 1130, 750],
    [1130, 750, 1070, 710],
    [1070, 710, 500, 710],
    [500, 710, 370, 630],
    [370, 630, 370, 526],
    [370, 526, 330, 496],
];

const PointsLine11 = [
    [0, 160, 760, 160],
    [760, 160, 810, 200],
    [810, 200, 1350, 200],
    [1350, 200, 1450, 280],
    [1450, 280, 1450, 384],
    [1450,384, 1500, 414],
];

const PointsLine22 = [
    [4000, 750, 1130, 750],
    [1130, 750, 1070, 710],
    [1070, 710, 500, 710],
    [500, 710, 370, 630],
    [370, 630, 370, 526],
    [370, 526, 330, 496],
];




const About = () => {
    const { state, dispatch } = useContext(GlobalDispatchContext);
    const { isBlackBack, isPage, isAboutBack } = state;
    const [size, setSize] = useState({
        width:window.innerWidth,
        height:window.innerHeight
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
   

    const processCoords = () => {
        
        
        const coords = Tools.getResponseCoords(PointsLine1,{
            width:window.innerWidth,
            height:window.innerHeight
        },
            true,1920, 900);
        const coordsLine2 = Tools.getResponseCoords(PointsLine2,{
            width:window.innerWidth,
            height:window.innerHeight
        },
        true,1920, 900);

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

        let _coordsTemp = Tools.copy(coords)
        let _coordsTemp2 = Tools.copy(coordsLine2)
        if (window.innerWidth <= 400) {
            _coordsTemp[1][2] = _coordsTemp[1][2] + 10
            _coordsTemp[2][0] = _coordsTemp[2][0] + 10
            _coordsTemp[3][2] = _coordsTemp[3][2] + 20
            _coordsTemp[4][0] = _coordsTemp[4][0] + 20
            _coordsTemp[4][2] = _coordsTemp[4][2] + 20
            _coordsTemp[5][0] = _coordsTemp[5][0] + 20
            _coordsTemp[5][2] = _coordsTemp[5][2] + 27
            setPointsCircle1({
                x: coords[coords.length - 1][coords[coords.length - 1].length - 2] + 27,
                y: coords[coords.length - 1][coords[coords.length - 1].length - 1]
            })
            _coordsTemp2[1][2] = _coordsTemp2[1][2] - 10
            _coordsTemp2[2][0] = _coordsTemp2[2][0] - 10
            _coordsTemp2[3][2] = _coordsTemp2[3][2] - 20
            _coordsTemp2[4][0] = _coordsTemp2[4][0] - 20
            _coordsTemp2[4][2] = _coordsTemp2[4][2] - 20
            _coordsTemp2[5][0] = _coordsTemp2[5][0] - 20
            _coordsTemp2[5][2] = _coordsTemp2[5][2] - 27
            setPointsCircle2(
                {
                    x: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 2] - 27,
                    y: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 1]
                }
            )
        }
        console.log('>>><>>><>', coords, _coordsTemp)
        setPointsLine1(_coordsTemp)
        setPointsLine2(_coordsTemp2)

        window.addEventListener('resize', function(event) {
           
            // console.log('>>><><>>>>><><>', event.target.innerHeight, event.target.outerHeight)
            const coords2 = Tools.getResponseCoords(PointsLine1, {
                width:event.target.innerWidth,
                height:event.target.innerHeight
            },
                true,1920, 900);
            const _coordsLine2 = Tools.getResponseCoords(PointsLine2,{
                width:window.innerWidth,
                height:window.innerHeight
            },
                true,1920, 900);
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

            let _coordsTemp1 = Tools.copy(coords2)
            let _coordsTemp22 = Tools.copy(_coordsLine2)
            if (event.target.innerWidth <= 400) {
                _coordsTemp1[1][2] = _coordsTemp1[1][2] + 10
                _coordsTemp1[2][0] = _coordsTemp1[2][0] + 10
                _coordsTemp1[3][2] = _coordsTemp1[3][2] + 20
                _coordsTemp1[4][0] = _coordsTemp1[4][0] + 20
                _coordsTemp1[4][2] = _coordsTemp1[4][2] + 20
                _coordsTemp1[5][0] = _coordsTemp1[5][0] + 20
                _coordsTemp1[5][2] = _coordsTemp1[5][2] + 27
                setPointsCircle1({
                    x: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2] + 27,
                    y: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1]
                })
                _coordsTemp22[1][2] = _coordsTemp22[1][2] - 10
                _coordsTemp22[2][0] = _coordsTemp22[2][0] - 10
                _coordsTemp22[3][2] = _coordsTemp22[3][2] - 20
                _coordsTemp22[4][0] = _coordsTemp22[4][0] - 20
                _coordsTemp22[4][2] = _coordsTemp22[4][2] - 20
                _coordsTemp22[5][0] = _coordsTemp22[5][0] - 20
                _coordsTemp22[5][2] = _coordsTemp22[5][2] - 27
                setPointsCircle2(
                    {
                        x: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 2] - 27,
                        y: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 1]
                    }
                )
            }
            console.log('>>><>>><>', coords, _coordsTemp)
            setPointsLine1(_coordsTemp)
            setPointsLine2(_coordsTemp2)

            if (event.target.innerWidth <= 400) {
                coords2[1][1] = coords2[1][1] + 10
                coords2[2][0] = coords2[2][0] + 10
            }
            setPointsLine1(_coordsTemp1)
            setPointsLine2(_coordsTemp22)
            // console.log('><><><><><>', event.target.outerWidth)
            setSize({
                width:event.target.innerWidth,
                height:event.target.innerHeight
            })
        }, true);
    }

    const [play] = useSound(Sfx, {volume:0.1});
    return (
        <>
        
          <DivLineAboutSC   >
          <Stage width={size.width} height={size.height}>
              <Layer>
                  {Tools.drawLine(pointsLine1)}
                  <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill={gradient} />
              </Layer>

              <Layer>
                  {Tools.drawLine(pointsLine2)}
                  <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill={gradient2} />
              </Layer>

          </Stage>
      </DivLineAboutSC>
     
     
           
            <DivWrapMenuSC  >
                <DivContainerAboutSC id="about-line">
                    <GridContentSC>
                        <SpanTextElementSC to="/" onMouseEnter={play}>Home</SpanTextElementSC>
                        <SpanTextElementSC to="/team" onMouseEnter={play}>Team</SpanTextElementSC>
                        <SpanTextElementSC to="/AboutDev" onMouseEnter={play}>Development</SpanTextElementSC>
                    </GridContentSC>
                </DivContainerAboutSC>
            </DivWrapMenuSC>
        </>
    );
};

export default About;
