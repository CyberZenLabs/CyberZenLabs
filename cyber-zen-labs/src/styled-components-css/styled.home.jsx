import styled from "styled-components/macro";

export const DivHomeContentSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const DivTextBoxtSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 80px;
  margin-bottom:100px;
`;

export const DivTitleBoxtSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
`;

export const TitleHomeBoxSC = styled.h1`
pointer-events: none;
  font-weight: 900;
  font-size: 80px;
  line-height: 100px;
  letter-spacing: 0.08em;
  background: ${({isBlackBack}) => (isBlackBack === 'black' ? 'var(--color-red-pink)' : 'var(--blue-pink)')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: ${({isBlackBack}) => (isBlackBack === 'black' ? '0px 0px 8px #F61067' : 'none')};
  position: relative;
  width: max-content;
`;

export const SloganBoxSC = styled.h1`
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 0.05em;
  pointer-events: none;
`;

export const DivDescBoxtSC = styled.div`
  width: 65%;
  display: grid;
`;

export const DescHomeBoxSC = styled.span`
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  pointer-events: none;
  color: ${({isBlackBack}) => (isBlackBack === 'black' ? 'var(--color-red-pink)' : '#d516ff')};

  text-shadow: ${({isBlackBack}) => (isBlackBack === 'black' ? 'none' : '0px 5px 30px')};
`;

export const DivShadowBoxSC = styled.div`
    position: absolute;
  top: 0px;
  left: -6%;
  width: 110%;
  height: 100%;
  //border-radius: 50%;
  background: linear-gradient(90.02deg, rgba(23, 175, 249, 0.6) -7.59%, rgba(213, 22, 255, 0.6) 93.79%);
filter: blur(100px);
`
