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
  DivLineAboutTeamSC,
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
// const PointsLine1 = [
//   [0, 200, 120, 200],
//   [120, 200, 200, 230],
//   [200, 230, 900, 230],
//   [900, 230, 1150, 270],
//   [1150, 270, 1400, 270],
//   [1400, 270, 1600, 350],
// ];

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
// const PointsLine2 = [
//   [4000, 660, 1750, 660],
//   [1750, 660, 1550, 750],
//   [1550, 750, 1150, 750],
//   [1150, 750, 1030, 800],
//   [1030, 800, 850, 800],
//   [850, 800, 710, 760],
// ];


const PointsLine3 = [[100,  430, 1800, 430]];

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
  if(window.innerHeight>933){
    var _pointsLine3 = PointsLine3
    _pointsLine3[0][1] = 420
    _pointsLine3[0][3] = 420
    

  }
  if(window.innerHeight<933){
    var _pointsLine3 = PointsLine3
    _pointsLine3[0][1] = 470
    _pointsLine3[0][3] = 470
    

  }
  if(window.innerHeight<640){
    var _pointsLine3 = PointsLine3
    _pointsLine3[0][1] = 500
_pointsLine3[0][3] = 500
    

  }
  if(window.innerWidth>1100){
    var _pointsLine2 = PointsLine2
   
    _pointsLine2[0]=   [0, 650, 170, 650]
      _pointsLine2[1]=   [170, 650, 280, 750]
      _pointsLine2[2]=  [280, 750, 850, 750]
      _pointsLine2[3]=   [850, 750, 930, 800]
      _pointsLine2[4]=    [930, 800, 1250, 800]
      _pointsLine2[5]=   [1250, 800, 1330, 750]
      _pointsLine2[6]=   [1330, 750, 1550, 750]
      _pointsLine2[7]= [1550, 750, 1630, 800]
    
  }
  if(window.innerWidth<1100){
    var _pointsLine2 = PointsLine2
   
    _pointsLine2[0]=  [4000, 660, 1750, 660]
      _pointsLine2[1]=  [1750, 660, 1550, 750]
      _pointsLine2[2]= [1550, 750, 1150, 750]
      _pointsLine2[3]=   [1030, 800, 850, 800]
      _pointsLine2[4]=   [1150, 750, 1030, 800]
      _pointsLine2[5]=   [0,0,0,0]
      _pointsLine2[6]=   [0,0,0,0]
      _pointsLine2[7]= [850, 800, 710, 760]
  }
  if(window.innerHeight<720){
    var _pointsLine2 = PointsLine2
   
    _pointsLine2[0]=  [4000, 760, 1750, 760]
      _pointsLine2[1]=  [1750, 760, 1550, 850]
      _pointsLine2[2]= [1550, 850, 1150, 850]
      _pointsLine2[3]=   [1030, 900, 850, 900]
      _pointsLine2[4]=   [1150, 850, 1030, 900]
      _pointsLine2[5]=   [0,0,0,0]
      _pointsLine2[6]=   [0,0,0,0]
      _pointsLine2[7]= [850, 900, 710, 860]
  }
 
  if(window.innerWidth>1500){
    var _pointsLine1 = PointsLine1
    _pointsLine1[0]= [4000, 370, 1050, 370]
    _pointsLine1[1]= [980, 320, 1050, 370]
    _pointsLine1[2]= [550, 320, 980, 320]
    _pointsLine1[3]= [420, 210, 550, 320]
    _pointsLine1[4]= [420, 210, 420, 130]
    _pointsLine1[5]= [420, 130, 370, 110]
      
   

  }
    if(window.innerWidth<1500){
      var _pointsLine1 = PointsLine1
      _pointsLine1[0]= [0, 200, 120, 200]
      _pointsLine1[1]= [120, 200, 200, 270]
      _pointsLine1[2]= [200, 270, 900, 270]
      _pointsLine1[3]= [900, 270, 1150, 310]
      _pointsLine1[4]= [1150, 310, 1400, 310]
      _pointsLine1[5]= [1400, 310, 1600, 390]
        
      
      

    }
    

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
        if(window.innerHeight>933){
          var _pointsLine3 = PointsLine3
          _pointsLine3[0][1] = 420
          _pointsLine3[0][3] = 420
          
      
        }
        if(window.innerHeight<933){
          var _pointsLine3 = PointsLine3
          _pointsLine3[0][1] = 470
          _pointsLine3[0][3] = 470
          
      
        }
        if(window.innerHeight<640){
          var _pointsLine3 = PointsLine3
          _pointsLine3[0][1] = 500
      _pointsLine3[0][3] = 500
          
      
        }
        if(window.innerWidth>1100){
          var _pointsLine2 = PointsLine2
         
          _pointsLine2[0]=   [0, 650, 170, 650]
            _pointsLine2[1]=   [170, 650, 280, 750]
            _pointsLine2[2]=  [280, 750, 850, 750]
            _pointsLine2[3]=   [850, 750, 930, 800]
            _pointsLine2[4]=    [930, 800, 1250, 800]
            _pointsLine2[5]=   [1250, 800, 1330, 750]
            _pointsLine2[6]=   [1330, 750, 1550, 750]
            _pointsLine2[7]= [1550, 750, 1630, 800]
          
        }
        
        if(window.innerWidth<1100){
          var _pointsLine2 = PointsLine2
         
          _pointsLine2[0]=  [4000, 660, 1750, 660]
            _pointsLine2[1]=  [1750, 660, 1550, 750]
            _pointsLine2[2]= [1550, 750, 1150, 750]
            _pointsLine2[3]=   [1030, 800, 850, 800]
            _pointsLine2[4]=   [1150, 750, 1030, 800]
            _pointsLine2[5]=   [0,0,0,0]
            _pointsLine2[6]=   [0,0,0,0]
            _pointsLine2[7]= [850, 800, 710, 760]
        }
        
  if(window.innerWidth>1500){
    var _pointsLine1 = PointsLine1
    _pointsLine1[0]= [4000, 370, 1050, 370]
    _pointsLine1[1]= [980, 320, 1050, 370]
    _pointsLine1[2]= [550, 320, 980, 320]
    _pointsLine1[3]= [420, 210, 550, 320]
    _pointsLine1[4]= [420, 210, 420, 130]
    _pointsLine1[5]= [420, 130, 370, 110]
      
   

  }
       
          if(window.innerWidth<1500){
            var _pointsLine1 = PointsLine1
            _pointsLine1[0]= [0, 200, 120, 200]
      _pointsLine1[1]= [120, 200, 200, 270]
      _pointsLine1[2]= [200, 270, 900, 270]
      _pointsLine1[3]= [900, 270, 1150, 310]
      _pointsLine1[4]= [1150, 310, 1400, 310]
      _pointsLine1[5]= [1400, 310, 1600, 390]
        
              
            
            
    
          }
          if(window.innerHeight<720){
            var _pointsLine2 = PointsLine2
            _pointsLine2[0]=  [4000, 750, 1750, 750]
            _pointsLine2[1]=  [1750, 750, 1550, 840]
            _pointsLine2[2]= [1550, 840, 1150, 840]
            _pointsLine2[3]=   [1030, 890, 850, 890]
            _pointsLine2[4]=   [1150, 840, 1030, 890]
            _pointsLine2[5]=   [0,0,0,0]
            _pointsLine2[6]=   [0,0,0,0]
            _pointsLine2[7]= [850, 890, 710, 850]
      
          }
         
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
      <DivLineAboutTeamSC>
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
      </DivLineAboutTeamSC>
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
              <DivPageSC
                isActive={indexSelectedButton === 3}
                onClick={onClickTab(3)}
              >
                Cryptocurrency trading
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
