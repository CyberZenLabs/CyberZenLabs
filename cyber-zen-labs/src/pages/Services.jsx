import React, {useContext, useEffect, useState} from "react";
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
    const {state, dispatch} = useContext(GlobalDispatchContext);
    const {isPage, isBlackBack, isServ} = state;
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    let x = (window.innerWidth / 2) - 322 - 50  // center
    let y = 1900 / 2   // center
    let r = 862   // radius
    let a = 0    // angle (from 0 to Math.PI * 2)


    const rotate = (a) => {
        let elem = document.getElementById('DivTaskItemSC')
        var px = x + r * Math.cos(a); // <-- that's the maths you need
        var py = y + r * Math.sin(a);

        elem.style.left = px + "px";
        elem.style.top = py + "px";
    }

    useEffect(() => {
        dispatch({
            type: "SET_IS_SERV",
            status: true,
        });


        // setInterval(function () {
        //     a = (a + Math.PI / 360) % (Math.PI * 2);
        //     rotate(a);
        // }, 10);
        

        return () => {
            dispatch({
                type: "SET_IS_SERV",
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


    const onScroll = (e) => {
        console.log('>>>>>>>>>>>>>>', e)
        a = (a + Math.PI / 360) % (Math.PI * 2);
        rotate(a);
    }

    return (
        <DivWrapSC
            onWheel={onScroll}
        >
            <DivContainerSC>
                <DivContentBoxRowsSC>
                    <DivTitleTextSC>
                        OUR SERVICES
                        <DivShadowTitleSC/>
                    </DivTitleTextSC>
                    <DivColumnsIconAndTextSC>
                        <IconMouseSC/>
                        <DivContentTextSC>
                            Scroll down to see other services

                        </DivContentTextSC>

                    </DivColumnsIconAndTextSC>
                    <DivBoxCarouselSC>
                        <DivBoxCarouselBackgroundEllipseSC>

                        </DivBoxCarouselBackgroundEllipseSC>
                        <ServicesItem position={position}/>
                        {/*<ServicesItem position={position}/>*/}
                        {/*<ServicesItem position={position}/>*/}

                    </DivBoxCarouselSC>

                </DivContentBoxRowsSC>
            </DivContainerSC>
        </DivWrapSC>
    );
};

export default Services;
