import React from "react";
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
} from "../styled-components-css/styled-contacts";

const Contacts = () => {
  return (
    <DivWrapSC>
      <DivContainerSC>
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
            <DivBoxBlurSC></DivBoxBlurSC>
            <ImgBuddhaSC src="/default-images/buddha.png" />
          </DivRightPenalSC>
        </DivColumnsContentContacts>
      </DivContainerSC>
    </DivWrapSC>
  );
};

export default Contacts;