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
  DivItemNameSC,
} from "../styled-components-css/styled-team";
import GlobalDispatchContext from "../global_dispatch_context";
import AboutTeamDeveloperCarousel from "../components/AboutTeamDeveloperCarousel";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";

const PointsLine1 = [
  [4000, 370, 1050, 370],
  [980, 320, 1050, 370],
  [550, 320, 980, 320],
  [420, 210, 550, 320],
  [420, 210, 420, 130],
  [420, 130, 370, 110],
];

const PointsLine2 = [
  [0, 650, 170, 650],
  [170, 650, 280, 750],
  [280, 750, 850, 750],
  [850, 750, 930, 800],
  [930, 800, 1250, 800],
  [1250, 800, 1330, 750],
  [1330, 750, 1550, 750],
  [1550, 750, 1630, 800],
];

const PointsLine3 = [[100, 460, 1800, 460]];

const Team = () => {
  
  const [indexSelectedButton, getIndexButton] = useState(0);
 
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage, isAboutBack } = state;
  const [size, setSize] = useState({
      width:window.innerWidth,
      height:window.innerHeight
  })

  const [pointsLine1, setPointsLine1] = useState(PointsLine1)
  const [pointsCircle1, setPointsCircle1] = useState({
      x:0,
      y:0
  })

  const [pointsLine2, setPointsLine2] = useState(PointsLine2)
  const [pointsCircle2, setPointsCircle2] = useState({
      x:0,
      y:0
  })
  const [pointsLine3, setPointsLine3] = useState(PointsLine3)
  const [pointsCircle3, setPointsCircle3] = useState({
      x:0,
      y:0
  })
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

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
      status: "",
    });
    return () => {
      dispatch({
        type: "SET_IS_ABOUT_BACK",
        status: "",
      });
    };
  }, [isAboutBack]);
  useEffect(() => {


    processCoords()

}, [])

useEffect(() => {
    var offsetHeight = document.getElementById('about-line-id').offsetHeight;
    var offsetWidth = document.getElementById('about-line-id').offsetWidth;

    setWidth(offsetWidth);
    setHeight(offsetHeight);
}, [window.innerWidth]);


const processCoords = () => {

    console.log('>>><><>>>>><><>', pointsLine2)
    const coords = Tools.getResponseCoords(PointsLine1,{
        width:window.innerWidth,
        height:window.innerHeight
    });
    const coordsLine2 = Tools.getResponseCoords(PointsLine2,{
        width:window.innerWidth,
        height:window.innerHeight
    });
    const coordsLine3 = Tools.getResponseCoords(PointsLine3,{
      width:window.innerWidth,
      height:window.innerHeight
  });

    setPointsCircle1({
        x: coords[coords.length - 1][coords[coords.length - 1].length - 2],
        y: coords[coords.length - 1][coords[coords.length - 1].length - 1]
    })
    setPointsCircle2(
        {
            x: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 2],
            y: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 1]
        }
    )
    setPointsLine1(coords)
    setPointsLine2(coordsLine2)
    setPointsLine3(coordsLine3)

    window.addEventListener('resize', function(event) {
        // console.log('>>><><>>>>><><>', event.target.innerHeight, event.target.outerHeight)
        const coords2 = Tools.getResponseCoords(PointsLine1, {
            width:event.target.innerWidth,
            height:event.target.innerHeight
        });
        const _coordsLine2 = Tools.getResponseCoords(PointsLine2,{
            width:window.innerWidth,
            height:window.innerHeight
        });
        const _coordsLine3 = Tools.getResponseCoords(PointsLine3,{
          width:window.innerWidth,
          height:window.innerHeight
      });
        setPointsCircle1({
            x: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2],
            y: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1]
        })
        setPointsCircle2(
            {
                x: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 2],
                y: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 1]
            }
        )
        setPointsLine1(coords2)
        setPointsLine2(_coordsLine2)
        setPointsLine3(_coordsLine3)
        // console.log('><><><><><>', event.target.outerWidth)
        setSize({
            width:event.target.innerWidth,
            height:event.target.innerHeight
        })
    }, true);
}
  const listContent = [
    {
      page: (
        <>
          <AboutTeamDeveloperCarousel
            indexSelectedButton={indexSelectedButton}
          ></AboutTeamDeveloperCarousel>
        </>
      ),
    },
    {
      page: (
        <>
          <AboutTeamDeveloperCarousel
            indexSelectedButton={indexSelectedButton}
          ></AboutTeamDeveloperCarousel>
        </>
      ),
    },
    {
      page: (
        <>
          <AboutTeamDeveloperCarousel
            indexSelectedButton={indexSelectedButton}
          ></AboutTeamDeveloperCarousel>
        </>
      ),
    },
  ];
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  return (
    <>
      <DivRuslanBoxSC>
        <Stage  width={size.width} height={size.height} >
          <Layer>
            {Tools.drawLine(pointsLine1)}
            <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill="#ffffff" />
          </Layer>
          <Layer>{Tools.drawLine(pointsLine3)}</Layer>
          <Layer>
            {Tools.drawLine(pointsLine2)}
            <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill="#ffffff" />
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
