import React, { useContext, useEffect } from "react";
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
  DivBoxColumnIconTextSC,
  DivBoxIconClipSC,
  DivTextAddAttachmentSC,
  ButtonGradientSC,
  SpanBudgetSC,
  DivBoxBorderBigInputSC,
  DivBoxBorder2SC,
  DivContainerPenals2SC,
} from "../styled-components-css/styled-getInTouch";
import GlobalDispatchContext from "../global_dispatch_context";
import { Form, Formik } from "formik";
import { registerSchema } from "../validations/validation.signup";

const GetInTouch = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage, isAboutBack, isForm } = state;

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

  const startingValues = {
    firstName: "",
    companyName: "",
    email: "",
    phone: "",
  };

  return (
    <DivWrapSC>
      <DivContainerSC>
        <form
          action="https://formsubmit.co/moroz2002ilya@gmail.com"
          method="POST"
          enctype="multipart/form-data"
        >
          <DivContainerPenals2SC>
            <DivBoxTextSC>Your name</DivBoxTextSC>
            <DivBoxBorderSC label="firstName" type="text" name="firstName" />
            <DivBoxTextSC>Company name</DivBoxTextSC>
            <DivBoxBorderSC
              label="companyName"
              type="text"
              name="companyName"
            />
            <DivBoxTextSC>Email</DivBoxTextSC>
            <DivBoxBorderSC label="email" type="email" name="email" />
            <DivBoxTextSC>Phone</DivBoxTextSC>
            <DivBoxBorderSC label="phone" type="text" name="phone" />
            <DivBoxColumnIconTextSC>
              <DivBoxIconClipSC />
              <DivBoxTextSC>Add attachment</DivBoxTextSC>
            </DivBoxColumnIconTextSC>
            <DivBoxBorder2SC type="text" />
            <DivTextDescriptionSC>
              Tell us about your project or give a link to the description
            </DivTextDescriptionSC>
            <DivBoxBorderSC type="text" />
            <DivBoxTextSC>Budget</DivBoxTextSC>
            <DivBoxColumnsMoneySC>
              <label className="label">
                <input type="radio" className="radio" name="price-10-25" value={'price-10-25k'}/>
                <span className="fake"></span>
                <SpanBudgetSC className="text1">$ 10K - $ 25K</SpanBudgetSC>
              </label>
              <label className="label">
                <input type="radio" className="radio" name="price-50-100" value={'price-50-100k'}/>
                <span className="fake"></span>
                <SpanBudgetSC className="text">$ 50K - $ 100K</SpanBudgetSC>
              </label>
              <label className="label">
                <input type="radio" className="radio" name="price-25-50" value={'price-25-50k'}/>
                <span className="fake"></span>
                <SpanBudgetSC className="text1">$ 25K - $ 50K</SpanBudgetSC>
              </label>
              <label className="label">
                <input
                  type="radio"
                  className="radio"
                  name="price-100-or-more"
                  value={'price-100k-or-more'}
                />
                <span className="fake"></span>
                <SpanBudgetSC className="text">$ 100K or more</SpanBudgetSC>
              </label>
            </DivBoxColumnsMoneySC>
            <ButtonGradientSC type="submit">
              send
            </ButtonGradientSC>
          </DivContainerPenals2SC>

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
                  <input type="radio" className="radio" name="price-10-25" value={'price-10-25k'}/>
                  <span className="fake"></span>
                  <SpanBudgetSC className="text1">$ 10K - $ 25K</SpanBudgetSC>
                </label>
                <label className="label">
                  <input type="radio" className="radio" name="price-50-100" value={'price-50-100k'}/>
                  <span className="fake"></span>
                  <SpanBudgetSC className="text">$ 50K - $ 100K</SpanBudgetSC>
                </label>
                <label className="label">
                  <input type="radio" className="radio" name="price-25-50" value={'price-25-50k'}/>
                  <span className="fake"></span>
                  <SpanBudgetSC className="text1">$ 25K - $ 50K</SpanBudgetSC>
                </label>
                <label className="label">
                  <input
                    type="radio"
                    className="radio"
                    name="price-100-or-more"
                    value={'price-100k-or-more'}
                  />
                  <span className="fake"></span>
                  <SpanBudgetSC className="text">$ 100K or more</SpanBudgetSC>
                </label>
              </DivBoxColumnsMoneySC>
            </DivBoxRowsLeftPenalSC>
            <DivBoxRowsRightPenalSC>
              <DivTextDescriptionSC>
                Tell us about your project or give a link to the description
              </DivTextDescriptionSC>
              <DivBoxBorderBigInputSC type="text" />
              <DivBoxColumnIconTextSC>
                <DivBoxIconClipSC />
                <DivTextAddAttachmentSC>Add attachment</DivTextAddAttachmentSC>
              </DivBoxColumnIconTextSC>
              <DivBoxBorderSC type="text" />
              <ButtonGradientSC type="submit">
                send
              </ButtonGradientSC>
            </DivBoxRowsRightPenalSC>
          </DivContainerPenalsSC>
        </form>
      </DivContainerSC>
    </DivWrapSC>
  );
};

export default GetInTouch;
