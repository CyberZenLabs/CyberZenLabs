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
        <DivRowsContentContacts>
          <DivLeftPenalSC>
            <DivBoxTextWriteToUsSC>
              <DivTextWriteToUsSC to="#">
                WRITE TO US
                <DivDecLineSC />
              </DivTextWriteToUsSC>
            </DivBoxTextWriteToUsSC>
            <DivTopPenalSC>
              {/* <DivBoxBlurSC></DivBoxBlurSC> */}
             {/* <ImgBuddhaSC /> */}
            </DivTopPenalSC>
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
