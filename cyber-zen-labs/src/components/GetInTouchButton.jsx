import React, {useContext, useEffect, useState} from "react";
import "../styles/git-button.css";
import {
  DivGitContainerSC,
  DivMailBoxSC,
} from "../styled-components-css/styled-git-button";
import { FiMail } from "react-icons/fi";
import Loading from "./Loading";
import GlobalDispatchContext from "../global_dispatch_context";


const GetInTouchButton = () => {

  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage } = state;



  return (
    <>
      <DivGitContainerSC id="gitButton">
        <Loading containerId={"gitButton"}/>

        <DivMailBoxSC>
          <FiMail size={"28px"} color={isBlackBack === "black" ? "#f61067" : "#D516FF"}/>
        </DivMailBoxSC>
      </DivGitContainerSC>
    </>
  );
};

export default GetInTouchButton;
