import {Line} from "react-konva";
import React from "react";


const Tools = {
    drowLine: (pointsLine) => {
        const componentNode = pointsLine.map((item, i) => {
            return(
                <Line
                    key={`wqadfs${i}`}
                    points={item}
                    stroke="#ffffff"
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

export default Tools