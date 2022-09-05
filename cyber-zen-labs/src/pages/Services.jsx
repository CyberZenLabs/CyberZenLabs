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
} from "../styled-components-css/styled-services";
import ServicesItem from "../components/ServicesItem";

const Services = () => {
    return (
        <DivWrapSC>
            <DivContainerSC>
                <DivContentBoxRowsSC>
                    <DivTitleTextSC>
                        OUR SERVICES
                        <DivShadowTitleSC />
                    </DivTitleTextSC>
                    <DivColumnsIconAndTextSC>
                        <IconMouseSC />
                        <DivContentTextSC>
                            Scroll down to see other services

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

export default Services;
