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
    GridColumnsIcons
} from "../styled-components-css/styled-AboutDev";
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
                <DivDecriptionTextSC JustifySelf="flex-start">
                <DivCustomTextSC >
                Why we used:
                </DivCustomTextSC>
                </DivDecriptionTextSC>
                <GridRowsIcons>
                  <GridColumnsIcons>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  </GridColumnsIcons>
                  <GridColumnsIcons>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  <ImgIconSC src=""/>
                  </GridColumnsIcons>
                  
                  
                </GridRowsIcons>
              </GridContainerItemsSC>
            </DivContainerAboutDevSC>
        </DivContainerSC>
        </DivWrapSC>
    </>
  );
};

export default About;
