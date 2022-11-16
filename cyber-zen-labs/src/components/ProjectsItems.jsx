import React from 'react';
import GeoEco from "../images/GeoEco.png"
import {DivTaskItemContentSC, DivTaskItemContentTempSC, DivTaskItemSC,DivImgProject,DivGridProject,DivTextProject,DivDescriptionProject} from "../styled-components-css/styled-projects";

const ProjectsItem = (props) => {
    const {
        position,
        id
    } = props

    return (

        <DivTaskItemSC id={'DivTaskItemSC' + id} position={position}>
            <DivTaskItemContentSC className={'DivTaskItemContentSC'}>
            <DivImgProject></DivImgProject>
               <DivGridProject>
              
                <DivTextProject>GeoEco</DivTextProject>
                <DivDescriptionProject>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci quam eu amet massa viverra.</DivDescriptionProject>
               </DivGridProject>
            </DivTaskItemContentSC>
        </DivTaskItemSC>
    );
};

export default ProjectsItem;