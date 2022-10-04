import React from "react";
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

const Projects = () => {
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
