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
  const { isBlackBack, isPage, isAboutBack } = state;

  useEffect(() => {
    dispatch({
      type: 'SET_IS_PAGE',
      status: "sound"
    })
    return () => {
      dispatch({
        type: 'SET_IS_PAGE',
        status: "home"
      })

    }
  }, [isPage])

  useEffect(() => {
   
    dispatch({
      type: 'SET_IS_ABOUT_BACK',
      status: "purple"
    })
    return () => {
      dispatch({
        type: 'SET_IS_ABOUT_BACK',
        status: ""
      })
    }
    
  }, [isAboutBack])
  return (

    <>
      <DivWrapMenuSC>
        <DivContainerAboutSC>
          <GridContentSC>
            <SpanTextElementSC to="/">Home</SpanTextElementSC>
            <SpanTextElementSC to="/team">Team</SpanTextElementSC>
            <SpanTextElementSC to="/AboutDev">Development</SpanTextElementSC>
          </GridContentSC>
        </DivContainerAboutSC>
      </DivWrapMenuSC>
    </>
  );
};

export default About;
