import React, { useContext, useEffect } from "react";
import {
  DivWrapSC,
  DivContainerSC,
} from "../styled-components-css/styled-DEFAULT";

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
  );
};

export default Contacts;
