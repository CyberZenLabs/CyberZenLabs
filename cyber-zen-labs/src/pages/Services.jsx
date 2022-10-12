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
} from "../styled-components-css/styled-services";
import ServicesItem from "../components/ServicesItem";
import GlobalDispatchContext from "../global_dispatch_context";

const Services = () => {
    const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isPage, isBlackBack } = state;

  

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
