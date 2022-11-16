import React, { useContext, useEffect,useState } from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  DivContainerAboutDevSC,
  DivDecriptionTextSC,
  GridContainerItemsSC,
  DivCustomTextSC,
  GridRowsIcons,
  ImgIconSC,
  GridColumnsIcons,
  GridColumnsSecondIcons,
  GridIconsSC,
  CarouselHidden,
  DivBlure,
  DivLineAboutDevSC
  
} from "../styled-components-css/styled-AboutDev";
import GlobalDispatchContext from "../global_dispatch_context";
import AboutDevCarousel from "../components/AboutDevCarousel";

import AfterEffects from "../images/DevIcons/AfterEffects.svg";
import EtherJS from "../images/DevIcons/EthersJS.svg";
import Etherum from "../images/DevIcons/Etherum.svg";
import Express from "../images/DevIcons/Express.svg";
import Figma from "../images/DevIcons/Figma.svg";
import HardHat from "../images/DevIcons/HardHat.svg";
import HTML5 from "../images/DevIcons/HTML5.svg";
import JS from "../images/DevIcons/JS.svg";
import METAMASK from "../images/DevIcons/METAMASK.svg";
import MySQL from "../images/DevIcons/MySQL.svg";
import node from "../images/DevIcons/node.svg";
import PostgreSQL from "../images/DevIcons/PostgreSQL.svg";
import PyTeAl from "../images/DevIcons/PyTeAl.svg";
import Python from "../images/DevIcons/Python.svg";
import ReactIcon from "../images/DevIcons/React.svg";
import Sass from "../images/DevIcons/Sass.svg";
import Selenium from "../images/DevIcons/Selenium.svg";
import Solidity from "../images/DevIcons/Solidity.svg";
import styled_components from "../images/DevIcons/styled_components.svg";
import TRUFFLE from "../images/DevIcons/TRUFFLE.svg";
import web3 from "../images/DevIcons/web3.svg";
import Z from "../images/DevIcons/Z.svg";
import AI from "../images/DevIcons/AI.svg";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";
const PointsLine1 = [
  [4000, 410, 1510, 410],
  [1430, 500, 1510, 410],
  [1050, 500, 1430, 500],
  [1050, 500, 980, 410],
  [980, 410, 800, 410],
  [800, 410, 730, 500],
];
// const PointsLine1 = [
//   [0, 410, 210, 410],
//   [210, 410, 450, 470],
//   [450, 470, 830, 472],
//   [830, 472, 980, 410],
//   [980, 410, 1400, 410],
//   [1400, 410, 1530, 475],
// ];


const PointsLine2 = [
  [0, 660, 170, 660],
  [170, 660, 280, 760],
  [280, 760, 850, 760],
  [850, 760, 930, 810],
  [930, 810, 1250, 810],
  [1250, 810, 1330, 760],
  [1330, 760, 1550, 760],
  [1550, 760, 1630, 810],
];
// const PointsLine2 = [
//   [4000, 750, 1570, 750],
//   [1570, 750, 1480, 790],
//   [1480, 790, 1250, 790],
//   [1250, 790, 1150, 750],
//   [1150, 750, 950, 750],
//   [950, 750, 850, 790],
//   [850, 790, 550, 790],
//   [550, 790, 450, 760],
// ];

const About = () => {
 
 
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage, isAboutBack, } = state;
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
  const coords = Tools.getResponseCoords(PointsLine1, {
    width:window.innerWidth,
    height:window.innerHeight
});
const coordsLine2 = Tools.getResponseCoords(PointsLine2,{
    width:window.innerWidth,
    height:window.innerHeight
});
  if(window.innerWidth>1350){
    var _pointsLine1 = PointsLine1
    _pointsLine1[0]=  [4000, 410, 1510, 410]
    _pointsLine1[1]= [1430, 500, 1510, 410]
    _pointsLine1[2]= [1050, 500, 1430, 500]
    _pointsLine1[3]= [1050, 500, 980, 410]
    _pointsLine1[4]= [980, 410, 800, 410]
    _pointsLine1[5]= [800, 410, 730, 500]
    
  

  }
    if(window.innerWidth<1350){
      var _pointsLine1 = PointsLine1
      _pointsLine1[0]=  [0, 410, 210, 410]
      _pointsLine1[1]=  [210, 410, 450, 470]
      _pointsLine1[2]= [450, 470, 830, 472]
      _pointsLine1[3]=  [830, 472, 980, 410]
      _pointsLine1[4]= [980, 410, 1400, 410]
      _pointsLine1[5]= [1400, 410, 1530, 475]
     
      
      

    }
    if(window.innerWidth>1100){
     
      var _pointsLine2 = PointsLine2
      _pointsLine2[0]=  [0, 660, 170, 660]
      _pointsLine2[1]= [170, 660, 280, 760]
      _pointsLine2[2]= [280, 760, 850, 760]
      _pointsLine2[3]= [850, 760, 930, 810]
      _pointsLine2[4]= [930, 810, 1250, 810]
      _pointsLine2[5]= [1250, 810, 1330, 760]
      _pointsLine2[6]=  [1330, 760, 1550, 760]
      _pointsLine2[7]= [1550, 760, 1630, 810]
    
  
    }
      if(window.innerWidth<1100){
      
        var _pointsLine2 = PointsLine2
        _pointsLine2[0]=  [4000, 750, 1570, 750]
        _pointsLine2[1]=  [1570, 750, 1480, 790]
        _pointsLine2[2]=  [1480, 790, 1250, 790]
        _pointsLine2[3]=   [1250, 790, 1150, 750]
        _pointsLine2[4]= [1150, 750, 950, 750]
        _pointsLine2[5]= [950, 750, 850, 790]
        _pointsLine2[6]=[850, 790, 550, 790]
        _pointsLine2[7]=[550, 790, 450, 760]
        
  
      }
      
  if(window.innerHeight>750){
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
  
  

setSize({
  width:window.innerWidth,
  height:window.innerHeight,
      })
  }
  else{
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
 
  

setSize({
          width:window.innerWidth,
          height: window.innerHeight,
      })
     
     
      }

    
    window.addEventListener('resize', function(event) {
      const coords2 = Tools.getResponseCoords(PointsLine1, {
        width:event.target.innerWidth,
        height:event.target.innerHeight
    });
    const _coordsLine2 = Tools.getResponseCoords(PointsLine2,{
        width:window.innerWidth,
        height:window.innerHeight
    });
      if(window.innerWidth>1350){
        var _pointsLine1 = PointsLine1
        _pointsLine1[0]=  [4000, 410, 1510, 410]
        _pointsLine1[1]= [1430, 500, 1510, 410]
        _pointsLine1[2]= [1050, 500, 1430, 500]
        _pointsLine1[3]= [1050, 500, 980, 410]
        _pointsLine1[4]= [980, 410, 800, 410]
        _pointsLine1[5]= [800, 410, 730, 500]
          
      
    
      }
        if(window.innerWidth<1350){
          var _pointsLine1 = PointsLine1
          _pointsLine1[0]=  [0, 410, 210, 410]
      _pointsLine1[1]=  [210, 410, 450, 470]
      _pointsLine1[2]= [450, 470, 830, 472]
      _pointsLine1[3]=  [830, 472, 980, 410]
      _pointsLine1[4]= [980, 410, 1400, 410]
      _pointsLine1[5]= [1400, 410, 1530, 475]
          
          
    
        }
        if(window.innerWidth>1100){
    
          var _pointsLine2 = PointsLine2
          _pointsLine2[0]=  [0, 660, 170, 660]
      _pointsLine2[1]= [170, 660, 280, 760]
      _pointsLine2[2]= [280, 760, 850, 760]
      _pointsLine2[3]= [850, 760, 930, 810]
      _pointsLine2[4]= [930, 810, 1250, 810]
      _pointsLine2[5]= [1250, 810, 1330, 760]
      _pointsLine2[6]=  [1330, 760, 1550, 760]
      _pointsLine2[7]= [1550, 760, 1630, 810]
        
      
        }
          if(window.innerWidth<1100){
          
            var _pointsLine2 = PointsLine2
            _pointsLine2[0]=  [4000, 750, 1570, 750]
            _pointsLine2[1]=  [1570, 750, 1480, 790]
            _pointsLine2[2]=  [1480, 790, 1250, 790]
            _pointsLine2[3]=   [1250, 790, 1150, 750]
            _pointsLine2[4]= [1150, 750, 950, 750]
            _pointsLine2[5]= [950, 750, 850, 790]
            _pointsLine2[6]=[850, 790, 550, 790]
            _pointsLine2[7]=[550, 790, 450, 760]
            
      
          }
          if(event.target.innerHeight>750) {
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
         
          // console.log('><><><><><>', event.target.outerWidth)
          setSize({
              width:event.target.innerWidth,
              height:event.target.innerHeight
          })
          }
          else {
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
          
          // console.log('><><><><><>', event.target.outerWidth)
        
          setSize({
              width:event.target.innerWidth,
              height:event.target.innerHeight=750,
          })
          }
         
        // console.log('>>><><>>>>><><>', event.target.innerHeight, event.target.outerHeight)
        
    }, true);
}
  return (
    <>
            <DivLineAboutDevSC>
         
                <Stage width={size.width} height={size.height}>
                    <Layer>
                        {Tools.drawLine(pointsLine1)}
                        <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill="#ffffff" />
                    </Layer>

                    <Layer>
                        {Tools.drawLine(pointsLine2)}
                        <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill="#ffffff" />
                    </Layer>

                </Stage>
                </DivLineAboutDevSC>
            
      <DivWrapSC>
        <DivContainerSC>
          <DivContainerAboutDevSC>
            <GridContainerItemsSC>
              <DivDecriptionTextSC>
                We are ushering in the future of the web using futuristic
                technologies most companies arent even dreaming of, whether its
                UI/UX design, Web3 Development or the most complex of software
                projects, we have the ability to maniofest the best digital
                expereinces you or your users could dream of. And that's a
                promise!
              </DivDecriptionTextSC>

              <GridRowsIcons>
                <DivDecriptionTextSC>
                  <DivCustomTextSC>Why we used:</DivCustomTextSC>
                </DivDecriptionTextSC>
                <GridIconsSC>
                  <GridColumnsIcons>
                    <ImgIconSC Photo={web3} />
                    <ImgIconSC Photo={METAMASK} />
                    <ImgIconSC Photo={styled_components} />
                    <ImgIconSC Photo={Solidity} />
                    <ImgIconSC Photo={HTML5} />
                    <ImgIconSC Photo={node} />
                    <ImgIconSC Photo={HardHat} />
                    <ImgIconSC Photo={Z} />
                    <ImgIconSC Photo={Python} />
                    <ImgIconSC Photo={MySQL} />
                    <ImgIconSC Photo={PyTeAl} />
                    <ImgIconSC Photo={AI} />
                  </GridColumnsIcons>
                  <GridColumnsSecondIcons>
                    <ImgIconSC Photo={TRUFFLE} />
                    <ImgIconSC Photo={Etherum} />
                    <ImgIconSC Photo={Express} />
                    <ImgIconSC Photo={Sass} />
                    <ImgIconSC Photo={ReactIcon} />
                    <ImgIconSC Photo={JS} />
                    <ImgIconSC Photo={PostgreSQL} />
                    <ImgIconSC Photo={EtherJS} />
                    <ImgIconSC Photo={Selenium} />
                    <ImgIconSC Photo={Figma} />
                    <ImgIconSC Photo={AfterEffects} />
                   
                  </GridColumnsSecondIcons>
                  <DivBlure/>
                </GridIconsSC>
              

                <AboutDevCarousel></AboutDevCarousel>

                {/* sd */}
              </GridRowsIcons>
              
            </GridContainerItemsSC>
          </DivContainerAboutDevSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default About;
