import {useState, useContext, useEffect} from "react";
import {
    DivContainerAboutSC,
    DivWrapMenuSC,
    GridContentSC,
    DivLineBurgerMenuSC,

} from "../styled-components-css/styled-About";
import {SpanTextElementMenuSC} from "../styled-components-css/styled-menu";
import GlobalDispatchContext from "../global_dispatch_context";
import {Stage, Layer, Line, Circle} from "react-konva";
import Tools from "../tools/tools";
import useSound from 'use-sound';
import Sfx from '../audio/footerEfx.wav';
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
var gradient = ctx.createConicGradient(2, 4, 3, 6);
gradient.addColorStop(2 / 6, '#D815FF');
gradient.addColorStop(4 / 6, '#09BBF9');

var gradient2 = ctx.createConicGradient(2, 4, 5, 2);
gradient2.addColorStop(2 / 6, '#D815FF');
gradient2.addColorStop(5 / 6, '#09BBF9');

var gradient3 = ctx.createConicGradient(2, 1, 0, 2);
gradient3.addColorStop(1 / 6, '#D815FF');
gradient3.addColorStop(5 / 6, '#09BBF9');
const PointsLine1 = [
    [0, 580, 360, 580],
    [361, 580, 391, 550],
    [391, 550, 620, 550],
    [621, 550, 661, 510],
    [661, 510, 661, 425],
    [661, 424, 681, 404],
];

const PointsLine2 = [
    [1920, 845, 1650, 845],
    [1650, 845, 1620, 815],
    [1620, 815, 1360, 815],
    [1360, 815, 1320, 775],
    [1320, 775, 1320, 685],
    [1320, 685, 1300, 665],

];
const PointsLine3 = [
    [1920, 195, 1550, 195],
    [1550, 195, 1520, 225],
    [1520, 225, 1275, 225],
    [1275, 225, 1235, 265],
    [1235, 265, 1235, 340],
    [1235, 340, 1215, 360],
];

const BurgerMenu = () => {
    window.innerHeight=window.innerHeight;
    const {state, dispatch} = useContext(GlobalDispatchContext);
    const {isBlackBack, isPage} = state;
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [pointsLine1, setPointsLine1] = useState(PointsLine1)
    const [pointsCircle1, setPointsCircle1] = useState({
        x: 0,
        y: 0
    })
    const [pointsLine2, setPointsLine2] = useState(PointsLine2)
    const [pointsCircle2, setPointsCircle2] = useState({
        x: 0,
        y: 0
    })
    const [pointsLine3, setPointsLine3] = useState(PointsLine3)
    const [pointsCircle3, setPointsCircle3] = useState({
        x: 0,
        y: 0
    })
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    useEffect(() => {
        return () => {
            dispatch({
                type: "SET_IS_PAGE",
                status: "sound",
            });
        };
    }, [isPage]);
    useEffect(() => {
        processCoords()
    }, [])
    useEffect(() => {
        var offsetHeight = document.getElementById('about-line-id').offsetHeight;
        var offsetWidth = document.getElementById('about-line-id').offsetWidth;

        setWidth(offsetWidth);
        setHeight(offsetHeight);
    }, [window.innerWidth]);

    const processCoords = () => {

        console.log('>>><><>>>>><><>', pointsLine2)
        const coords = Tools.getResponseCoords(PointsLine1, {
            width: window.innerWidth,
            height: window.innerHeight
        }, true, 1920, 900);
        const coordsLine2 = Tools.getResponseCoords(PointsLine2, {
            width: window.innerWidth,
            height: window.innerHeight
        }, true, 1920, 900);
        const coordsLine3 = Tools.getResponseCoords(PointsLine3, {
            width: window.innerWidth,
            height: window.innerHeight
        }, true, 1920, 900);
        setPointsCircle1({
            x: coords[coords.length - 1][coords[coords.length - 1].length - 2],
            y: coords[coords.length - 1][coords[coords.length - 1].length - 1]
        })
        setPointsCircle2(
            {
                x: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 2],
                y: coordsLine2[coordsLine2.length - 1][coordsLine2[coordsLine2.length - 1].length - 1]
            }
        )
        setPointsCircle3(
            {
                x: coordsLine3[coordsLine3.length - 1][coordsLine3[coordsLine3.length - 1].length - 2],
                y: coordsLine3[coordsLine3.length - 1][coordsLine3[coordsLine3.length - 1].length - 1]
            }
        )

let _coordsTemp = Tools.copy(coords)
let _coordsTemp2 = Tools.copy(coordsLine2)
let _coordsTemp3 = Tools.copy(coordsLine3)

if (window.innerWidth <= 1550) {

    _coordsTemp[0][2] = _coordsTemp[0][2] - 100
    _coordsTemp[1][2] = _coordsTemp[1][2] - 100
    _coordsTemp[1][0] = _coordsTemp[1][0] - 100
    _coordsTemp[2][0] = _coordsTemp[2][0] - 100
    _coordsTemp[2][2] = _coordsTemp[2][2] - 100
    _coordsTemp[3][0] = _coordsTemp[3][0] - 100
    _coordsTemp[3][2] = _coordsTemp[3][2] - 100
    _coordsTemp[4][0] = _coordsTemp[4][0] - 100
    _coordsTemp[4][2] = _coordsTemp[4][2] - 100
    _coordsTemp[5][0] = _coordsTemp[5][0] - 100
    _coordsTemp[5][2] = _coordsTemp[5][2] - 100

    setPointsCircle1({
        x: _coordsTemp[_coordsTemp.length - 1][_coordsTemp[_coordsTemp.length - 1].length - 2],
        y: _coordsTemp[_coordsTemp.length - 1][_coordsTemp[_coordsTemp.length - 1].length - 1]
    })

    _coordsTemp2[0][2] = _coordsTemp2[0][2] + 100
    _coordsTemp2[1][2] = _coordsTemp2[1][2] + 100
    _coordsTemp2[1][0] = _coordsTemp2[1][0] + 100
    _coordsTemp2[2][0] = _coordsTemp2[2][0] + 100
    _coordsTemp2[2][2] = _coordsTemp2[2][2] + 100
    _coordsTemp2[3][0] = _coordsTemp2[3][0] + 100
    _coordsTemp2[3][2] = _coordsTemp2[3][2] + 100
    _coordsTemp2[4][0] = _coordsTemp2[4][0] + 100
    _coordsTemp2[4][2] = _coordsTemp2[4][2] + 100
    _coordsTemp2[5][0] = _coordsTemp2[5][0] + 100
    _coordsTemp2[5][2] = _coordsTemp2[5][2] + 100

    setPointsCircle2({
        x: _coordsTemp2[_coordsTemp2.length - 1][_coordsTemp2[_coordsTemp2.length - 1].length - 2],
        y: _coordsTemp2[_coordsTemp2.length - 1][_coordsTemp2[_coordsTemp2.length - 1].length - 1]
    })
    _coordsTemp3[0][2] = _coordsTemp3[0][2] + 100
    _coordsTemp3[1][2] = _coordsTemp3[1][2] + 100
    _coordsTemp3[1][0] = _coordsTemp3[1][0] + 100
    _coordsTemp3[2][0] = _coordsTemp3[2][0] + 100
    _coordsTemp3[2][2] = _coordsTemp3[2][2] + 100
    _coordsTemp3[3][0] = _coordsTemp3[3][0] + 100
    _coordsTemp3[3][2] = _coordsTemp3[3][2] + 100
    _coordsTemp3[4][0] = _coordsTemp3[4][0] + 100
    _coordsTemp3[4][2] = _coordsTemp3[4][2] + 100
    _coordsTemp3[5][0] = _coordsTemp3[5][0] + 100
    _coordsTemp3[5][2] = _coordsTemp3[5][2] + 100

    setPointsCircle3({
        x: _coordsTemp3[_coordsTemp3.length - 1][_coordsTemp3[_coordsTemp3.length - 1].length - 2],
        y: _coordsTemp3[_coordsTemp3.length - 1][_coordsTemp3[_coordsTemp3.length - 1].length - 1]
    })


}

if (window.innerWidth <= 1000) {

    _coordsTemp[0][1] = _coordsTemp[0][1] - 20
    _coordsTemp[0][3] = _coordsTemp[0][3] - 20
    _coordsTemp[0][2] = _coordsTemp[0][2] + 50
    _coordsTemp[1][2] = _coordsTemp[1][2] + 50

    _coordsTemp[1][1] = _coordsTemp[1][1] - 20
    _coordsTemp[1][0] = _coordsTemp[1][0] + 50
    _coordsTemp[2][0] = _coordsTemp[2][0] + 50


    _coordsTemp[2][2] = _coordsTemp[2][2] + 50
    _coordsTemp[3][0] = _coordsTemp[3][0] + 50
    _coordsTemp[3][3] = _coordsTemp[3][3] + 25

    _coordsTemp[3][2] = _coordsTemp[3][2] + 50
    _coordsTemp[4][0] = _coordsTemp[4][0] + 50
    _coordsTemp[4][2] = _coordsTemp[4][2] + 50
    _coordsTemp[4][1] = _coordsTemp[4][1] + 25
    _coordsTemp[4][3] = _coordsTemp[4][3] + 80
    _coordsTemp[5][0] = _coordsTemp[5][0] + 50
    _coordsTemp[5][2] = _coordsTemp[5][2] + 50
    _coordsTemp[5][1] = _coordsTemp[5][1] + 80
    _coordsTemp[5][3] = _coordsTemp[5][3] + 80
    setPointsCircle1({
        x: _coordsTemp[_coordsTemp.length - 1][_coordsTemp[_coordsTemp.length - 1].length - 2],
        y: _coordsTemp[_coordsTemp.length - 1][_coordsTemp[_coordsTemp.length - 1].length - 1]
    })


    _coordsTemp2[0][1] = _coordsTemp2[0][1] - 20
    _coordsTemp2[0][3] = _coordsTemp2[0][3] - 20

    _coordsTemp2[0][2] = _coordsTemp2[0][2] - 200
    _coordsTemp2[1][3] = _coordsTemp2[1][3] - 5
    _coordsTemp2[1][1] = _coordsTemp2[1][1] - 20

    _coordsTemp2[1][2] = _coordsTemp2[1][2] - 200
    _coordsTemp2[1][0] = _coordsTemp2[1][0] - 200
    _coordsTemp2[2][0] = _coordsTemp2[2][0] - 200
    _coordsTemp2[2][1] = _coordsTemp2[2][1] - 5
    _coordsTemp2[2][2] = _coordsTemp2[2][2] - 200
    _coordsTemp2[2][3] = _coordsTemp2[2][3] - 5

    _coordsTemp2[3][0] = _coordsTemp2[3][0] - 200
    _coordsTemp2[3][1] = _coordsTemp2[3][1] - 5
    _coordsTemp2[3][3] = _coordsTemp2[3][3] + 30

    _coordsTemp2[3][2] = _coordsTemp2[3][2] - 200
    _coordsTemp2[4][0] = _coordsTemp2[4][0] - 200
    _coordsTemp2[4][1] = _coordsTemp2[4][1] + 30
    _coordsTemp2[4][3] = _coordsTemp2[4][3] + 70
    _coordsTemp2[4][2] = _coordsTemp2[4][2] - 200
    _coordsTemp2[5][0] = _coordsTemp2[5][0] - 200
    _coordsTemp2[5][1] = _coordsTemp2[5][1] + 70
    _coordsTemp2[5][3] = _coordsTemp2[5][3] + 75
    _coordsTemp2[5][2] = _coordsTemp2[5][2] - 200

    setPointsCircle2({
        x: _coordsTemp2[_coordsTemp2.length - 1][_coordsTemp2[_coordsTemp2.length - 1].length - 2],
        y: _coordsTemp2[_coordsTemp2.length - 1][_coordsTemp2[_coordsTemp2.length - 1].length - 1]
    })

    _coordsTemp3[0][1] = _coordsTemp3[0][1] - 65
    _coordsTemp3[0][3] = _coordsTemp3[0][3] - 65

    _coordsTemp3[0][2] = _coordsTemp3[0][2] - 200
    _coordsTemp3[1][3] = _coordsTemp3[1][3] - 80
    _coordsTemp3[1][1] = _coordsTemp3[1][1] - 65

    _coordsTemp3[1][2] = _coordsTemp3[1][2] - 200
    _coordsTemp3[1][0] = _coordsTemp3[1][0] - 200
    _coordsTemp3[2][0] = _coordsTemp3[2][0] - 200
    _coordsTemp3[2][1] = _coordsTemp3[2][1] - 80
    _coordsTemp3[2][2] = _coordsTemp3[2][2] - 200
    _coordsTemp3[2][3] = _coordsTemp3[2][3] - 80

    _coordsTemp3[3][0] = _coordsTemp3[3][0] - 200
    _coordsTemp3[3][1] = _coordsTemp3[3][1] - 80
    _coordsTemp3[3][3] = _coordsTemp3[3][3] - 110

    _coordsTemp3[3][2] = _coordsTemp3[3][2] - 200
    _coordsTemp3[4][0] = _coordsTemp3[4][0] - 200
    _coordsTemp3[4][1] = _coordsTemp3[4][1] - 110
    _coordsTemp3[4][3] = _coordsTemp3[4][3] - 140
    _coordsTemp3[4][2] = _coordsTemp3[4][2] - 200
    _coordsTemp3[5][0] = _coordsTemp3[5][0] - 200
    _coordsTemp3[5][1] = _coordsTemp3[5][1] - 140
    _coordsTemp3[5][3] = _coordsTemp3[5][3] - 150
    _coordsTemp3[5][2] = _coordsTemp3[5][2] - 200

    setPointsCircle3({
        x: _coordsTemp3[_coordsTemp3.length - 1][_coordsTemp3[_coordsTemp3.length - 1].length - 2],
        y: _coordsTemp3[_coordsTemp3.length - 1][_coordsTemp3[_coordsTemp3.length - 1].length - 1]
    })
}
if (window.innerWidth <= 768) {


}

setPointsLine1(_coordsTemp)
  setPointsLine2(_coordsTemp2)
  setPointsLine3(_coordsTemp3)

        window.addEventListener('resize', function (event) {
            // console.log('>>><><>>>>><><>', event.target.innerHeight, event.target.outerHeight)
            const coords2 = Tools.getResponseCoords(PointsLine1, {
                width: event.target.innerWidth,
                height: event.target.innerHeight

            });

            const _coordsLine2 = Tools.getResponseCoords(PointsLine2, {
                width: window.innerWidth,
                height: window.innerHeight
            });
            const _coordsLine3 = Tools.getResponseCoords(PointsLine3, {
                width: window.innerWidth,
                height: window.innerHeight
            });
            
            setPointsCircle1({
                x: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2],
                y: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1]
            })
            setPointsCircle2(
                {
                    x: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 2],
                    y: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 1]
                }
            )
            setPointsCircle3(
                {
                    x: _coordsLine3[_coordsLine3.length - 1][_coordsLine3[_coordsLine3.length - 1].length - 2],
                    y: _coordsLine3[_coordsLine3.length - 1][_coordsLine3[_coordsLine3.length - 1].length - 1]
                }
            )
            if (event.target.innerWidth <= 1550) {
                coords2[0][2] = coords2[0][2] - 100
                coords2[1][2] = coords2[1][2] - 100
                coords2[1][0] = coords2[1][0] - 100
                coords2[2][0] = coords2[2][0] - 100
                coords2[2][2] = coords2[2][2] - 100
                coords2[3][0] = coords2[3][0] - 100
                coords2[3][2] = coords2[3][2] - 100
                coords2[4][0] = coords2[4][0] - 100
                coords2[4][2] = coords2[4][2] - 100
                coords2[5][0] = coords2[5][0] - 100
                coords2[5][2] = coords2[5][2] - 100
            
                setPointsCircle1({
                    x: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2],
                    y: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1]
                })
            
                _coordsLine2[0][2] = _coordsLine2[0][2] + 100
                _coordsLine2[1][2] = _coordsLine2[1][2] + 100
                _coordsLine2[1][0] = _coordsLine2[1][0] + 100
                _coordsLine2[2][0] = _coordsLine2[2][0] + 100
                _coordsLine2[2][2] = _coordsLine2[2][2] + 100
                _coordsLine2[3][0] = _coordsLine2[3][0] + 100
                _coordsLine2[3][2] = _coordsLine2[3][2] + 100
                _coordsLine2[4][0] = _coordsLine2[4][0] + 100
                _coordsLine2[4][2] = _coordsLine2[4][2] + 100
                _coordsLine2[5][0] = _coordsLine2[5][0] + 100
                _coordsLine2[5][2] = _coordsLine2[5][2] + 100
            
                setPointsCircle2({
                    x: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 2],
                    y: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 1]
                })
                _coordsLine3[0][2] = _coordsLine3[0][2] + 100
                _coordsLine3[1][2] = _coordsLine3[1][2] + 100
                _coordsLine3[1][0] = _coordsLine3[1][0] + 100
                _coordsLine3[2][0] = _coordsLine3[2][0] + 100
                _coordsLine3[2][2] = _coordsLine3[2][2] + 100
                _coordsLine3[3][0] = _coordsLine3[3][0] + 100
                _coordsLine3[3][2] = _coordsLine3[3][2] + 100
                _coordsLine3[4][0] = _coordsLine3[4][0] + 100
                _coordsLine3[4][2] = _coordsLine3[4][2] + 100
                _coordsLine3[5][0] = _coordsLine3[5][0] + 100
                _coordsLine3[5][2] = _coordsLine3[5][2] + 100
            
                setPointsCircle3({
                    x: _coordsLine3[_coordsLine3.length - 1][_coordsLine3[_coordsLine3.length - 1].length - 2],
                    y: _coordsLine3[_coordsLine3.length - 1][_coordsLine3[_coordsLine3.length - 1].length - 1]
                })
            }

            if (event.target.innerWidth <= 1000) {

                coords2[0][1] = coords2[0][1] - 20
                coords2[0][3] = coords2[0][3] - 20
                coords2[0][2] = coords2[0][2] + 50
                coords2[1][2] = coords2[1][2] + 50
            
                coords2[1][1] = coords2[1][1] - 20
                coords2[1][0] = coords2[1][0] + 50
                coords2[2][0] = coords2[2][0] + 50
            
            
                coords2[2][2] = coords2[2][2] + 50
                coords2[3][0] = coords2[3][0] + 50
                coords2[3][3] = coords2[3][3] + 25
            
                coords2[3][2] = coords2[3][2] + 50
                coords2[4][0] = coords2[4][0] + 50
                coords2[4][2] = coords2[4][2] + 50
                coords2[4][1] = coords2[4][1] + 25
                coords2[4][3] = coords2[4][3] + 80
                coords2[5][0] = coords2[5][0] + 50
                coords2[5][2] = coords2[5][2] + 50
                coords2[5][1] = coords2[5][1] + 80
                coords2[5][3] = coords2[5][3] + 80
                setPointsCircle1({
                    x: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 2],
                    y: coords2[coords2.length - 1][coords2[coords2.length - 1].length - 1]
                })


                _coordsLine2[0][1] = _coordsLine2[0][1] - 20
                _coordsLine2[0][3] = _coordsLine2[0][3] - 20
            
                _coordsLine2[0][2] = _coordsLine2[0][2] - 200
                _coordsLine2[1][3] = _coordsLine2[1][3] - 5
                _coordsLine2[1][1] = _coordsLine2[1][1] - 20
            
                _coordsLine2[1][2] = _coordsLine2[1][2] - 200
                _coordsLine2[1][0] = _coordsLine2[1][0] - 200
                _coordsLine2[2][0] = _coordsLine2[2][0] - 200
                _coordsLine2[2][1] = _coordsLine2[2][1] - 5
                _coordsLine2[2][2] = _coordsLine2[2][2] - 200
                _coordsLine2[2][3] = _coordsLine2[2][3] - 5
            
                _coordsLine2[3][0] = _coordsLine2[3][0] - 200
                _coordsLine2[3][1] = _coordsLine2[3][1] - 5
                _coordsLine2[3][3] = _coordsLine2[3][3] + 30
            
                _coordsLine2[3][2] = _coordsLine2[3][2] - 200
                _coordsLine2[4][0] = _coordsLine2[4][0] - 200
                _coordsLine2[4][1] = _coordsLine2[4][1] + 30
                _coordsLine2[4][3] = _coordsLine2[4][3] + 70
                _coordsLine2[4][2] = _coordsLine2[4][2] - 200
                _coordsLine2[5][0] = _coordsLine2[5][0] - 200
                _coordsLine2[5][1] = _coordsLine2[5][1] + 70
                _coordsLine2[5][3] = _coordsLine2[5][3] + 75
                _coordsLine2[5][2] = _coordsLine2[5][2] - 200
            
                setPointsCircle2({
                    x: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 2],
                    y: _coordsLine2[_coordsLine2.length - 1][_coordsLine2[_coordsLine2.length - 1].length - 1]
                })
            
                _coordsLine3[0][1] = _coordsLine3[0][1] - 65
                _coordsLine3[0][3] = _coordsLine3[0][3] - 65
            
                _coordsLine3[0][2] = _coordsLine3[0][2] - 200
                _coordsLine3[1][3] = _coordsLine3[1][3] - 80
                _coordsLine3[1][1] = _coordsLine3[1][1] - 65
            
                _coordsLine3[1][2] = _coordsLine3[1][2] - 200
                _coordsLine3[1][0] = _coordsLine3[1][0] - 200
                _coordsLine3[2][0] = _coordsLine3[2][0] - 200
                _coordsLine3[2][1] = _coordsLine3[2][1] - 80
                _coordsLine3[2][2] = _coordsLine3[2][2] - 200
                _coordsLine3[2][3] = _coordsLine3[2][3] - 80
            
                _coordsLine3[3][0] = _coordsLine3[3][0] - 200
                _coordsLine3[3][1] = _coordsLine3[3][1] - 80
                _coordsLine3[3][3] = _coordsLine3[3][3] - 110
            
                _coordsLine3[3][2] = _coordsLine3[3][2] - 200
                _coordsLine3[4][0] = _coordsLine3[4][0] - 200
                _coordsLine3[4][1] = _coordsLine3[4][1] - 110
                _coordsLine3[4][3] = _coordsLine3[4][3] - 140
                _coordsLine3[4][2] = _coordsLine3[4][2] - 200
                _coordsLine3[5][0] = _coordsLine3[5][0] - 200
                _coordsLine3[5][1] = _coordsLine3[5][1] - 140
                _coordsLine3[5][3] = _coordsLine3[5][3] - 150
                _coordsLine3[5][2] = _coordsLine3[5][2] - 200
            
                setPointsCircle3({
                    x: _coordsLine3[_coordsLine3.length - 1][_coordsLine3[_coordsLine3.length - 1].length - 2],
                    y: _coordsLine3[_coordsLine3.length - 1][_coordsLine3[_coordsLine3.length - 1].length - 1]
                })
            
            
            }
            

 

            setPointsLine1(coords2);
            setPointsLine2(_coordsLine2);
            setPointsLine3(_coordsLine3);
            setSize({
                width: event.target.innerWidth,
                height: event.target.innerHeight = 800
            })
        }, true);
    }

    const [play] = useSound(Sfx);
    return (
        <>
            <DivLineBurgerMenuSC>
                <Stage width={size.width} height={size.height}>
                    <Layer>
                        {Tools.drawLine(pointsLine1)}
                        <Circle x={pointsCircle1.x} y={pointsCircle1.y} radius={5} fill={gradient}/>
                    </Layer>

                    <Layer>
                        {Tools.drawLine(pointsLine2)}
                        <Circle x={pointsCircle2.x} y={pointsCircle2.y} radius={5} fill={gradient2}/>
                    </Layer>
                    <Layer>
                        {Tools.drawLine(pointsLine3)}
                        <Circle x={pointsCircle3.x} y={pointsCircle3.y} radius={5} fill={gradient3}/>
                    </Layer>
                </Stage>
            </DivLineBurgerMenuSC>
            <DivWrapMenuSC>
                <DivContainerAboutSC>
                    <GridContentSC>
                        <SpanTextElementMenuSC to="/" onMouseEnter={play}>HOME</SpanTextElementMenuSC>
                        <SpanTextElementMenuSC to="/services" onMouseEnter={play}>SERVICES</SpanTextElementMenuSC>
                        <SpanTextElementMenuSC to="/about" onMouseEnter={play}>ABOUT</SpanTextElementMenuSC>
                        <SpanTextElementMenuSC to="/contacts" onMouseEnter={play}>CONTACTS</SpanTextElementMenuSC>
                        {/* <SpanTextElementMenuSC to="/projects" onMouseEnter={play}>PROJECTS</SpanTextElementMenuSC> */}
                    </GridContentSC>
                </DivContainerAboutSC>
            </DivWrapMenuSC>
        </>
    );
};

export default BurgerMenu;
