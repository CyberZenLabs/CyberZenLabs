import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import {CgChevronRight, CgChevronLeft} from "react-icons/cg";
export const DivContainerAboutDevSC = styled.div`
display: grid;
width: 100%;
justify-content: center;
justify-items: center;
`;
export const GridContainerItemsSC = styled.div`
display: grid;
width: 83%;
justify-content: center;
justify-items: center;
grid-template-rows: 275px 1fr;
 grid-row-gap: 30px;
  `;
export const DivDecriptionTextSC = styled.div`
pointer-events: none;
display: grid;
font-weight: 400;
font-size: 35px;
line-height: 44px;
text-align: center;
letter-spacing: 0.05em;
width: 100%;
`;

export const DivCustomTextSC = styled.div`
pointer-events: none;
text-align: left;
background: linear-gradient(270deg, #D815FF 0%, #09BBF9 102.1%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
max-width: max-content;
text-shadow: 4px 4px 12px #D516FF;
position: relative;
letter-spacing: 0.05em;

  `;
  export const MarginLeft = styled.div`
  @media (max-width: 680px) {
 margin-left:calc(100% - 230px);
  }
  
  @media (max-width: 480px) {
    margin-left:calc(100% - 150px)
  }
 
  
    `;
    export const MarginLeft2 = styled.div`
    @media (max-width: 680px) {
   margin-left:calc(100% - 230px);
    }
    
    @media (max-width: 480px) {
      margin-left:calc(100% - 150px)
    }
   
    
      `;
export const NameSC = styled.div`
font-family: 'Orbitron';
font-style: normal;
font-weight: 400;
line-height: 18px;
   @media (max-width: 1600px) {
    font-size: 14px;
      text-align: center;
  margin-left: 13px;
  }
  display: flex;
    margin-top: 10px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 14px;
  }
  
    align-items: flex-end;
    flex-direction: row-reverse;
    height: 117%;
    margin-right: 0px;
    @media (max-width: 480px) {
  font-size: 8px;
  margin-left: 15px;
  }
  @media (max-width: 360px) {
  font-size: 8px;
  
  }


  `;
  export const NamesSC = styled.div`
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 400;
    
    display: flex;
      margin-top: 10px;
      @media (max-width: 891px) {
        text-align: center;
        font-size: 14px;
        margin-left: 32px;
    }
    
      align-items: flex-end;
      flex-direction: row-reverse;
      height: 117%;
      margin-right: 0px;
      @media (max-width: 480px) {
    font-size: 9px;
    margin-left: 24px;
    }
    @media (max-width: 360px) {
    font-size: 8px;
    margin-left: 28px;
    }
  
  
    `;
export const GridRowsIcons = styled.div`
//border: 1px solid red;
display: grid;
grid-row-gap:30px;
align-self:flex-end;
  `;
export const CarouselHidden = styled.div`

width:100%;
  `;
export const GridIconsSC = styled.div`
//border: 1px solid red;
display: grid;
grid-template-rows: repeat(2, 70px);
max-width: max-content;
max-height: max-content;
justify-items: center;
justify-content: center;
grid-row-gap:30px;
align-self:flex-end;
width: 100%;
@media (max-width: 1420px) {
  display:none;
  }
  `;
export const GridColumnsSecondIcons = styled.div`
//border: 1px solid blue;
display: grid;
grid-template-columns: repeat(11, 1fr);
grid-column-gap: 30px;

  `;
  export const GridColumnsIcons = styled.div`
  //border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-items: center;
  justify-content: center;
  @media (max-width: 1420px) {
    grid-template-columns: repeat(8, 1fr);
  }
    `;
export const ImgIconSC = styled.div`
display: flex;
border-radius:100%;
width: 180px;
height: 180px;
background-image: ${({ Photo }) => Photo && `url(${Photo})`};

@media (min-width: 750px) {
    
    }
@media (max-width: 480px) {
    
  height: 120px;
  width:120px ;
  background-size: contain;
  }
  @media (max-width: 360px) {
    
    height: 120px;
    width:120px ;
    background-size: contain;
    }
  `;

export const DivCustomArrow = styled.button`
border-radius:100%;
width: 70px;
height: 70px;
background: #000;

`;
export const DivCustomArrowRight = styled(CgChevronRight)`
width:4vw;
height: 4vw;
position: absolute;
bottom: 50;
right: 0;
@media (max-width: 768px) {
  height: 4vw;
  width: 4vw;
  
  }
  @media (max-width: 480px) {
  height: 5vw;
  width: 5vw;
  
  }
  @media (max-width: 360px) {
 

 }
 
;`

export const MarginArrow = styled.div`
@media (max-width: 769px) {
    margin-left: 25px;
    
  }
;`
export const DivCustomArrowLeft = styled(CgChevronLeft)`
width:4vw;
height: 4vw;
position: absolute;
left: 0;
display: grid;
align-content: center;
@media (max-width: 768px) {
  height: 4vw;
  width: 4vw;
  
  }
  @media (max-width: 480px) {
  height: 5vw;
  width: 5vw;
  
  }
  @media (max-width: 360px) {
 
  
  }
  ;`

export const DivItemsCarouselSC = styled.div`
display: none;
@media (max-width: 1600px) {
 display: block;
}
  
`