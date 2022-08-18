import React from "react";
import {
  DivContainerSC,
  DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
  DescHomeBoxSC,
  DivDescBoxtSC,
  DivHomeContentSC,
  DivTextBoxtSC,
  DivTitleBoxtSC,
  SloganBoxSC,
  TitleHomeBoxSC,
} from "../styled-components-css/styled.home";

const Home = () => {
  return (
    <>
      <DivWrapSC>
        <DivContainerSC>
          <DivHomeContentSC>
            <DivTextBoxtSC>
              <DivTitleBoxtSC>
                <TitleHomeBoxSC>CYBERZEN LABS</TitleHomeBoxSC>
                <SloganBoxSC>The future is now</SloganBoxSC>
              </DivTitleBoxtSC>
              <DivDescBoxtSC>
                <DescHomeBoxSC>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  quam eu amet massa viverra.
                </DescHomeBoxSC>
              </DivDescBoxtSC>
            </DivTextBoxtSC>
          </DivHomeContentSC>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default Home;
