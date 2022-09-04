import React from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
  DivContentBoxRowsSC,
  DivTitleTextSC,
  DivColumnsIconAndTextSC,
  IconMouseSC,
  DivContentTextSC,
  DivShadowTitleSC,
} from "../styled-components-css/styled-services";

const Services = () => {
  return (
    <DivWrapSC>
      <DivContainerSC>
        <DivContentBoxRowsSC>
          <DivTitleTextSC>
            OUR SERVICES
            <DivShadowTitleSC />
          </DivTitleTextSC>
          <DivColumnsIconAndTextSC>
            <IconMouseSC />
            <DivContentTextSC>
              Scroll down to see other services
            </DivContentTextSC>
          </DivColumnsIconAndTextSC>
        </DivContentBoxRowsSC>
      </DivContainerSC>
    </DivWrapSC>
  );
};

export default Services;
