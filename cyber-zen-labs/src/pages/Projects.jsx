import React, { useContext, useEffect } from "react";
import {
    DivContainerSC,
    DivWrapSC,
} from "../styled-components-css/styled-DEFAULT";
import {
    DivContentBoxRowsSC,
    DivTitleTextSC,
    DivColumnsIconAndTextSC,
    IconMouseSC,
    DivContentTextSC,
    DivShadowTitleSC, DivBoxCarouselSC, DivBoxCarouselBackgroundEllipseSC,
} from "../styled-components-css/styled-projects";
import ServicesItem from "../components/ProjectsItems";
import GlobalDispatchContext from "../global_dispatch_context";

const Projects = () => {
    const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isPage, isBlackBack } = state;

  useEffect(() => {
    dispatch({
      type: "SET_IS_HOME",
      status: true,
    });
    return () => {
      dispatch({
        type: "SET_IS_HOME",
        status: false,
      });
    };
  }, []);

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "home",
      });
    };
  }, [isPage]);
    return (
        <DivWrapSC>
            <DivContainerSC>
                <DivContentBoxRowsSC>
                    <DivTitleTextSC>
                    PROJECTS
                        <DivShadowTitleSC />
                    </DivTitleTextSC>
                    <DivColumnsIconAndTextSC>
                        <IconMouseSC />
                        <DivContentTextSC>
                            Scroll down to see other projects

                        </DivContentTextSC>

                    </DivColumnsIconAndTextSC>
                    <DivBoxCarouselSC>
                        <DivBoxCarouselBackgroundEllipseSC>

                        </DivBoxCarouselBackgroundEllipseSC>
                        <ServicesItem/>
                    </DivBoxCarouselSC>

                </DivContentBoxRowsSC>
            </DivContainerSC>
        </DivWrapSC>
    );
};

export default Projects;
