import React from 'react';
import {DivTaskItemContentSC, DivTaskItemContentTempSC, DivTaskItemSC} from "../styled-components-css/styled-services";

const ServicesItem = (props) => {
    const {
        position,
        id,
        title
    } = props

    return (

        <DivTaskItemSC id={'DivTaskItemSC' + id} position={position}>
            <DivTaskItemContentSC className={'DivTaskItemContentSC'}>
                {title}
            </DivTaskItemContentSC>
            <DivTaskItemContentTempSC className={'cybr-btn__glitch'}>
                {title}
            </DivTaskItemContentTempSC>

        </DivTaskItemSC>
    );
};

export default ServicesItem;