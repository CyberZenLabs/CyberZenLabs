import React, { useContext, useEffect ,useState} from "react";
import {
  DivWrapSC,
  DivContainerSC,
} from "../styled-components-css/styled-DEFAULT";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";
import {
  DivColumnsContentContacts,
  DivLeftPenalSC,
  DivRightPenalSC,
  DivBoxTextWriteToUsSC,
  DivTextWriteToUsSC,
  DivTextTelephoneSC,
  DivNumTelephoneSC,
  DivColumnsTelephoneSC,
  DivTextTelegramSC,
  DivNumTelegramSC,
  DivColumnsTelegramSC,
  DivColumnsemailSC,
  ImgBuddhaSC,
  DivDecLineSC,
  DivBoxBlurSC,
  DivRowsContentContacts,
  DivTopPenalSC,
  DivLineContactsSC
} from "../styled-components-css/styled-contacts";
import GlobalDispatchContext from "../global_dispatch_context";
const PointsLine1 = [
  [0, 150, 660, 150],
  [660, 150, 710, 190],
  [710, 190, 870, 190],
  [870, 190, 980, 290],
  [980, 290, 980, 394],
  [980, 394, 1000, 444],
];

const PointsLine2 = [
  [4000, 700, 1350, 700],
  [1350, 700, 1300, 650],
  [1300, 650, 1150, 650],
  [1150, 650, 1100, 600],
  [1100, 600, 1100, 550],
  [1100, 550, 1050, 500],
];
const Contacts = () => {


  
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage, isAboutBack,isForm } = state;
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
      type: "SET_IS_FORM",
      status: true,
    });
    return () => {
      dispatch({
        type: "SET_IS_FORM",
        status: false,
      });
    };
  }, [isForm]);
  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "homePage",
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
      } , true,1920, 900);
    const coordsLine2 = Tools.getResponseCoords(PointsLine2,{
        width:window.innerWidth,
        height:window.innerHeight
      } , true,1920, 900);

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
    // setPointsLine1(coords)
    // setPointsLine2(coordsLine2)
    
    let _coordsTemp = Tools.copy(coords)
    let _coordsTemp2 = Tools.copy(coordsLine2)
    if (window.innerWidth <= 650) {
      _coordsTemp[0][2] = _coordsTemp[0][2] - 50
      _coordsTemp[1][0] = _coordsTemp[1][0] - 50
      _coordsTemp[1][2] = _coordsTemp[1][2] - 50
      _coordsTemp[2][0] = _coordsTemp[2][0] - 50
      _coordsTemp[2][2] = _coordsTemp[2][2] - 50
      _coordsTemp[3][0] = _coordsTemp[3][0] - 50
      _coordsTemp[3][2] = _coordsTemp[3][2] - 30
      _coordsTemp[4][0] = _coordsTemp[4][0]  - 30
      _coordsTemp[4][2] = _coordsTemp[4][2]  - 30
      _coordsTemp[5][0] = _coordsTemp[5][0]  - 30
      _coordsTemp[5][2] = _coordsTemp[5][2]  - 10
      setPointsCircle1({
          x: coords[coords.length - 1][coords[coords.length - 1].length - 2] - 10,
          y: coords[coords.length - 1][coords[coords.length - 1].length - 1]
      })
      _coordsTemp2[0][2] = _coordsTemp2[0][2] + 50
      _coordsTemp2[1][0] = _coordsTemp2[1][0] + 50
      _coordsTemp2[1][2] = _coordsTemp2[1][2] + 50
      _coordsTemp2[2][0] = _coordsTemp2[2][0] + 50
      _coordsTemp2[2][2] = _coordsTemp2[2][2] + 40
      _coordsTemp2[3][0] = _coordsTemp2[3][0] + 40
      _coordsTemp2[3][2] = _coordsTemp2[3][2] + 10
      _coordsTemp2[4][0] = _coordsTemp2[4][0] + 10
      _coordsTemp2[4][2] = _coordsTemp2[4][2] + 10
      _coordsTemp2[5][0] = _coordsTemp2[5][0] + 10
      _coordsTemp2[5][2] = _coordsTemp2[5][2] - 10
      setPointsCircle2(
          {
              x: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 2] - 10,
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
          } , true,1920, 900);
        const _coordsLine2 = Tools.getResponseCoords(PointsLine2,{
            width:window.innerWidth,
            height:window.innerHeight
        } , true,1920, 900);
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
        if (event.target.innerWidth <= 650) {
          _coordsTemp1[0][2] = _coordsTemp1[0][2] - 50
          _coordsTemp1[1][0] = _coordsTemp1[1][0] - 50
          _coordsTemp1[1][2] = _coordsTemp1[1][2] - 50
          _coordsTemp1[2][0] = _coordsTemp1[2][0] - 50
          _coordsTemp1[2][2] = _coordsTemp1[2][2] - 50
          _coordsTemp1[3][0] = _coordsTemp1[3][0] - 50
          _coordsTemp1[3][2] = _coordsTemp1[3][2] - 30
          _coordsTemp1[4][0] = _coordsTemp1[4][0]  - 30
          _coordsTemp1[4][2] = _coordsTemp1[4][2]  - 30
          _coordsTemp1[5][0] = _coordsTemp1[5][0]  - 30
          _coordsTemp1[5][2] = _coordsTemp1[5][2]  - 10
            setPointsCircle1({
                x: coords[coords.length - 1][coords[coords.length - 1].length - 2] - 10,
                y: coords[coords.length - 1][coords[coords.length - 1].length - 1]
            })
            _coordsTemp22[0][2] = _coordsTemp22[0][2] + 50
      _coordsTemp22[1][0] = _coordsTemp22[1][0] + 50
      _coordsTemp22[1][2] = _coordsTemp22[1][2] + 50
      _coordsTemp22[2][0] = _coordsTemp22[2][0] + 50
      _coordsTemp22[2][2] = _coordsTemp22[2][2] + 40
      _coordsTemp22[3][0] = _coordsTemp22[3][0] + 40
      _coordsTemp22[3][2] = _coordsTemp22[3][2] + 10
      _coordsTemp22[4][0] = _coordsTemp22[4][0] + 10
      _coordsTemp22[4][2] = _coordsTemp22[4][2] + 10
      _coordsTemp22[5][0] = _coordsTemp22[5][0] + 10
      _coordsTemp22[5][2] = _coordsTemp22[5][2] - 10
            setPointsCircle2(
                {
                    x: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 2] - 10,
                    y: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 1]
                }
            )
        }
        console.log('>>><>>><>', coords, _coordsTemp)
        setPointsLine1(_coordsTemp)
        setPointsLine2(_coordsTemp2)

        if (event.target.innerWidth <= 650) {
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
 
  return (
   

    <>
      <DivLineContactsSC>
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
            </DivLineContactsSC>
    <DivWrapSC>
      <DivContainerSC>
        <DivRowsContentContacts>
          <DivLeftPenalSC>
            <DivBoxTextWriteToUsSC>
              <DivTextWriteToUsSC to="#">
                WRITE TO US
                <DivDecLineSC />
              </DivTextWriteToUsSC>
            </DivBoxTextWriteToUsSC>
            {/* <DivTopPenalSC>
              <DivBoxBlurSC></DivBoxBlurSC> 
            <ImgBuddhaSC /> 
            </DivTopPenalSC> */}

          </DivLeftPenalSC>
          <DivRightPenalSC>
            <DivColumnsTelephoneSC>
              <DivTextTelephoneSC>telephone:</DivTextTelephoneSC>
              <DivNumTelephoneSC>+1(775) 5020434</DivNumTelephoneSC>
            </DivColumnsTelephoneSC>

            <DivColumnsTelegramSC>
              <DivTextTelegramSC>telegram:</DivTextTelegramSC>
              <DivNumTelegramSC>@obscuradox</DivNumTelegramSC>
            </DivColumnsTelegramSC>

            <DivColumnsemailSC>
              <DivTextTelegramSC>e-mail:</DivTextTelegramSC>
              <DivNumTelegramSC>cyberzenlabs@gmail.com</DivNumTelegramSC>
            </DivColumnsemailSC>
          </DivRightPenalSC>
        </DivRowsContentContacts>

        <DivColumnsContentContacts>
          <DivLeftPenalSC>
            <DivBoxTextWriteToUsSC>
              <DivTextWriteToUsSC to="#">
                WRITE TO US
                <DivDecLineSC />
              </DivTextWriteToUsSC>
            </DivBoxTextWriteToUsSC>
            <DivColumnsTelephoneSC>
              <DivTextTelephoneSC>telephone:</DivTextTelephoneSC>
              <DivNumTelephoneSC>+1(775) 5020434</DivNumTelephoneSC>
            </DivColumnsTelephoneSC>

            <DivColumnsTelegramSC>
              <DivTextTelegramSC>telegram:</DivTextTelegramSC>
              <DivNumTelegramSC>@obscuradox</DivNumTelegramSC>
            </DivColumnsTelegramSC>

            <DivColumnsemailSC>
              <DivTextTelegramSC>e-mail:</DivTextTelegramSC>
              <DivNumTelegramSC>cyberzenlabs@gmail.com</DivNumTelegramSC>
            </DivColumnsemailSC>
          </DivLeftPenalSC>
          <DivRightPenalSC>
            {/* <DivBoxBlurSC></DivBoxBlurSC> */}
            {/* <ImgBuddhaSC></ImgBuddhaSC> */}
          </DivRightPenalSC>
        </DivColumnsContentContacts>
      </DivContainerSC>
    </DivWrapSC>
    </>
  );
};

export default Contacts;
