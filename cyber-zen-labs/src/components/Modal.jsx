import React, { useContext, useState, useRef, useEffect } from "react";

import GlobalDispatchContext from "../global_dispatch_context";

import {
  BlockModal,
  ButtonPrevModal,
  CenterItemsSC,
  DivBoxRowModalContSC,
  DivBoxRowModalSC,
  DivWrapModal,
  EmailFieldSC,
  IoIosArrowBackSC,
  StoreCreationTitleSC,
  StoreCreationSubTitleSC,
  CropperContainer,
} from "../styled-components-css/styled-modal";
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
  DivBoxPersonalDataSC,
  DivBoxPriceSC,
} from "../styled-components-css/styled-getInTouch";
import {
  DivContainerFooterLeftSC,
  H1FooterTextSoundOnSC,
} from "../styled-components-css/styled-Footer";
import { Form, Formik } from "formik";
import { registerSchema } from "../validations/validation.signup";
import useSound from 'use-sound';
import Sfx from '../audio/send.wav';
const startingValues = {
  firstName: "",
  companyName: "",
  email: "",
  phone: "",
};
const CyberModal = ({
  title,
  subTitle,
  cropImageModal,
  photoUrl,
  setPhotoUrl,
  photoUrls,
  aspect,
  cropType,
  setFileImg,
}) => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isOpen, modalData } = state;

  const [name, setName] = useState('');
  const [play] = useSound(Sfx);
  const [music, setMusic] = useState(true);
  const fileInput = useRef();
  const MusicBeh = () => {
    setMusic(!music);
  };

  const getFile = () => {
    fileInput.current.click();
  };

  return (
    <>
      <BlockModal isOpen={isOpen} contentLabel="Modal">
        <DivWrapModal>
          <ButtonPrevModal>
            <IoIosArrowBackSC
              onClick={() =>
                dispatch({
                  type: "SET_IS_OPEN",
                  status: false,
                })
              }
            />
          </ButtonPrevModal>

          <DivWrapSC>
            <DivContainerSC>
              <form
                action="https://formsubmit.co/moroz2002ilya@gmail.com"
                method="POST"
                enctype="multipart/form-data"
              >
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
                  <DivBoxBorderSC label="phone" type="text" name="phone" />
                  <DivBoxColumnIconTextSC>
                    <DivBoxIconClipSC />
                    <DivBoxTextSC>Add attachment</DivBoxTextSC>
                  </DivBoxColumnIconTextSC>
                  {/* <DivBoxBorder2SC type="textarea" name="description"/> */}
                  <DivTextDescriptionSC>
                    Tell us about your project or give a link to the description
                  </DivTextDescriptionSC>
                  {/* <DivBoxBorderSC type="text" /> */}
                  <DivBoxTextSC>Budget</DivBoxTextSC>
                  <DivBoxColumnsMoneySC>
                    <label className="label">
                      <input
                        type="radio"
                        className="radio"
                        name="price-10-25"
                        value={"price-10-25k"}
                      />
                      <span className="fake"></span>
                      <SpanBudgetSC className="text1">
                        $ 10K - $ 25K
                      </SpanBudgetSC>
                    </label>
                    <label className="label">
                      <input
                        type="radio"
                        className="radio"
                        name="price-50-100"
                        value={"price-50-100k"}
                      />
                      <span className="fake"></span>
                      <SpanBudgetSC className="text">
                        $ 50K - $ 100K
                      </SpanBudgetSC>
                    </label>
                    <label className="label">
                      <input
                        type="radio"
                        className="radio"
                        name="price-25-50"
                        value={"price-25-50k"}
                      />
                      <span className="fake"></span>
                      <SpanBudgetSC className="text1">
                        $ 25K - $ 50K
                      </SpanBudgetSC>
                    </label>
                    <label className="label">
                      <input
                        type="radio"
                        className="radio"
                        name="price-100-or-more"
                        value={"price-100k-or-more"}
                      />
                      <span className="fake"></span>
                      <SpanBudgetSC className="text">
                        $ 100K or more
                      </SpanBudgetSC>
                    </label>
                  </DivBoxColumnsMoneySC>
                  <ButtonGradientSC type="submit" onMouseEnter={play}>send</ButtonGradientSC>
                </DivContainerPenals2SC>

                <DivContainerPenalsSC>
                  <DivBoxRowsLeftPenalSC>
                    <DivBoxPersonalDataSC>
                      <DivBoxBorderSC
                        label="firstName"
                        type="text"
                        name="firstName"
                        required
                        placeholder="Your Name"
                      />

                      <DivBoxBorderSC
                        label="companyName"
                        type="text"
                        name="companyName"
                        placeholder="Company name"
                      />

                      <DivBoxBorderSC
                        label="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />

                      <DivBoxBorderSC
                        label="phone"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                      />
                    </DivBoxPersonalDataSC>
                    <DivBoxPriceSC>
                      <DivBoxTextSC>Budget</DivBoxTextSC>
                      <DivBoxColumnsMoneySC>
                        <label className="label">
                          <input
                            type="radio"
                            className="radio"
                            name="radio-click"
                            value={"price-10-25k"}
                          />
                          <span className="fake"></span>
                          <SpanBudgetSC className="text1">
                            $ 10K - $ 25K
                          </SpanBudgetSC>
                        </label>
                        <label className="label">
                          <input
                            type="radio"
                            className="radio"
                            name="radio-click"
                            value={"price-50-100k"}
                          />
                          <span className="fake"></span>
                          <SpanBudgetSC className="text">
                            $ 50K - $ 100K
                          </SpanBudgetSC>
                        </label>
                        <label className="label">
                          <input
                            type="radio"
                            className="radio"
                            name="radio-click"
                            value={"price-25-50k"}
                          />
                          <span className="fake"></span>
                          <SpanBudgetSC className="text1">
                            $ 25K - $ 50K
                          </SpanBudgetSC>
                        </label>
                        <label className="label">
                          <input
                            type="radio"
                            className="radio"
                            name="radio-click"
                            value={"price-100k-or-more"}
                          />
                          <span className="fake"></span>
                          <SpanBudgetSC className="text">
                            $ 100K or more
                          </SpanBudgetSC>
                        </label>
                      </DivBoxColumnsMoneySC>
                    </DivBoxPriceSC>
                  </DivBoxRowsLeftPenalSC>
                  <DivBoxRowsRightPenalSC>
                    {/* <DivTextDescriptionSC>
                      Tell us about your project or give a link to the
                      description
                    </DivTextDescriptionSC> */}
                    <DivBoxBorderBigInputSC
                      type="textarea"
                      wrap="on"
                      // rows="10"
                      cols={50}
                      name="desccription"
                      placeholder="Tell us about your project or give a link to the
                      description"
                    />
                    <DivBoxColumnIconTextSC>
                      <DivBoxIconClipSC onClick={getFile} />
                      <DivTextAddAttachmentSC>
                        Add attachment
                      </DivTextAddAttachmentSC>
                      <input
                        type="file"
                        name="attachment"
                        hidden="true"
                        ref={fileInput}
                      ></input>
                    </DivBoxColumnIconTextSC>
                    {/* <DivBoxBorderSC type="text" /> */}
                    <ButtonGradientSC type="submit" onMouseEnter={play}>send</ButtonGradientSC>
                  </DivBoxRowsRightPenalSC>
                </DivContainerPenalsSC>
              </form>
            </DivContainerSC>
          </DivWrapSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default CyberModal;
