import React, { useContext, useEffect,useState } from "react";
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
const Page_404 = () => {
  
 
  
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
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "none",
      });
    };
  }, [isPage]);
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

    console.log('>>><><>>>>><><>', pointsLine2)
    const coords = Tools.getResponseCoords(PointsLine1,{
        width:window.innerWidth,
        height:window.innerHeight
    });
    const coordsLine2 = Tools.getResponseCoords(PointsLine2,{
        width:window.innerWidth,
        height:window.innerHeight
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
        // console.log('>>><><>>>>><><>', event.target.innerHeight, event.target.outerHeight)
        const coords2 = Tools.getResponseCoords(PointsLine1, {
            width:event.target.innerWidth,
            height:event.target.innerHeight
        });
        const _coordsLine2 = Tools.getResponseCoords(PointsLine2,{
            width:window.innerWidth,
            height:window.innerHeight
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
            width:event.target.innerWidth,
            height:event.target.innerHeight
        })
    }, true);
}
  return (
    <>
        <DivRuslanBoxSC>
                <Stage width={size.width} height={size.height}>
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
