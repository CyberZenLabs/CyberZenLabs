import React, { useContext, useEffect } from "react";
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
  [1900, 410, 1510, 410],
  [1430, 500, 1510, 410],
  [1050, 500, 1430, 500],
  [1050, 500, 980, 410],
  [980, 410, 800, 410],
  [730, 500, 800, 410],
];
const PointsLine2 = [
  [0, 680, 170, 680],
  [170, 680, 280, 780],
  [280, 780, 850, 780],
  [850, 780, 930, 830],
  [930, 830, 1250, 830],
  [1250, 830, 1330, 780],
  [1330, 780, 1550, 780],
  [1550, 780, 1630, 830],
];

const About = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage, isAboutBack } = state;
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
  return (
    <>
      <DivRuslanBoxSC>
        <Stage width={window.innerWidth} height={window.innerHeight - 20}>
          <Layer>
            {Tools.drawLine(PointsLine1)}
            <Circle x={730} y={500} radius={5} fill="#ffffff" />
          </Layer>
          <Layer>
            {Tools.drawLine(PointsLine2)}
            <Circle x={1630} y={830} radius={5} fill="#ffffff" />
          </Layer>
        </Stage>
      </DivRuslanBoxSC>
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
