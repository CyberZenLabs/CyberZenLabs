import React from 'react';
import {DivTaskItemContentSC, DivTaskItemContentTempSC, DivTaskItemSC} from "../styled-components-css/styled-services";

const ServicesItem = (props) => {
    const {
        position,
        id,
        title,
        size
    } = props

    return (

        <DivTaskItemSC id={'DivTaskItemSC' + id} position={position} >
            <DivTaskItemContentSC className={'DivTaskItemContentSC'} size={size}>
                {title}
            </DivTaskItemContentSC>
            <DivTaskItemContentTempSC className={'cybr-btn__glitch'}>
                {title}
            </DivTaskItemContentTempSC>

        </DivTaskItemSC>
    );
};

export default ServicesItem;