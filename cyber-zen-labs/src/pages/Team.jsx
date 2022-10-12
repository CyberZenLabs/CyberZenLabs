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
import AboutTeamDesingCarousel from "../components/AboutTeamDesingCarousel";
import AboutTeamDeveloperCarousel from "../components/AboutTeamDeveloperCarousel";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";

const PointsLine1 = [
  [1900, 410, 1050, 410],
  [980, 360, 1050, 410],
  [550, 360, 980, 360],
  [420, 250, 550, 360],
  [420, 250, 420, 170],
  [420, 170, 370, 140],
];

const PointsLine2 = [
  [10, 800, 170, 800],
  [170, 800, 280, 900],
  [280, 900, 850, 900],
  [850, 900, 930, 950],
  [930, 950, 1250, 950],
  [1250, 950, 1330, 900],
  [1330, 900, 1550, 900],
  [1550, 900, 1630, 950],
];

const PointsLine3 = [[100, 460, 1800, 460]];

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
          <AboutTeamDeveloperCarousel></AboutTeamDeveloperCarousel>
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
      <DivRuslanBoxSC>
        <Stage width={window.innerWidth} height={window.innerHeight - 20}>
          <Layer>
            {Tools.drowLine(PointsLine1)}
            <Circle x={370} y={140} radius={5} fill="#ffffff" />
          </Layer>
          <Layer>{Tools.drowLine(PointsLine3)}</Layer>
          <Layer>
            {Tools.drowLine(PointsLine2)}
            <Circle x={1630} y={950} radius={5} fill="#ffffff" />
          </Layer>
        </Stage>
      </DivRuslanBoxSC>
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
