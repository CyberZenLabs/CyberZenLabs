import React, {useContext, useEffect} from "react";
import {
  DivContainerAboutSC,
  DivWrapMenuSC,
  GridContentSC,
  SpanTextElementSC,
} from "../styled-components-css/styled-About";
import GlobalDispatchContext from "../global_dispatch_context";


const About = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage } = state;

  useEffect(() => {
    
    return () => {
      dispatch({
        type: 'SET_IS_PAGE',
        status: "sound"
      })
    }
  }, [isPage])
  return (

    <>
      <DivWrapMenuSC>
        <DivContainerAboutSC>
          <GridContentSC>
            <SpanTextElementSC to="/AboutDev">Development</SpanTextElementSC>
            <SpanTextElementSC to="/">Home</SpanTextElementSC>
            <SpanTextElementSC to="/team">Team</SpanTextElementSC>
          </GridContentSC>
        </DivContainerAboutSC>
      </DivWrapMenuSC>
    </>
  );
};

export default About;
