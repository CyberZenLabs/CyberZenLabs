import React, { useContext, useEffect } from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
  DescHomeBoxSC,
  DivDescBoxtSC,
  DivHomeContentSC,
  DivShadowBoxSC,
  DivTextBoxtSC,
  DivTitleBoxtSC,
  SloganBoxSC,
  TitleHomeBoxSC,
} from "../styled-components-css/styled.home";
import GlobalDispatchContext from "../global_dispatch_context";

const Home = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isPage, isBlackBack } = state;

  useEffect(() => {
    dispatch({
      type: 'SET_IS_HOME',
      status: true
    })
    return () => {
      dispatch({
        type: 'SET_IS_HOME',
        status: false
      })
    }
  }, [])

  useEffect(() => {
    
    return () => {
      dispatch({
        type: 'SET_IS_PAGE',
        status: "home"
      })
    }
  }, [isPage])

  
  return (
    <>
      <DivWrapSC>
        <DivContainerSC>
          <DivHomeContentSC>
            <DivTextBoxtSC>
              <DivTitleBoxtSC>
                <TitleHomeBoxSC isBlackBack={isBlackBack}>
                  CYBERZEN LABS
                  {isBlackBack === "black" ? null : (
                    <DivShadowBoxSC></DivShadowBoxSC>
                  )}
                </TitleHomeBoxSC>
                <SloganBoxSC>The future is now</SloganBoxSC>
              </DivTitleBoxtSC>
              <DivDescBoxtSC>
                <DescHomeBoxSC isBlackBack={isBlackBack}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  quam eu amet massa viverra.
                </DescHomeBoxSC>
              </DivDescBoxtSC>
            </DivTextBoxtSC>
          </DivHomeContentSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default Home;
