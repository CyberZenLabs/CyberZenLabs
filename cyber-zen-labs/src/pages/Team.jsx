import React, { useState, useEffect, useContext } from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
  DivMainRowsSC,
  DivBoxTextTitleSC,
  DivTextTitleSC,
  DivTextTeamSC,
  DivBoxColumnsPagesSC,
  DivPageSC,
  DivBoxColumnsFotosSC,
  DivFotoSC,
  DivFoto1SC,
  DivFoto2SC,
  DivFoto3SC,
  DivFoto4SC,
  DivFoto5SC,
  DivFoto6SC,
  DivFoto7SC,
  DivBoxColumnsNameSC,
  DivNameSC,
  DivName0SC,
  DivName1SC,
  DivBoxColumnsFotos1SC,
  DivBoxColumnsName1SC,
  DivName2SC,
  DivBoxColumnsName2SC,
  DivBoxColumnsFotos3SC,
  DivFoto8SC,
  DivFoto9SC,
  DivFoto10SC,
  DivFoto11SC,
  DivItemsSC,
  DivItemSC,
  DivItemPhotoSC,
  DivItemNameSC

} from "../styled-components-css/styled-team";
import GlobalDispatchContext from "../global_dispatch_context";
import AboutTeamDeveloperCarousel from "../components/AboutTeamDeveloperCarousel"


const Team = () => {
  const [indexSelectedButton, getIndexButton] = useState(0);
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isPage, isAboutBack } = state;

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "about",
      });
    };
  }, [isPage]);

  useEffect(() => {
    dispatch({
      type: "SET_IS_ABOUT_BACK",
      status: "purple",
    });
    return () => {
      dispatch({
        type: "SET_IS_ABOUT_BACK",
        status: "",
      });
    };
  }, [isAboutBack]);
  const listContent = [
    {
      page: (
        <>
        <AboutTeamDeveloperCarousel indexSelectedButton={indexSelectedButton}></AboutTeamDeveloperCarousel>
        </>
      ),
    },
    {
      page: (
        <>
          <AboutTeamDeveloperCarousel indexSelectedButton={indexSelectedButton}></AboutTeamDeveloperCarousel>
        </>
      ),
    },
    {
      page: (
        <>
        <AboutTeamDeveloperCarousel indexSelectedButton={indexSelectedButton}></AboutTeamDeveloperCarousel>
        </>
      ),
    },
  ];
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  return (
    <>
      <DivWrapSC>
        <DivContainerSC>
          <DivMainRowsSC>
            <DivBoxTextTitleSC>
              <DivTextTitleSC>
                The future is now Web3 and Web2 Software agency
              </DivTextTitleSC>
            </DivBoxTextTitleSC>
            <DivTextTeamSC>Team</DivTextTeamSC>
            <DivBoxColumnsPagesSC>
              <DivPageSC
                isActive={indexSelectedButton === 0}
                onClick={onClickTab(0)}
              >
                Leadership
              </DivPageSC>
              <DivPageSC
                isActive={indexSelectedButton === 1}
                onClick={onClickTab(1)}
              >
                Development
              </DivPageSC>
              <DivPageSC
                isActive={indexSelectedButton === 2}
                onClick={onClickTab(2)}
              >
                Design
              </DivPageSC>
            </DivBoxColumnsPagesSC>
            {listContent[indexSelectedButton].page}
          </DivMainRowsSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default Team;
