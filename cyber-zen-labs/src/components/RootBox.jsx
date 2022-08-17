import React, { useEffect, useState } from "react";
import { DivRootSC } from "../styled-components-css/styles-root";

const RootBox = (props) => {
  const { children } = props;

  const [isBlackBack, setIsBlackBack] = useState("");

  // const processChangeBackground = () => {
  //     const interval = setInterval(() => {
  //         setIsBlackBack(isBlackBack => isBlackBack === 'black' ? '' : 'black');
  //     }, 1000);
  //     return () => clearInterval(interval);
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlackBack((isBlackBack) => (isBlackBack === "black" ? "" : "black"));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <DivRootSC isBlackBack={isBlackBack}>{children}</DivRootSC>;
};

export default RootBox;
