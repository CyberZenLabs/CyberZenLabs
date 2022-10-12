import {Line} from "react-konva";
import React from "react";


const ToolsBlack = {
    drowLine: (pointsLine) => {
        const componentNode = pointsLine.map((item, i) => {
            return(
                <Line
                    key={`wqadfs${i}`}
                    points={item}
                    stroke="#F61067"
                    strokeWidth={1}
                    tension={0.5}
                    lineCap="square"
                    lineJoin="bevel"
                    bezier={false}
                    // globalCompositeOperation={
                    //     'source-over'
                    // }
                />
            )
        })
        return (
            componentNode
        )
    }
}

export default ToolsBlack