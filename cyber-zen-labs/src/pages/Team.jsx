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
} from "../styled-components-css/styled-team";
import GlobalDispatchContext from "../global_dispatch_context";
import AboutTeamDesingCarousel from "../components/AboutTeamDesingCarousel"

const Team = () => {

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
          <DivBoxColumnsFotosSC>
            <DivFotoSC />
            <DivFoto1SC />
          </DivBoxColumnsFotosSC>
          <DivBoxColumnsNameSC>
            <DivNameSC>Sam Singer Founder and Owner</DivNameSC>
            <DivName1SC>Den Gordin Project-manager</DivName1SC>
          </DivBoxColumnsNameSC>
        </>
      ),
    },
    {
      page: (
        <>
          <DivBoxColumnsFotos1SC>
            <DivFotoSC />
            <DivFoto2SC />
            <DivFoto3SC />
            <DivFoto4SC />
            <DivFoto5SC />
            <DivFoto6SC />
            <DivFoto7SC />
          </DivBoxColumnsFotos1SC>
          <DivBoxColumnsName1SC>
            <DivName0SC>Sam Singer Founder and Owner</DivName0SC>
            <DivName0SC>Kirill Drozdov Full-stack Developer</DivName0SC>
            <DivName0SC>Ruslan Gordin Frontend Developer</DivName0SC>
            <DivName0SC>Ilya Morozov Backend Developer</DivName0SC>
            <DivName0SC>Svetlana Soboleva Frontend Developer</DivName0SC>
            <DivName0SC>Stanislav Maximov Backend Developer</DivName0SC>
            <DivName0SC>Dmitry Galtsov Frontend Developer</DivName0SC>
          </DivBoxColumnsName1SC>
        </>
      ),
    },
    {
      page: (
        <>
          <DivBoxColumnsFotos3SC>
            <DivFoto8SC />
            <DivFoto9SC />
            <DivFoto10SC />
            <DivFoto11SC />
            
          </DivBoxColumnsFotos3SC>
          <DivBoxColumnsName2SC>
            <DivName2SC>Andrey Baykov UI/UX Designer</DivName2SC>
            <DivName2SC>Irene Gordina UI/UX Designer</DivName2SC>
            <DivName2SC>Alina Sagaidak Motion Designer</DivName2SC>
            <DivName2SC>Lisa Raklova UI/UX Designer</DivName2SC>
            
          </DivBoxColumnsName2SC>
          <AboutTeamDesingCarousel></AboutTeamDesingCarousel>
        </>
      ),
    },
  ];
  const [indexSelectedButton, getIndexButton] = useState(0);
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
