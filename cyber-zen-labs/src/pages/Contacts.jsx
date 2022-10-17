import React, { useContext, useEffect } from "react";
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
  [0, 10, 660, 10],
  [660, 10, 710, 50],
  [710, 50, 870, 50],
  [870, 50, 980, 150],
  [980, 150, 980, 254],
  [980, 254, 1000, 294],
];

const PointsLine2 = [
  [window.innerWidth, 600, 1350, 600],
  [1350, 600, 1300, 550],
  [1300, 550, 1150, 550],
  [1150, 550, 1100, 500],
  [1100, 500, 1100, 450],
  [1100, 450, 1050, 400],
];
const Contacts = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isForm, isBlackBack,isPage } = state;

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
 
  return (
   

    <>
    <DivRuslanBoxSC>
        <Stage width={window.innerWidth} height={window.innerHeight - 320}>
          <Layer>
            {Tools.drawLine(PointsLine1)}
            <Circle x={1000} y={294} radius={5} fill="#ffffff" />
          </Layer>

          <Layer>
            {Tools.drawLine(PointsLine2)}
            <Circle x={1050} y={400} radius={5} fill="#ffffff" />
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
              <ImgBuddhaSC />
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
