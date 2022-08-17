import React from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
  GridContentSC,
  SpanTextElementSC
} from "../styled-components-css/styled-About";
const About = () => {
  return (
    <>
      <DivWrapSC>
        <DivContainerSC>
          <GridContentSC>
            <SpanTextElementSC to ="#">Home</SpanTextElementSC>
            <SpanTextElementSC to ="#">Team</SpanTextElementSC>
            <SpanTextElementSC to ="#">Development</SpanTextElementSC>
          </GridContentSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default About;
