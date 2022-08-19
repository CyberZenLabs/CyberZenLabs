import React from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
  DivBoxRowsLeftPenalSC,
  DivBoxRowsRightPenalSC,
  DivContainerPenalsSC,
  DivBoxTextSC,
  DivBoxBorderSC,
  DivBoxColumnsMoneySC,
  DivTextDescriptionSC,
  DivBoxBorder1SC,
  DivBoxColumnIconTextSC,
  DivBoxIconClipSC,
  DivTextAddAttachmentSC,
  ButtonGradientSC,
} from "../styled-components-css/styled-getInTouch";

const GetInTouch = () => {
  return (
    <DivWrapSC>
      <DivContainerSC>
        <DivContainerPenalsSC>
          <DivBoxRowsLeftPenalSC>
            <DivBoxTextSC>Your name</DivBoxTextSC>
            <DivBoxBorderSC type="text" />
            <DivBoxTextSC>Company name</DivBoxTextSC>
            <DivBoxBorderSC type="text" />
            <DivBoxTextSC>Email</DivBoxTextSC>
            <DivBoxBorderSC type="email" />
            <DivBoxTextSC>Phone</DivBoxTextSC>
            <DivBoxBorderSC type="text" />
            <DivBoxTextSC>Budget</DivBoxTextSC>
            <DivBoxColumnsMoneySC>
              <label className="label">
                <input type="radio" className="radio" name="name1" />
                <span className="fake"></span>
                <span className="text1">$ 10K - $ 25K</span>
              </label>
              <label className="label">
                <input type="radio" className="radio" name="name1" />
                <span className="fake"></span>
                <span className="text">$ 50K - $ 100K</span>
              </label>
              <label className="label">
                <input type="radio" className="radio" name="name1" />
                <span className="fake"></span>
                <span className="text1">$ 25K - $ 50K</span>
              </label>
              <label className="label">
                <input type="radio" className="radio" name="name1" />
                <span className="fake"></span>
                <span className="text">$ 100K or more</span>
              </label>
            </DivBoxColumnsMoneySC>
          </DivBoxRowsLeftPenalSC>
          <DivBoxRowsRightPenalSC>
            <DivTextDescriptionSC>
              Tell us about your project or give a link to the description
            </DivTextDescriptionSC>
            <DivBoxBorder1SC type="text" />
            <DivBoxColumnIconTextSC>
              <DivBoxIconClipSC />
              <DivTextAddAttachmentSC>Add attachment</DivTextAddAttachmentSC>
            </DivBoxColumnIconTextSC>
            <DivBoxBorder1SC type="text" />
            <ButtonGradientSC to={"#"}>send</ButtonGradientSC>
          </DivBoxRowsRightPenalSC>
        </DivContainerPenalsSC>
      </DivContainerSC>
    </DivWrapSC>
  );
};

export default GetInTouch;
