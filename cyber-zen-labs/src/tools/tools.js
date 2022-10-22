import { Line } from "react-konva";
import React from "react";

const Tools = {
  drawLine: (pointsLine) => {
    const componentNode = pointsLine.map((item, i) => {
      return (
        <Line
          stoke="linear-gradient(270deg, #D815FF 0%, #09BBF9 102.1%)"
          key={`wqadfs${i}`}
          points={item}
          stroke="#ffffff"
          strokeWidth={1}
          tension={0.5}
          lineCap="square"
          lineJoin="bevel"
          bezier={false}
          shadowColor={"#A557E5"}
          shadowBlur={10}
          shadowOffset={{ x: 10, y: 10 }}
          shadowOpacity={1}
          // globalCompositeOperation={
          //     'source-over'
          // }
        />
      );
    });
    return componentNode;
  },
  drawLineBlack: (pointsLine) => {
    const componentNode = pointsLine.map((item, i) => {
      return (
        <Line
          key={`wqhfghs${i}`}
          points={item}
          stroke="#F61067"
          strokeWidth={1}
          tension={0.5}
          lineCap="square"
          lineJoin="bevel"
          bezier={false}
          shadowColor={"#f61067"}
          shadowBlur={5}
          // globalCompositeOperation={
          //     'source-over'
          // }
        />
      );
    });
    return componentNode;
  },
  LineBlack: (pointsLine) => {
    const componentNode = pointsLine.map((item, i) => {
      return (
        <Line
          key={`wqadfs${i}`}
          points={item}
          stroke="black"
          strokeWidth={1}
          tension={0.5}
          lineCap="square"
          lineJoin="bevel"
          bezier={false}
          // globalCompositeOperation={
          //     'source-over'
          // }
        />
      );
    });
    return componentNode;
  },
  getResponseCoords: (coords, size, isResponse = true) => {
    let newArray = coords;
    
    if (isResponse) {
      const defaultWidth = 1920;
      const defaultHeight = 900;
      const _coords = Tools.formatToXY(coords);
      let arrayCoefficient = Tools.getCoefficientList(_coords, {
        x: defaultWidth,
        y: defaultHeight,
      });

      const arrayCoordsXY = Tools.getCoordsAfterResponse(
        arrayCoefficient,
        size
      );
      newArray = Tools.formatToArray(arrayCoordsXY, coords);
    }

    // console.log('<><><><>>>', arrayCoordsXY, _coords)

    return newArray;
  },
  getCoefficientList: (coords, defaultSize) => {
    let array = [];
    coords.forEach((item, i) => {
      array.push({
        x: [],
        y: [],
      });
      item.x.forEach((_item, _i) => {
        array[array.length - 1].x.push(defaultSize.x / _item);
      });
      item.y.forEach((_item, _i) => {
        array[array.length - 1].y.push(defaultSize.y / _item);
      });
    });

    return array;
  },
  formatToXY: (coords) => {
    let array = [];
    coords.forEach((item, i) => {
      array.push({
        x: [],
        y: [],
      });
      item.forEach((_item, _i) => {
        if (_i % 2 === 0) {
          array[array.length - 1]?.x.push(_item);
        } else {
          array[array.length - 1]?.y.push(_item);
        }
      });
    });
    return array;
  },
  getCoordsAfterResponse: (coefficientList, size) => {
    let coords = [];

    coefficientList.forEach((item, i) => {
      coords.push({
        x: [],
        y: [],
      });
      item.x.forEach((_item, _i) => {
        coords[coords.length - 1]?.x.push(
          _item === Infinity ? 0 : size.width / _item
        );
      });
      item.y.forEach((_item, _i) => {
        coords[coords.length - 1]?.y.push(
          _item === Infinity ? 0 : size.height / _item
        );
      });
    });

    return coords;
  },
  formatToArray: (coords, defaultCoords) => {
    let array = [];
    let _array = [];

    for (var i = 0; i < defaultCoords.length; i++) {
      array.push([]);
      for (var j = 0; j < defaultCoords[i].length; j++) {
        array[array.length - 1].push(0);
      }
    }

    coords.forEach((item, i) => {
      _array.push([]);
      item.y.forEach((_item, _i) => {
        array[i][_i + _i + 1] = _item;
      });
      item.x.forEach((_item, _i) => {
        array[i][_i * 2] = _item;
      });
    });
    return array;
  },
};

export default Tools;
