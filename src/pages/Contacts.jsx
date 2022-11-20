import React, { useContext, useEffect, useState } from "react";
import {
  DivWrapSC,
  DivContainerSC,
} from "../styled-components-css/styled-DEFAULT";
import { DivRuslanBoxSC } from "../styled-components-css/styled.kirdro";
import Konva from "konva";
import { Stage, Layer, Line, Circle } from "react-konva";
import Tools from "../tools/tools";
import {
  DivColumnsContentContacts,
  DivLeftPenalSC,
  DivRightPenalSC,
  DivBoxTextWriteToUsSC,
  DivTextWriteToUsSC,
  DivTextTelephoneSC,
  DivNumTelephoneSC,
  DivColumnsTelephoneSC,
  DivTextTelegramSC,
  DivNumTelegramSC,
  DivColumnsTelegramSC,
  DivColumnsemailSC,
  ImgBuddhaSC,
  DivDecLineSC,
  DivBoxBlurSC,
  DivRowsContentContacts,
  DivTopPenalSC,
  DivLineContactsSC,
} from "../styled-components-css/styled-contacts";
import GlobalDispatchContext from "../global_dispatch_context";

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
var gradient = ctx.createConicGradient(2, 4, 3, 6);
gradient.addColorStop(2 / 6, '#D815FF');
gradient.addColorStop(4 / 6, '#09BBF9');

var gradient2 = ctx.createConicGradient(2, 4, 5, 2);
gradient2.addColorStop(2 / 6, '#D815FF');
gradient2.addColorStop(5 / 6, '#09BBF9');

const PointsLine1 = [
  [0, 150, 610, 150],
  [610, 150, 640, 180],
  [640, 180, 890, 180],
  [890, 180, 950, 240],
  [950, 240, 950, 320],
  [950, 320, 970, 340],
];

const PointsLine2 = [
  [4000, 700, 1350, 700],
  [1350, 700, 1320, 670],
  [1320, 670, 1130, 670],
  [1130, 670, 1070, 610],
  [1070, 610, 1070, 520],
  [1070, 520, 1050, 500],
];
const PointsLine3 = [
  [0, 500, 550, 500],
  [550, 500, 620, 480],
  [620, 480, 880, 480],
  [880, 480, 1000, 440],
  [1000, 440, 1000, 380],
  [1000, 380, 1050, 360],
];
const Contacts = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isBlackBack, isPage, isAboutBack, isForm } = state;
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [pointsLine1, setPointsLine1] = useState(PointsLine1);
  const [pointsCircle1, setPointsCircle1] = useState({
    x: 0,
    y: 0,
  });

  const [pointsLine2, setPointsLine2] = useState(PointsLine2);
  const [pointsCircle2, setPointsCircle2] = useState({
    x: 0,
    y: 0,
  });
  const [pointsCircle3, setPointsCircle3] = useState({
    x: 0,
    y: 0,
  });
  const [pointsLine3, setPointsLine3] = useState(PointsLine2);

  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_IS_FORM",
      status: true,
    });
    return () => {
      dispatch({
        type: "SET_IS_FORM",
        status: false,
      });
    };
  }, [isForm]);
  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_IS_PAGE",
        status: "homePage",
      });
    };
  }, [isPage]);

  useEffect(() => {
    processCoords();
  }, []);

  useEffect(() => {
    var offsetHeight = document.getElementById("about-line-id").offsetHeight;
    var offsetWidth = document.getElementById("about-line-id").offsetWidth;

    setWidth(offsetWidth);
    setHeight(offsetHeight);
  }, [window.innerWidth]);

  const processCoords = () => {
    window.innerHeight=window.innerHeight;

    const coords = Tools.getResponseCoords(
      PointsLine1,
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      true,
      1920,
      900
    );
    const coordsLine2 = Tools.getResponseCoords(
      PointsLine2,
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      true,
      1920,
      900
    );
    const coordsLine3 = Tools.getResponseCoords(
      PointsLine3,
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      true,
      1920,
      900
    );
    let _coordsTemp = Tools.copy(coords);
      let _coordsTemp2 = Tools.copy(coordsLine2);
      let _coordsTemp3 = Tools.copy(coordsLine3);
    if (window.innerWidth >700){


      setPointsCircle1({
        x: coords[coords.length - 1][coords[coords.length - 1].length - 2],
        y: coords[coords.length - 1][coords[coords.length - 1].length - 1],
      });
      setPointsCircle2({
        x: coordsLine2[coordsLine2.length - 1][
          coordsLine2[coordsLine2.length - 1].length - 2
        ],
        y: coordsLine2[coordsLine2.length - 1][
          coordsLine2[coordsLine2.length - 1].length - 1
        ],
      });


      // setPointsLine1(coords)
      // setPointsLine2(coordsLine2)



      if (window.innerWidth <= 768) {
        _coordsTemp[0][2] = _coordsTemp[0][2] + 110;
        _coordsTemp[1][0] = _coordsTemp[1][0] + 110;
        _coordsTemp[1][2] = _coordsTemp[1][2] + 120;
        _coordsTemp[1][3] = _coordsTemp[1][3] - 10;
        _coordsTemp[2][0] = _coordsTemp[2][0] + 120;
        _coordsTemp[2][1] = _coordsTemp[2][1] - 10;
        _coordsTemp[2][2] = _coordsTemp[2][2] + 260;
        _coordsTemp[2][3] = _coordsTemp[2][3] - 10;
        _coordsTemp[3][0] = _coordsTemp[3][0] + 260;
        _coordsTemp[3][1] = _coordsTemp[3][1] - 10;
        _coordsTemp[3][2] = _coordsTemp[3][2] + 280;
        _coordsTemp[3][3] = _coordsTemp[3][3] - 30;
        _coordsTemp[4][0] = _coordsTemp[4][0] + 280;
        _coordsTemp[4][1] = _coordsTemp[4][1] - 30;
        _coordsTemp[4][2] = _coordsTemp[4][2] + 280;
        _coordsTemp[4][3] = _coordsTemp[4][3] - 50;
        _coordsTemp[5][0] = _coordsTemp[5][0] + 280;
        _coordsTemp[5][1] = _coordsTemp[5][1] - 50;
        _coordsTemp[5][2] = _coordsTemp[5][2] + 290;
        _coordsTemp[5][3] = _coordsTemp[5][3] - 50;
        setPointsCircle1({
          x:
            coords[coords.length - 1][coords[coords.length - 1].length - 2] + 290,
          y: coords[coords.length - 1][coords[coords.length - 1].length - 1] - 50,
        });
        _coordsTemp2 = _coordsTemp3;
        setPointsCircle2({
          x:
          coordsLine3[coordsLine3.length - 1][
            coordsLine3[coordsLine3.length - 1].length - 2
            ],
          y: coordsLine3[coordsLine3.length - 1][
            coordsLine3[coordsLine3.length - 1].length - 1
          ],
        });
      }
      if (window.innerWidth <= 675) {
        _coordsTemp[0][2] = _coordsTemp[0][2] - 30;
        _coordsTemp[1][0] = _coordsTemp[1][0] - 30;
        _coordsTemp[1][2] = _coordsTemp[1][2] - 30;
        _coordsTemp[1][3] = _coordsTemp[1][3] - 10;
        _coordsTemp[2][0] = _coordsTemp[2][0] - 30;
        _coordsTemp[2][1] = _coordsTemp[2][1] - 10;
        _coordsTemp[2][2] = _coordsTemp[2][2] - 60;
        _coordsTemp[2][3] = _coordsTemp[2][3] - 10;
        _coordsTemp[3][0] = _coordsTemp[3][0] - 60;
        _coordsTemp[3][1] = _coordsTemp[3][1] - 10;
        _coordsTemp[3][2] = _coordsTemp[3][2] - 70;
        _coordsTemp[3][3] = _coordsTemp[3][3] - 30;
        _coordsTemp[4][0] = _coordsTemp[4][0] - 70;
        _coordsTemp[4][1] = _coordsTemp[4][1] - 30;
        _coordsTemp[4][2] = _coordsTemp[4][2] - 70;
        _coordsTemp[4][3] = _coordsTemp[4][3] - 50;
        _coordsTemp[5][0] = _coordsTemp[5][0] - 70;
        _coordsTemp[5][1] = _coordsTemp[5][1] - 50;
        _coordsTemp[5][2] = _coordsTemp[5][2] - 70;
        _coordsTemp[5][3] = _coordsTemp[5][3] - 60;
        setPointsCircle1({
          x:
            coords[coords.length - 1][coords[coords.length - 1].length - 2] + 220,
          y:
            coords[coords.length - 1][coords[coords.length - 1].length - 1] - 110,
        });
        _coordsTemp2 = _coordsTemp3;
        setPointsCircle2({
          x:
          coordsLine3[coordsLine3.length - 1][
              coordsLine3[coordsLine3.length - 1].length - 2
            ],
          y: coordsLine3[coordsLine3.length - 1][
            coordsLine3[coordsLine3.length - 1].length - 1
          ],
        });
      }
      // console.log(">>><>>><>", coords, _coordsTemp);
      setPointsLine1(_coordsTemp);
      setPointsLine2(_coordsTemp2);
      setPointsLine3(_coordsTemp3);

    }
    else{
      const coords = Tools.getResponseCoords(
        PointsLine1,
        {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        true,
        1920,
        900
      );
      const coordsLine2 = Tools.getResponseCoords(
        PointsLine2,
        {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        true,
        1920,
        900
      );
      const coordsLine3 = Tools.getResponseCoords(
        PointsLine3,
        {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        true,
        1920,
        900
      );

      setPointsCircle1({
        x: coords[coords.length - 1][coords[coords.length - 1].length - 2],
        y: coords[coords.length - 1][coords[coords.length - 1].length - 1],
      });
      setPointsCircle2({
        x: coordsLine2[coordsLine2.length - 1][
          coordsLine2[coordsLine2.length - 1].length - 2
        ],
        y: coordsLine2[coordsLine2.length - 1][
          coordsLine2[coordsLine2.length - 1].length - 1
        ],
      });


      // setPointsLine1(coords)
      // setPointsLine2(coordsLine2)


      let _coordsTemp = Tools.copy(coords);
      let _coordsTemp2 = Tools.copy(coordsLine2);
      let _coordsTemp3 = Tools.copy(coordsLine3);
      if (window.innerWidth <= 768) {
        _coordsTemp[0][2] = _coordsTemp[0][2] + 110;
        _coordsTemp[1][0] = _coordsTemp[1][0] + 110;
        _coordsTemp[1][2] = _coordsTemp[1][2] + 120;
        _coordsTemp[1][3] = _coordsTemp[1][3] - 10;
        _coordsTemp[2][0] = _coordsTemp[2][0] + 120;
        _coordsTemp[2][1] = _coordsTemp[2][1] - 10;
        _coordsTemp[2][2] = _coordsTemp[2][2] + 260;
        _coordsTemp[2][3] = _coordsTemp[2][3] - 10;
        _coordsTemp[3][0] = _coordsTemp[3][0] + 260;
        _coordsTemp[3][1] = _coordsTemp[3][1] - 10;
        _coordsTemp[3][2] = _coordsTemp[3][2] + 280;
        _coordsTemp[3][3] = _coordsTemp[3][3] - 30;
        _coordsTemp[4][0] = _coordsTemp[4][0] + 280;
        _coordsTemp[4][1] = _coordsTemp[4][1] - 30;
        _coordsTemp[4][2] = _coordsTemp[4][2] + 280;
        _coordsTemp[4][3] = _coordsTemp[4][3] - 50;
        _coordsTemp[5][0] = _coordsTemp[5][0] + 280;
        _coordsTemp[5][1] = _coordsTemp[5][1] - 50;
        _coordsTemp[5][2] = _coordsTemp[5][2] + 290;
        _coordsTemp[5][3] = _coordsTemp[5][3] - 50;
        setPointsCircle1({
          x:
            coords[coords.length - 1][coords[coords.length - 1].length - 2] + 290,
          y: coords[coords.length - 1][coords[coords.length - 1].length - 1] - 50,
        });
        _coordsTemp2 = _coordsTemp3;
        setPointsCircle2({
          x:
          coordsLine3[coordsLine3.length - 1][
            coordsLine3[coordsLine3.length - 1].length - 2
            ],
          y: coordsLine3[coordsLine3.length - 1][
            coordsLine3[coordsLine3.length - 1].length - 1
          ],
        });
      }
      if (window.innerWidth <= 675) {
        _coordsTemp[0][2] = _coordsTemp[0][2] - 30;
        _coordsTemp[1][0] = _coordsTemp[1][0] - 30;
        _coordsTemp[1][2] = _coordsTemp[1][2] - 30;
        _coordsTemp[1][3] = _coordsTemp[1][3] - 10;
        _coordsTemp[2][0] = _coordsTemp[2][0] - 30;
        _coordsTemp[2][1] = _coordsTemp[2][1] - 10;
        _coordsTemp[2][2] = _coordsTemp[2][2] - 60;
        _coordsTemp[2][3] = _coordsTemp[2][3] - 10;
        _coordsTemp[3][0] = _coordsTemp[3][0] - 60;
        _coordsTemp[3][1] = _coordsTemp[3][1] - 10;
        _coordsTemp[3][2] = _coordsTemp[3][2] - 70;
        _coordsTemp[3][3] = _coordsTemp[3][3] - 30;
        _coordsTemp[4][0] = _coordsTemp[4][0] - 70;
        _coordsTemp[4][1] = _coordsTemp[4][1] - 30;
        _coordsTemp[4][2] = _coordsTemp[4][2] - 70;
        _coordsTemp[4][3] = _coordsTemp[4][3] - 50;
        _coordsTemp[5][0] = _coordsTemp[5][0] - 70;
        _coordsTemp[5][1] = _coordsTemp[5][1] - 50;
        _coordsTemp[5][2] = _coordsTemp[5][2] - 70;
        _coordsTemp[5][3] = _coordsTemp[5][3] - 60;
        setPointsCircle1({
          x:
            coords[coords.length - 1][coords[coords.length - 1].length - 2] + 220,
          y:
            coords[coords.length - 1][coords[coords.length - 1].length - 1] - 110,
        });
        _coordsTemp2 = _coordsTemp3;
        setPointsCircle2({
          x:
          coordsLine3[coordsLine3.length - 1][
              coordsLine3[coordsLine3.length - 1].length - 2
            ],
          y: coordsLine3[coordsLine3.length - 1][
            coordsLine3[coordsLine3.length - 1].length - 1
          ],
        });
      }
      // console.log(">>><>>><>", coords, _coordsTemp);
      setPointsLine1(_coordsTemp);
      setPointsLine2(_coordsTemp2);
      setPointsLine3(_coordsTemp3);
      setSize({
        width: window.innerWidth,
        height: (window.innerHeight = 700),
    });

    }


    window.addEventListener(
      "resize",
      function (event) {
        const coords2 = Tools.getResponseCoords(
          PointsLine1,
          {
            width: event.target.innerWidth,
            height: event.target.innerHeight,
          },
          true,
          1920,
          900
        );
        const _coordsLine2 = Tools.getResponseCoords(
          PointsLine2,
          {
            width: window.innerWidth,
            height: window.innerHeight,
          },
          true,
          1920,
          900
        );
        const _coordsLine3 = Tools.getResponseCoords(
          PointsLine3,
          {
            width: window.innerWidth,
            height: window.innerHeight,
          },
          true,
          1920,
          900
        );
        let _coordsTemp1 = Tools.copy(coords2);
        let _coordsTemp22 = Tools.copy(_coordsLine2);
        let _coordsTemp33 = Tools.copy(_coordsLine3);
        if(event.target.innerHeight > 700){

          setPointsCircle1({
            x: coords2[coords2.length - 1][
              coords2[coords2.length - 1].length - 2
            ],
            y: coords2[coords2.length - 1][
              coords2[coords2.length - 1].length - 1
            ],
          });
          setPointsCircle2({
            x: _coordsLine2[_coordsLine2.length - 1][
              _coordsLine2[_coordsLine2.length - 1].length - 2
            ],
            y: _coordsLine2[_coordsLine2.length - 1][
              _coordsLine2[_coordsLine2.length - 1].length - 1
            ],
          });

          if (event.target.innerWidth <= 768) {
            _coordsTemp1[0][2] = _coordsTemp1[0][2] + 110;
            _coordsTemp1[1][0] = _coordsTemp1[1][0] + 110;
            _coordsTemp1[1][2] = _coordsTemp1[1][2] + 120;
            _coordsTemp1[1][3] = _coordsTemp1[1][3] - 10;
            _coordsTemp1[2][0] = _coordsTemp1[2][0] + 120;
            _coordsTemp1[2][1] = _coordsTemp1[2][1] - 10;
            _coordsTemp1[2][2] = _coordsTemp1[2][2] + 260;
            _coordsTemp1[2][3] = _coordsTemp1[2][3] - 10;
            _coordsTemp1[3][0] = _coordsTemp1[3][0] + 260;
            _coordsTemp1[3][1] = _coordsTemp1[3][1] - 10;
            _coordsTemp1[3][2] = _coordsTemp1[3][2] + 280;
            _coordsTemp1[3][3] = _coordsTemp1[3][3] - 30;
            _coordsTemp1[4][0] = _coordsTemp1[4][0] + 280;
            _coordsTemp1[4][1] = _coordsTemp1[4][1] - 30;
            _coordsTemp1[4][2] = _coordsTemp1[4][2] + 280;
            _coordsTemp1[4][3] = _coordsTemp1[4][3] - 50;
            _coordsTemp1[5][0] = _coordsTemp1[5][0] + 280;
            _coordsTemp1[5][1] = _coordsTemp1[5][1] - 50;
            _coordsTemp1[5][2] = _coordsTemp1[5][2] + 290;
            _coordsTemp1[5][3] = _coordsTemp1[5][3] - 50;
            setPointsCircle1({
              x:
                coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2] +
                290,
              y:
                coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1] -
                50,
            });
            _coordsTemp22 = _coordsTemp33;
            setPointsCircle2({
              x:
              _coordsLine3[_coordsLine3.length - 1][
                _coordsLine3[_coordsLine3.length - 1].length - 2
                ],
              y: _coordsLine3[_coordsLine3.length - 1][
                _coordsLine3[_coordsLine3.length - 1].length - 1
              ],
            });
          }
          if (event.target.innerWidth <= 675) {
            _coordsTemp1[0][2] = _coordsTemp1[0][2] - 30;
            _coordsTemp1[1][0] = _coordsTemp1[1][0] - 30;
            _coordsTemp1[1][2] = _coordsTemp1[1][2] - 30;
            _coordsTemp1[1][3] = _coordsTemp1[1][3] - 10;
            _coordsTemp1[2][0] = _coordsTemp1[2][0] - 30;
            _coordsTemp1[2][1] = _coordsTemp1[2][1] - 10;
            _coordsTemp1[2][2] = _coordsTemp1[2][2] - 60;
            _coordsTemp1[2][3] = _coordsTemp1[2][3] - 10;
            _coordsTemp1[3][0] = _coordsTemp1[3][0] - 60;
            _coordsTemp1[3][1] = _coordsTemp1[3][1] - 10;
            _coordsTemp1[3][2] = _coordsTemp1[3][2] - 70;
            _coordsTemp1[3][3] = _coordsTemp1[3][3] - 30;
            _coordsTemp1[4][0] = _coordsTemp1[4][0] - 70;
            _coordsTemp1[4][1] = _coordsTemp1[4][1] - 30;
            _coordsTemp1[4][2] = _coordsTemp1[4][2] - 70;
            _coordsTemp1[4][3] = _coordsTemp1[4][3] - 50;
            _coordsTemp1[5][0] = _coordsTemp1[5][0] - 70;
            _coordsTemp1[5][1] = _coordsTemp1[5][1] - 50;
            _coordsTemp1[5][2] = _coordsTemp1[5][2] - 70;
            _coordsTemp1[5][3] = _coordsTemp1[5][3] - 60;
            setPointsCircle1({
              x:
              coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2] +
                220,
              y:
              coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1] -
                110,
            });
            _coordsTemp22 = _coordsTemp33;
            setPointsCircle2({
              x:
              _coordsLine3[_coordsLine3.length - 1][
                _coordsLine3[_coordsLine3.length - 1].length - 2
                ],
              y: _coordsLine3[_coordsLine3.length - 1][
                _coordsLine3[_coordsLine3.length - 1].length - 1
              ],
            });
          }
          // console.log(">>><>>><>", coords, _coordsTemp);
          setPointsLine1(_coordsTemp);
          setPointsLine2(_coordsTemp2);

          if (event.target.innerWidth <= 650) {
            coords2[1][1] = coords2[1][1] + 10;
            coords2[2][0] = coords2[2][0] + 10;
          }
          setPointsLine1(_coordsTemp1);
          setPointsLine2(_coordsTemp22);
          // console.log('><><><><><>', event.target.outerWidth)
          setSize({
            width: event.target.innerWidth,
            height: event.target.innerHeight,
          });

        }
        else{
          const coords2 = Tools.getResponseCoords(
            PointsLine1,
            {
              width: event.target.innerWidth,
              height: event.target.innerHeight,
            },
            true,
            1920,
            900
          );
          const _coordsLine2 = Tools.getResponseCoords(
            PointsLine2,
            {
              width: window.innerWidth,
              height: window.innerHeight,
            },
            true,
            1920,
            900
          );
          const _coordsLine3 = Tools.getResponseCoords(
            PointsLine3,
            {
              width: window.innerWidth,
              height: window.innerHeight,
            },
            true,
            1920,
            900
          );
          setPointsCircle1({
            x: coords2[coords2.length - 1][
              coords2[coords2.length - 1].length - 2
            ],
            y: coords2[coords2.length - 1][
              coords2[coords2.length - 1].length - 1
            ],
          });
          setPointsCircle2({
            x: _coordsLine2[_coordsLine2.length - 1][
              _coordsLine2[_coordsLine2.length - 1].length - 2
            ],
            y: _coordsLine2[_coordsLine2.length - 1][
              _coordsLine2[_coordsLine2.length - 1].length - 1
            ],
          });
          let _coordsTemp1 = Tools.copy(coords2);
          let _coordsTemp22 = Tools.copy(_coordsLine2);
          let _coordsTemp33 = Tools.copy(_coordsLine3);
          if (event.target.innerWidth <= 768) {
            _coordsTemp1[0][2] = _coordsTemp1[0][2] + 110;
            _coordsTemp1[1][0] = _coordsTemp1[1][0] + 110;
            _coordsTemp1[1][2] = _coordsTemp1[1][2] + 120;
            _coordsTemp1[1][3] = _coordsTemp1[1][3] - 10;
            _coordsTemp1[2][0] = _coordsTemp1[2][0] + 120;
            _coordsTemp1[2][1] = _coordsTemp1[2][1] - 10;
            _coordsTemp1[2][2] = _coordsTemp1[2][2] + 260;
            _coordsTemp1[2][3] = _coordsTemp1[2][3] - 10;
            _coordsTemp1[3][0] = _coordsTemp1[3][0] + 260;
            _coordsTemp1[3][1] = _coordsTemp1[3][1] - 10;
            _coordsTemp1[3][2] = _coordsTemp1[3][2] + 280;
            _coordsTemp1[3][3] = _coordsTemp1[3][3] - 30;
            _coordsTemp1[4][0] = _coordsTemp1[4][0] + 280;
            _coordsTemp1[4][1] = _coordsTemp1[4][1] - 30;
            _coordsTemp1[4][2] = _coordsTemp1[4][2] + 280;
            _coordsTemp1[4][3] = _coordsTemp1[4][3] - 50;
            _coordsTemp1[5][0] = _coordsTemp1[5][0] + 280;
            _coordsTemp1[5][1] = _coordsTemp1[5][1] - 50;
            _coordsTemp1[5][2] = _coordsTemp1[5][2] + 290;
            _coordsTemp1[5][3] = _coordsTemp1[5][3] - 50;
            setPointsCircle1({
              x:
                coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2] +
                290,
              y:
                coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1] -
                50,
            });
            _coordsTemp22 = _coordsTemp33;
            setPointsCircle2({
              x:
              _coordsLine3[_coordsLine3.length - 1][
                _coordsLine3[_coordsLine3.length - 1].length - 2
                ],
              y: _coordsLine3[_coordsLine3.length - 1][
                _coordsLine3[_coordsLine3.length - 1].length - 1
              ],
            });
          }
          if (event.target.innerWidth <= 675) {
            _coordsTemp1[0][2] = _coordsTemp1[0][2] - 30;
            _coordsTemp1[1][0] = _coordsTemp1[1][0] - 30;
            _coordsTemp1[1][2] = _coordsTemp1[1][2] - 30;
            _coordsTemp1[1][3] = _coordsTemp1[1][3] - 10;
            _coordsTemp1[2][0] = _coordsTemp1[2][0] - 30;
            _coordsTemp1[2][1] = _coordsTemp1[2][1] - 10;
            _coordsTemp1[2][2] = _coordsTemp1[2][2] - 60;
            _coordsTemp1[2][3] = _coordsTemp1[2][3] - 10;
            _coordsTemp1[3][0] = _coordsTemp1[3][0] - 60;
            _coordsTemp1[3][1] = _coordsTemp1[3][1] - 10;
            _coordsTemp1[3][2] = _coordsTemp1[3][2] - 70;
            _coordsTemp1[3][3] = _coordsTemp1[3][3] - 30;
            _coordsTemp1[4][0] = _coordsTemp1[4][0] - 70;
            _coordsTemp1[4][1] = _coordsTemp1[4][1] - 30;
            _coordsTemp1[4][2] = _coordsTemp1[4][2] - 70;
            _coordsTemp1[4][3] = _coordsTemp1[4][3] - 50;
            _coordsTemp1[5][0] = _coordsTemp1[5][0] - 70;
            _coordsTemp1[5][1] = _coordsTemp1[5][1] - 50;
            _coordsTemp1[5][2] = _coordsTemp1[5][2] - 70;
            _coordsTemp1[5][3] = _coordsTemp1[5][3] - 60;
            setPointsCircle1({
              x:
              coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2] +
                220,
              y:
              coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1] -
                110,
            });
            _coordsTemp22 = _coordsTemp33;
            setPointsCircle2({
              x:
              _coordsLine3[_coordsLine3.length - 1][
                _coordsLine3[_coordsLine3.length - 1].length - 2
                ],
              y: _coordsLine3[_coordsLine3.length - 1][
                _coordsLine3[_coordsLine3.length - 1].length - 1
              ],
            });
          }
          // console.log(">>><>>><>", coords, _coordsTemp);
          setPointsLine1(_coordsTemp);
          setPointsLine2(_coordsTemp2);

          if (event.target.innerWidth <= 650) {
            coords2[1][1] = coords2[1][1] + 10;
            coords2[2][0] = coords2[2][0] + 10;
          }
          setPointsLine1(_coordsTemp1);
          setPointsLine2(_coordsTemp22);
          // console.log('><><><><><>', event.target.outerWidth)
          setSize({
            width: event.target.innerWidth,
            height: event.target.innerHeight=700,
          });
        }
        // console.log('>>><><>>>>><><>', event.target.innerHeight, event.target.outerHeight)

      },
      true
    );
  };

  return (
    <>
      {window.innerWidth > 480 ? (
        <DivLineContactsSC>
          <Stage width={size.width} height={size.height}>
            <Layer>
              {Tools.drawLine(pointsLine1)}
              <Circle
                x={pointsCircle1.x}
                y={pointsCircle1.y}
                radius={5}
                fill={gradient}
              />
            </Layer>

            <Layer>
              {Tools.drawLine(pointsLine2)}
              <Circle
                x={pointsCircle2.x}
                y={pointsCircle2.y}
                radius={5}
                fill={gradient2}
              />
            </Layer>
          </Stage>
        </DivLineContactsSC>
      ) : null}

      <DivWrapSC>
        <DivContainerSC>
          <DivRowsContentContacts>
            <DivLeftPenalSC>
              <DivBoxTextWriteToUsSC>
                <DivTextWriteToUsSC to="#">
                  WRITE TO US
                  <DivDecLineSC />
                </DivTextWriteToUsSC>
              </DivBoxTextWriteToUsSC>
              {/* <DivTopPenalSC>
              <DivBoxBlurSC></DivBoxBlurSC>
            <ImgBuddhaSC />
            </DivTopPenalSC> */}
            </DivLeftPenalSC>
            <DivRightPenalSC>
              <DivColumnsTelephoneSC>
                <DivTextTelephoneSC>telephone:</DivTextTelephoneSC>
                <DivNumTelephoneSC>+1(775) 5020434</DivNumTelephoneSC>
              </DivColumnsTelephoneSC>

              <DivColumnsTelegramSC>
                <DivTextTelegramSC>telegram:</DivTextTelegramSC>
                <DivNumTelegramSC>@obscuradox</DivNumTelegramSC>
              </DivColumnsTelegramSC>

              <DivColumnsemailSC>
                <DivTextTelegramSC>e-mail:</DivTextTelegramSC>
                <DivNumTelegramSC>cyberzenlabs@gmail.com</DivNumTelegramSC>
              </DivColumnsemailSC>
            </DivRightPenalSC>
          </DivRowsContentContacts>

          <DivColumnsContentContacts>
            <DivLeftPenalSC>
              <DivBoxTextWriteToUsSC>
                <DivTextWriteToUsSC to="#">
                  WRITE TO US
                  <DivDecLineSC />
                </DivTextWriteToUsSC>
              </DivBoxTextWriteToUsSC>
              <DivColumnsTelephoneSC>
                <DivTextTelephoneSC>telephone:</DivTextTelephoneSC>
                <DivNumTelephoneSC>+1(775) 5020434</DivNumTelephoneSC>
              </DivColumnsTelephoneSC>

              <DivColumnsTelegramSC>
                <DivTextTelegramSC>telegram:</DivTextTelegramSC>
                <DivNumTelegramSC>@obscuradox</DivNumTelegramSC>
              </DivColumnsTelegramSC>

              <DivColumnsemailSC>
                <DivTextTelegramSC>e-mail:</DivTextTelegramSC>
                <DivNumTelegramSC>cyberzenlabs@gmail.com</DivNumTelegramSC>
              </DivColumnsemailSC>
            </DivLeftPenalSC>
            <DivRightPenalSC>
              {/* <DivBoxBlurSC></DivBoxBlurSC> */}
              {/* <ImgBuddhaSC></ImgBuddhaSC> */}
            </DivRightPenalSC>
          </DivColumnsContentContacts>
        </DivContainerSC>
      </DivWrapSC>
    </>
  );
};

export default Contacts;
