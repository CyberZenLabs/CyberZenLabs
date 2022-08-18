import React from "react";

import {
    ContainerFooterSC,
    DivImageVetkaSC,
    GridMaxWidthSC,
    GrivImageSC,
    DivMusicSwitchContainer,
    IcomMusicSwitchSC,
} from "../styled-components-css/styled-Footer";

const Footer = () => {
  return (
    <>
      <GridMaxWidthSC>
        <GrivImageSC>
          <DivImageVetkaSC></DivImageVetkaSC>
            <IcomMusicSwitchSC></IcomMusicSwitchSC>
        </GrivImageSC>
        <ContainerFooterSC>
          <DivMusicSwitchContainer>
            
          </DivMusicSwitchContainer>
        </ContainerFooterSC>
      </GridMaxWidthSC>
    </>
  );
};

export default Footer;
