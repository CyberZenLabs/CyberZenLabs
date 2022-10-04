import React, { useEffect, useState, useContext, useReducer } from "react";
import { DivRootSC } from "../styled-components-css/styles-root";
import GlobalDispatchContext from '../global_dispatch_context'
import reducer from '../reducer'

const RootBox = (props) => {
  const { children } = props;
  const initialState = useContext(GlobalDispatchContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
      isBlackBack,
      isHome,
      isAboutBack
  } = state

    let interval


    useEffect(() => {

        if (!isHome) {
            clearInterval(interval)
            dispatch({
                type: 'SET_FALSE_BLACK_BACK'
            })
        }
        else {
            interval = setInterval(() => {
                dispatch({
                    type: 'SET_IS_BLACK'
                })
            }, 6000);
            return () => clearInterval(interval);
        }

    }, [isHome])


  return (
      <GlobalDispatchContext.Provider value={{ state, dispatch }}>
        <DivRootSC isBlackBack={isBlackBack} isAboutBack ={isAboutBack}>
            {children}
        </DivRootSC>
      </GlobalDispatchContext.Provider>
  );
};

export default RootBox;
