import React from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
    DivContainerAboutDevSC,
    DivDecriptionTextSC,
    GridContainerItemsSC,
    DivCustomTextSC,
    GridRowsIcons,
    ImgIconSC,
    GridColumnsIcons,
    GridColumnsSecondIcons
} from "../styled-components-css/styled-AboutDev";

import AfterEffects from '../images/DevIcons/AfterEffects.svg';
import EtherJS from '../images/DevIcons/EthersJS.svg';
import Etherum from '../images/DevIcons/Etherum.svg';
import Express from '../images/DevIcons/Express.svg';
import Figma from '../images/DevIcons/Figma.svg';
import HardHat from '../images/DevIcons/HardHat.svg';
import HTML5 from '../images/DevIcons/HTML5.svg';
import JS from '../images/DevIcons/JS.svg';
import METAMASK from '../images/DevIcons/METAMASK.svg';
import MySQL from '../images/DevIcons/MySQL.svg';
import node from '../images/DevIcons/node.svg';
import PostgreSQL from '../images/DevIcons/PostgreSQL.svg';
import PyTeAl from '../images/DevIcons/PyTeAl.svg';
import Python from '../images/DevIcons/Python.svg';
import ReactIcon from '../images/DevIcons/React.svg';
import Sass from '../images/DevIcons/Sass.svg';
import Selenium from '../images/DevIcons/Selenium.svg';
import Solidity from '../images/DevIcons/Solidity.svg';
import styled_components from '../images/DevIcons/styled_components.svg';
import TRUFFLE from '../images/DevIcons/TRUFFLE.svg';
import web3 from '../images/DevIcons/web3.svg';
import Z from '../images/DevIcons/Z.svg';
import AI from '../images/DevIcons/AI.svg';

const About = () => {
  return (
    <>
    <DivWrapSC>
        <DivContainerSC>
            <DivContainerAboutDevSC>
              <GridContainerItemsSC>
                <DivDecriptionTextSC>
                We are ushering in the future of the web using futuristic technologies most companies arent even dreaming of, whether its UI/UX design, Web3 Development or the most complex of software projects, we have the ability to maniofest the best digital expereinces you or your users could dream of. And that's a promise!
                </DivDecriptionTextSC>
                
                
                <GridRowsIcons>
                <DivDecriptionTextSC>
                <DivCustomTextSC >
                Why we used:
                </DivCustomTextSC>
                </DivDecriptionTextSC>
                  <GridColumnsIcons>
                  <ImgIconSC Photo={web3}/>
                  <ImgIconSC Photo={METAMASK}/>
                  <ImgIconSC Photo={styled_components}/>
                  <ImgIconSC Photo={Solidity}/>
                  <ImgIconSC Photo={HTML5}/>
                  <ImgIconSC Photo={node}/>
                  <ImgIconSC Photo={HardHat}/>
                  <ImgIconSC Photo={Z}/>
                  <ImgIconSC Photo={Python}/>
                  <ImgIconSC Photo={MySQL}/>
                  <ImgIconSC Photo={PyTeAl}/>
                  <ImgIconSC Photo={AI}/>
                  </GridColumnsIcons>
                  <GridColumnsSecondIcons>
                  <ImgIconSC Photo={TRUFFLE}/>
                  <ImgIconSC Photo={Etherum}/>
                  <ImgIconSC Photo={Express}/>
                  <ImgIconSC Photo={Sass}/>
                  <ImgIconSC Photo={ReactIcon}/>
                  <ImgIconSC Photo={JS}/>
                  <ImgIconSC Photo={PostgreSQL}/>
                  <ImgIconSC Photo={EtherJS}/>
                  <ImgIconSC Photo={Selenium}/>
                  <ImgIconSC Photo={Figma}/>
                  <ImgIconSC Photo={AfterEffects}/>
                  </GridColumnsSecondIcons>
                  </GridRowsIcons>
              </GridContainerItemsSC>
            </DivContainerAboutDevSC>
        </DivContainerSC>
        </DivWrapSC>
    </>
  );
};

export default About;
