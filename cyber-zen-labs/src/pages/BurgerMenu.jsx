import { useState, useContext, useEffect } from "react";
import {
  DivContainerAboutSC,
  DivWrapMenuSC,
  GridContentSC,
  DivLineBurgerMenuSC,
  
} from "../styled-components-css/styled-About";
import { SpanTextElementMenuSC } from "../styled-components-css/styled-menu";
import GlobalDispatchContext from "../global_dispatch_context";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";

const PointsLine1 = [
  [0, 580, 360, 580],
  [361, 580, 406, 535],
  [407, 535, 620, 535],
  [621, 535, 661, 495],
  [661, 494, 661, 425],
  [661, 424, 691, 394],
];

const PointsLine2 = [
  [1920, 845, 1650, 845],
  [1650, 845, 1610, 805],
  [1610, 805, 1360, 805],
  [1360, 805, 1290, 735],
  [1290, 735, 1290, 645],
  [1290, 645, 1260, 615],

];
const PointsLine3 = [
  [1920, 195, 1550, 195],
  [1550, 195, 1520, 225],
  [1520, 225, 1275, 225],
  [1275, 225, 1225, 275],
  [1225, 275, 1225, 350],
  [1225, 350, 1200, 370],
];

const BurgerMenu = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage } = state;
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
const [pointsLine3, setPointsLine3] = useState(PointsLine3)
const [pointsCircle3, setPointsCircle3] = useState({
    x:0,
    y:0
})
const [width, setWidth] = useState(null);
const [height, setHeight] = useState(null);
  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "sound",
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
  }, true,1920, 900);
  const coordsLine2 = Tools.getResponseCoords(PointsLine2,{
      width:window.innerWidth,
      height:window.innerHeight
  }, true,1920, 900);
  const coordsLine3 = Tools.getResponseCoords(PointsLine3,{
    width:window.innerWidth,
    height:window.innerHeight
}, true,1920, 900);
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
  setPointsCircle3(
    {
        x: coordsLine3[coordsLine3.length - 1][coordsLine3[coordsLine3.length - 1].length - 2],
        y: coordsLine3[coordsLine3.length - 1][coordsLine3[coordsLine3.length - 1].length - 1]
    }
)

let _coordsTemp = Tools.copy(coords)
let _coordsTemp2 = Tools.copy(coordsLine2)
let _coordsTemp3 = Tools.copy(coordsLine3)

if (window.innerWidth < 1550) {
  _coordsTemp[0][2] = _coordsTemp[0][2] - 100
  _coordsTemp[1][2] = _coordsTemp[1][2] - 100
  _coordsTemp[1][0] = _coordsTemp[1][0] - 100
  _coordsTemp[2][0] = _coordsTemp[2][0] - 50
  _coordsTemp[2][2] = _coordsTemp[2][2] - 50
}
setPointsLine1(_coordsTemp)
  setPointsLine2(_coordsTemp2)
  setPointsLine3(_coordsTemp3)

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
      const _coordsLine3 = Tools.getResponseCoords(PointsLine3,{
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
      setPointsCircle3(
        {
            x: _coordsLine3[_coordsLine3.length - 1][_coordsLine3[_coordsLine3.length - 1].length - 2],
            y: _coordsLine3[_coordsLine3.length - 1][_coordsLine3[_coordsLine3.length - 1].length - 1]
        }
    )
    if (window.innerWidth < 1550) {
      coords2[0][2] = coords2[0][2] - 100
      coords2[1][2] = coords2[1][2] - 100
      coords2[1][0] = coords2[1][0] - 100
      coords2[2][0] = coords2[2][0] - 50
      coords2[2][2] = coords2[2][2] - 50
}
    
      setPointsLine1(coords2)
      setPointsLine2(_coordsLine2)
      setPointsLine3(_coordsLine3)

      // console.log('><><><><><>', event.target.outerWidth)
      setSize({
          width:event.target.innerWidth,
          height:event.target.innerHeight
      })
  }, true);
}



  return (
    <>
    <DivLineBurgerMenuSC>
    <Stage width={size.width} height={size.height}>
      <Layer>
        {Tools.drawLine(pointsLine1)}
        <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill="#ffffff" />
      </Layer>

      <Layer>
        {Tools.drawLine(pointsLine2)}
        <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill="#ffffff" />
      </Layer>
      <Layer>
        {Tools.drawLine(pointsLine3)}
        <Circle x={pointsCircle3.x} y={pointsCircle3.y} radius={5} fill="#ffffff" />
      </Layer>
    </Stage>
  </DivLineBurgerMenuSC>
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
