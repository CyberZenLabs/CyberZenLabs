import styled from "styled-components/macro";
import Sam from "../images/Sam.png";
import Denis from "../images/Denis.png";
import Kirill from "../images/Kirill.png";
import Ruslan from "../images/Ruslan.png";
import Ilya from "../images/Ilya.png";
import Andrey from "../images/Andrey.png";
import Irene from "../images/Irene.png";

export const DivMainRowsSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 170px 83px 93px 194px 38px;
`;

export const DivBoxTextTitleSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
`;

export const DivTextTitleSC = styled.div`
  max-width: 990px;
  max-height: 120px;
  width: 100%;
  height: 100%;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 0.05em;
  background: linear-gradient(270deg, #d815ff 0%, #09bbf9 102.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 4px 20px #d516ff;
`;

export const DivTextTeamSC = styled.div`
  max-width: 147px;
  width: 100%;
  height: 100%;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 56px;
  letter-spacing: 0.05em;

  background: linear-gradient(270deg, #d815ff 0%, #09bbf9 102.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 4px 20px #d516ff;
`;

export const DivBoxColumnsPagesSC = styled.div`
  height: 100%;
  max-width: 648px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.4fr 1.6fr 1fr;
`;

export const DivPageSC = styled.div`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  /* identical to box height */
  letter-spacing: 0.05em;
  text-shadow: ${(p) => (p.isActive ? "6px 5px 5px #a557e5" : "#FFF")};
  cursor: pointer;
`;

export const DivBoxColumnsFotosSC = styled.div`
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 40px;
  justify-self: center;
`;

export const DivFotoSC = styled.div`
  background-image: url(${Sam});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto1SC = styled.div`
  background-image: url(${Denis});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto2SC = styled.div`
  background-image: url(${Kirill});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto3SC = styled.div`
  background-image: url(${Ruslan});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto4SC = styled.div`
  background-image: url(${Ilya});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto5SC = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  background: #c4c4c4;
  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;

export const DivFoto6SC = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  background: #c4c4c4;
  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;

export const DivFoto7SC = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  background: #c4c4c4;
  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;

export const DivBoxColumnsFotos1SC = styled.div`
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 38px;
  justify-self: center;
`;

export const DivBoxColumnsNameSC = styled.div`
  max-width: 404px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 60px;
  justify-self: center;
`;

export const DivNameSC = styled.div`
  width: 169px;
  height: 36px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  padding-left: 10px;
`;

export const DivName1SC = styled.div`
  width: 142px;
  height: 36px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const DivName0SC = styled.div`
  width: 100%;
  height: 72px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const DivBoxColumnsName1SC = styled.div`
  max-width: 1485px;
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 45px;
  justify-self: center;
`;

export const DivName2SC = styled.div`
  width: 100%;
  height: 72px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const DivBoxColumnsName2SC = styled.div`
  max-width: 783px;
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 78px;
  justify-self: center;
`;

export const DivBoxColumnsFotos3SC = styled.div`
  width: max-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 38px;
  justify-self: center;
`;
export const DivFoto8SC = styled.div`
  background-image: url(${Andrey});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const DivFoto9SC = styled.div`
  background-image: url(${Irene});
  width: 180px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
`;
export const DivFoto10SC = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  background: #c4c4c4;
  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;

export const DivFoto11SC = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  background: #c4c4c4;
  /*   background-size: 100%;
  background-repeat: no-repeat; */
`;
