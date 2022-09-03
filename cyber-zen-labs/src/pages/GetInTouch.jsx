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
  const { isBlackBack, isPage, isAboutBack } = state;

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
        <Formik
          initialValues={startingValues}
          validationSchema={registerSchema}
          initialErrors={startingValues}
        >
          {(formik) => (
            <Form>
              <DivContainerPenals2SC>
                <DivBoxTextSC>Your name</DivBoxTextSC>
                <DivBoxBorderSC
                  label="firstName"
                  type="text"
                  name="firstName"
                />
                <DivBoxTextSC>Company name</DivBoxTextSC>
                <DivBoxBorderSC
                  label="companyName"
                  type="text"
                  name="companyName"
                />
                <DivBoxTextSC>Email</DivBoxTextSC>
                <DivBoxBorderSC label="email" type="email" name="email" />
                <DivBoxTextSC>Phone</DivBoxTextSC>
                <DivBoxBorderSC label="phone" type="phone" name="phone" />
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
                    <input type="radio" className="radio" name="name1" />
                    <span className="fake"></span>
                    <SpanBudgetSC className="text1">$ 10K - $ 25K</SpanBudgetSC>
                  </label>
                  <label className="label">
                    <input type="radio" className="radio" name="name1" />
                    <span className="fake"></span>
                    <SpanBudgetSC className="text">$ 50K - $ 100K</SpanBudgetSC>
                  </label>
                  <label className="label">
                    <input type="radio" className="radio" name="name1" />
                    <span className="fake"></span>
                    <SpanBudgetSC className="text1">$ 25K - $ 50K</SpanBudgetSC>
                  </label>
                  <label className="label">
                    <input type="radio" className="radio" name="name1" />
                    <span className="fake"></span>
                    <SpanBudgetSC className="text">$ 100K or more</SpanBudgetSC>
                  </label>
                </DivBoxColumnsMoneySC>
                <ButtonGradientSC to={"#"}>send</ButtonGradientSC>
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
                      <input type="radio" className="radio" name="name1" />
                      <span className="fake"></span>
                      <SpanBudgetSC className="text1">
                        $ 10K - $ 25K
                      </SpanBudgetSC>
                    </label>
                    <label className="label">
                      <input type="radio" className="radio" name="name1" />
                      <span className="fake"></span>
                      <SpanBudgetSC className="text">
                        $ 50K - $ 100K
                      </SpanBudgetSC>
                    </label>
                    <label className="label">
                      <input type="radio" className="radio" name="name1" />
                      <span className="fake"></span>
                      <SpanBudgetSC className="text1">
                        $ 25K - $ 50K
                      </SpanBudgetSC>
                    </label>
                    <label className="label">
                      <input type="radio" className="radio" name="name1" />
                      <span className="fake"></span>
                      <SpanBudgetSC className="text">
                        $ 100K or more
                      </SpanBudgetSC>
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
                    <DivTextAddAttachmentSC>
                      Add attachment
                    </DivTextAddAttachmentSC>
                  </DivBoxColumnIconTextSC>
                  <DivBoxBorderSC type="text" />
                  <ButtonGradientSC to={"#"}>send</ButtonGradientSC>
                </DivBoxRowsRightPenalSC>
              </DivContainerPenalsSC>
            </Form>
          )}
        </Formik>
      </DivContainerSC>
    </DivWrapSC>
  );
};

export default GetInTouch;
