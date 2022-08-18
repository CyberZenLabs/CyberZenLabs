import React, { useEffect, useState, useContext, useReducer } from "react";
import { DivRootSC } from "../styled-components-css/styles-root";
import GlobalDispatchContext from '../global_dispatch_context'
import reducer from '../reducer'

const RootBox = (props) => {
  const { children } = props;
  const initialState = useContext(GlobalDispatchContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [isBlackBack, setIsBlackBack] = useState("");
  const {
      isBlackBack
  } = state

  // const processChangeBackground = () => {
  //     const interval = setInterval(() => {
  //         setIsBlackBack(isBlackBack => isBlackBack === 'black' ? '' : 'black');
  //     }, 1000);
  //     return () => clearInterval(interval);
  // }

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({
                type: 'SET_IS_BLACK',
                status: isBlackBack
            })
            // setIsBlackBack(isBlackBack => isBlackBack === 'black' ? '' : 'black');
        }, 6000);
        return () => clearInterval(interval);
    }, [])

  return (
      <GlobalDispatchContext.Provider value={{ state, dispatch }}>
        <DivRootSC isBlackBack={isBlackBack}>
            {children}
        </DivRootSC>
      </GlobalDispatchContext.Provider>
  );
};

export default RootBox;
