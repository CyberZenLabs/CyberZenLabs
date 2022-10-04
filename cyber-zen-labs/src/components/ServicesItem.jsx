import React from 'react';
import {DivTaskItemContentSC, DivTaskItemContentTempSC, DivTaskItemSC} from "../styled-components-css/styled-services";

const ServicesItem = () => {
    return (

        <DivTaskItemSC>
            <DivTaskItemContentSC className={'DivTaskItemContentSC'}>
               Web/Mobile development
            </DivTaskItemContentSC>
            <DivTaskItemContentTempSC className={'cybr-btn__glitch'}>
                Web/Mobile development
            </DivTaskItemContentTempSC>

        </DivTaskItemSC>
    );
};

export default ServicesItem;