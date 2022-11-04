import React from 'react';
import {DivTaskItemContentSC, DivTaskItemContentTempSC, DivTaskItemSC} from "../styled-components-css/styled-services";

const ServicesItem = (props) => {
    const {
        position,
        id
    } = props

    return (

        <DivTaskItemSC id={'DivTaskItemSC' + id} position={position}>
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