import styled from "styled-components/macro";

export const DivHomeContentSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;
  align-items: center;
`;

export const DivTextBoxtSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 80px;
`;

export const DivTitleBoxtSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
`;

export const TitleHomeBoxSC = styled.h1`
  font-weight: 900;
  font-size: 80px;
  line-height: 100px;
  letter-spacing: 0.08em;
  background: var(--blue-pink);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 5px 30px;
`;

export const SloganBoxSC = styled.h1`
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 0.05em;
`;

export const DivDescBoxtSC = styled.div`
  width: 100%;
  display: grid;
`;

export const DescHomeBoxSC = styled.span`
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;

  color: #d516ff;

  text-shadow: 0px 5px 30px;
`;
