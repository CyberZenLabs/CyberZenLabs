import React from "react";
import {
  DivContainerAboutSC,
  DivWrapMenuSC,
  GridContentSC,
  SpanTextElementSC
} from "../styled-components-css/styled-About";
const About = () => {
  return (
    <>
    <DivWrapMenuSC>
        <DivContainerAboutSC>
          <GridContentSC>
            <SpanTextElementSC to ="#">Home</SpanTextElementSC>
            <SpanTextElementSC to ="#">Team</SpanTextElementSC>
            <SpanTextElementSC to ="AboutDev">Development</SpanTextElementSC>
          </GridContentSC>
        </DivContainerAboutSC>
        </DivWrapMenuSC>
    </>
  );
};

export default About;
