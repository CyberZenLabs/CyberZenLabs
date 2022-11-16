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
let tempSCroll = false
let isSecond = false


const Services = () => {
    const {state, dispatch} = useContext(GlobalDispatchContext);
    const {isPage, isBlackBack, isServ} = state;
    const [position, setPosition] = useState({
        x: window.innerWidth / 4,
        y: 50
    })
    const [position1, setPosition1] = useState({
        x: 1361,
        y: 569
    })
    const [position2, setPosition2] = useState({
        x: 590,
        y: 1800
    })
    const [position3, setPosition3] = useState({
        x: -270,
        y: 1020
    })

    const [isScroll, setIsScroll] = useState(false)

    let x = (window.innerWidth / 2) - 322 - 100  // center
    let y = 1900 / 2   // center
    let r = 900   // radius
    let a = 4.7 // angle (from 0 to Math.PI * 2)
    let a1 = 0
    let a2 = 1.5
    let a3 = 3


    const rotate = (_a, _a1, _a2, _a3) => {
        let elem = document.getElementById('DivTaskItemSC0')
        let elem1 = document.getElementById('DivTaskItemSC1')
        let elem2 = document.getElementById('DivTaskItemSC2')
        let elem3 = document.getElementById('DivTaskItemSC3')
        var px = x + r * Math.cos(_a); // <-- that's the maths you need
        var py = y + r * Math.sin(_a);
        var px1 = x + r * Math.cos(_a1); // <-- that's the maths you need
        var py1 = y + r * Math.sin(_a1);
        var px2 = x + r * Math.cos(_a2); // <-- that's the maths you need
        var py2 = y + r * Math.sin(_a2);
        var px3 = x + r * Math.cos(_a3); // <-- that's the maths you need
        var py3 = y + r * Math.sin(_a3);
        elem.style.left = px + "px";
        elem.style.top = py + "px";
        elem1.style.left = px1 + "px";
        elem1.style.top = py1 + "px";
        elem2.style.left = px2 + "px";
        elem2.style.top = py2 + "px";
        elem3.style.left = px3 + "px";
        elem3.style.top = py3 + "px";

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
        let timer
        setTimeout(() => {
            // clearInterval(timer)
            tempSCroll = false
            isSecond = true
        }, 2000)
        if (!tempSCroll) {
            // console.log('><><>>>>kirdro2', e.deltaY)
            clearInterval(timer)
            timer = setInterval(() => {
                // setIsScroll(!isScroll)
                a = (a + Math.PI / 360) % (Math.PI * 2);
                a1 = (a1 + Math.PI / 360) % (Math.PI * 2);
                a2 = (a2 + Math.PI / 360) % (Math.PI * 2);
                a3 = (a3 + Math.PI / 360) % (Math.PI * 2);
                tempSCroll = true
                if (isSecond) {
                    if (x + r * Math.cos(a) < -481
                        || x + r * Math.cos(a1) < -481
                        || x + r * Math.cos(a2) < -481
                        || x + r * Math.cos(a3) < -481
                    ) {
                        clearInterval(timer)
                        tempSCroll = false
                    }
                }

                rotate(a, a1, a2, a3);

            }, 10)


        }



        // setIsScroll(true)
        tempSCroll = true
        // console.log('><><>>>>kirdro4', tempSCroll)

        // a = (a + Math.PI / 360) % (Math.PI * 2);
        // a1 = (a1 + Math.PI / 360) % (Math.PI * 2);
        // a2 = (a2 + Math.PI / 360) % (Math.PI * 2);
        // a3 = (a3 + Math.PI / 360) % (Math.PI * 2);
        //
        // rotate(a, a1, a2, a3);
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
                        <ServicesItem
                            position={position}
                            id={0}
                            title={'Web/Mobile development'}
                        />
                        <ServicesItem
                            position={position1}
                            id={1}
                            title={'Web/Mobile development1'}
                        />
                        <ServicesItem
                            position={position2}
                            id={2}
                            title={'Web/Mobile development2'}
                        />
                        <ServicesItem
                            position={position3}
                            id={3}
                            title={'Web/Mobile development3'}
                        />

                    </DivBoxCarouselSC>

                </DivContentBoxRowsSC>
            </DivContainerSC>
        </DivWrapSC>
    );
};

export default Services;
