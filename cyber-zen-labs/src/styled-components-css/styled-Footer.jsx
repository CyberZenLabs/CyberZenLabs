import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Mail from "../images/Mail.svg";
import Sound from "../images/Music-Switch2.svg";
export const DivContainerFooterSC = styled.div`
  width: 100%;
  // border:1px solid green;
  display: grid;
  height: 160px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;
export const DivContainerFooterLeftSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  //border:1px solid green;
  justify-self: start;
  gap: 1px;
  height:60px;
  // max-height: 20px;
`;
export const DivContainerFooterCenterSC = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 95px;
  // border:1px solid red;
  justify-self: center;
`;
export const DivContainerFooterRightSC = styled.div`
  display: grid;
  grid-template-columns: max-content;
  //border:1px solid white;
  justify-self: end;
`;
export const DivPhotoRightContainerSC = styled(Link)`
  background-image: url(${Mail});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100px;
  height: 100px;
  justify-self: end;
`;
//soundbar
export const DivSoundPhotoLeftContainerSC = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
  align-self: end;

  @keyframes DivSoundPhotoLeftContainerSC {
    0%{
      height: 20px;
    }
    
    100%{
      height: 25px;
    }
  }
`;

export const DivBarsSC = styled.div`
  background: #fff;
  width: 3px;
  height: 20px;
  animation: DivSoundPhotoLeftContainerSC 0.8s infinite;


`;
export const H1FooterTextSoundOnSC = styled.button`
  //width: max-content;
  font-family: "Orbitron";
  background: none;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 14px;
  align-self: center;
  /* identical to box height */
  color: #ffffff;
  cursor: pointer;
`;
export const H1FooterTextSC = styled(Link)`
  width: max-content;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  :hover {
    text-shadow: 0px 0px 3px #ffffff;
  }
`;

export const FooterTextTeamSC = styled(Link)`
  font-size: var(--font-size-menu);
  text-align: center;
  font-size: 36px;

  color: var(--blue-pink);
  &:hover {
    text-shadow: 4px 4px 4px #a557e5;
  }
`;

export const DivContainerFooterCenterTeamSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 95px;
  // border:1px solid red;
  justify-self: center;
`;
