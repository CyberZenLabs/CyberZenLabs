import styled from "styled-components/macro";
import Modal from "react-modal";

import { Link } from "react-router-dom";
import { HiX} from "react-icons/hi";

export const BlockModal = styled(Modal)`
  font-family: "Orbitron" !important;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  min-width: 360px;
  max-height: 100vh;
 
 
    z-index: 10000;
    align-content: unset;
    justify-content: unset;
   
 
  @media (max-width: 809px) {
  
    overflow-y: scroll;
  }
  @media (max-height: 800px) {
  
  overflow-y: scroll;
}
 
`;

export const LinkSC = styled(Link)`
  color: var(--purple-color);
  font-family: "Poppins";
  text-decoration: none;
  font-weight: bold;
`;
export const DivBoxTextSC = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const DivBoxTextCookieSC = styled.div`
font-size: 20px;
max-width: 270px;
font-weight: 350;
text-align: left;
`;
export const DivCookieButtonsColumnsSC = styled.div`
margin-top: 10px;
display: grid;
grid-template-columns:repeat(2,auto);
//border:1px solid red;
justify-items: center;
align-items: center;
`;
export const DivBoxCookieSC = styled.div`
//padding: 20px;
  margin-right: 25px;
  margin-bottom: 125px;
  border-radius: 20px;
  display: grid;
  background:white;
  width: 500px;
  -webkit-box-shadow: 0px 17px 29px 7px rgba(0, 0, 0, 0.342);
-moz-box-shadow: 0px 17px 29px 7px rgba(0, 0, 0, 0.342);
box-shadow: 0px 17px 29px 7px rgba(0, 0, 0, 0.342);
  height: 250px;
  align-items: center;
  justify-content: center;
  //border: 1px solid red;
`;

export const DivBoxCookieInnerSC = styled.div`
  display: grid;
  grid-template-rows:repeat(3,max-content);
  align-items: center;
  justify-content: center;
 // border: 1px solid red;
  row-gap: 10px;
`;
export const DivCookiePrivacySC = styled.div`
  font-size: 15px;
  height: 20px;
 // border:1px solid red;
  opacity: 70%;
  cursor: pointer;
  :hover{
    opacity: 100%;
  }
`;
export const DivImgCookieSC = styled.div`
  background-image: url(https://www.svgrepo.com/show/30963/cookie.svg);
  background-position: center;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  background-size: 80%;
  display: grid;
  justify-self: center;
`;

export const SelectInputSC = styled.select`
  box-sizing: border-box;
  height: 50px;
  /* Auto layout */
  display: flex;
  width: 500px;
  max-width: 500px;
  min-width: 320px;
  flex-direction: row;
  align-items: center;
  justify-self: center;
  padding-left: 18px;
  gap: 294px;
  position: absolute;
  /* Акцент 70% */
  border: 3px solid rgba(133, 203, 51, 0.7);
  border-radius: 20px;

  ::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: rgba(37, 37, 37, 0.7);
  }
  :hover {
    border: 3px solid #76b42e;
  }
  @media (max-width: 1080px) {
    width: 90%;
  }
`;
export const OptionInputSC = styled.option`
  border: 3px solid rgba(133, 203, 51, 0.7);
  border-radius: 20px;
`;

export const DivTextBoxSC = styled.div`
  display: grid;
  grid-template-columns: 123px 121px;
  grid-column-gap: 268px;
  //border: 1px solid red;
  width: 100%;
`;
export const SpanQuSC = styled.span`
  color: rgba(37, 37, 37, 0.7);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;
export const DivTextEmailSC = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const DivWrapModal = styled.div`

  display: grid;
  min-width: 360px;
  
 
 

  background: radial-gradient(73.28% 231.6% at 26.72% 52.96%, #0E1A5A 0%, #0E1A5A 5.27%, #21004B 100%);
  border-radius: 30px;
  z-index: 1000;
 

 
  
    width: 100%;
    height: 100%;
    border-radius: 0px;
    align-content: flex-start;
    z-index: 100000;
    margin-top: 0px;
    gap: 125px;
    @media(max-width:809px){ gap: 0px;}
    @media (max-height: 800px) {
  /* min-height: 865px; */
      gap: 0px;
}

 
 
  
 
  //border: 1px solid red;
`;
export const ButtonPrevModal = styled.div`
  
  height: 40px;
  display: flex;
  border: none;
 width: 100%;
  border-radius: 30px;

  justify-content: flex-end;
  
 
`;
export const IoIosArrowBackSC = styled(HiX)`
  width: 45px;
  height: 40px;
  opacity: 60%;
  position: relative;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
`;
export const DivBoxRowModalSC = styled.div`
  justify-self: center;
  margin-top: 40px;
  // border: 1px solid red;
  display: grid;
  justify-content: center;
  max-width: 500px;
`;
export const DivBoxRowModalContSC = styled.div`
  justify-self: center;
  // border: 1px solid red;
  display: grid;
  justify-content: center;
  max-width: 500px;
  height: 100%;
`;
export const StoreCreationTitleSC = styled.h1`
  font-family: "Poppins" !important;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 25px;
  }
`;
export const StoreCreationSubTitleSC = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 46px;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;
export const CropperContainer = styled.div`
  width: 100%;
  //height: max-content;
  //margin: 0% 10% 0% 10%;
  display: grid;
  justify-items: center;
`;
export const ButtonContinueModal = styled.button`
  width: 500px;
  max-width: 500px;
  min-width: 320px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
  gap: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  border-radius: 20px;
  position: absolute;
  border: none;
  /* Акцент */
  background: #85cb33;
  border-radius: 20px;
  :hover {
    background-color: #76b42e;
  }

  @media (max-width: 1080px) {
    width: 90%;
  }
`;
export const PasswordFieldSC = styled.input`
  box-sizing: border-box;
  height: 50px;
  /* Auto layout */
  display: flex;
  width: 500px;
  max-width: 500px;
  min-width: 320px;
  flex-direction: row;
  align-items: center;
  justify-self: center;
  padding: 18px 0px 18px 18px;
  gap: 294px;
  position: absolute;
  /* Акцент 70% */
  border: 3px solid rgba(133, 203, 51, 0.7);
  border-radius: 20px;

  ::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: rgba(37, 37, 37, 0.7);
  }
  :hover {
    border: 3px solid #76b42e;
  }
  @media (max-width: 1080px) {
    width: 90%;
  }
`;
export const EmailFieldSC = styled.input`
  box-sizing: border-box;
  height: 50px;
  /* Auto layout */
  display: flex;
  width: 500px;
  max-width: 500px;
  min-width: 320px;
  flex-direction: row;
  align-items: center;
  justify-self: center;
  padding: 18px 0px 18px 18px;
  gap: 294px;
  position: absolute;
  /* Акцент 70% */
  border: 3px solid rgba(133, 203, 51, 0.7);
  border-radius: 20px;

  ::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: rgba(37, 37, 37, 0.7);
  }
  :hover {
    border: 3px solid #76b42e;
  }
  @media (max-width: 1080px) {
    width: 90%;
  }
`;
export const CenterItemsSC = styled.div`
  width: 100%;
  height: 90%;
  /* max-width: 600px; */
  min-width: 320px;
  display: grid;
  grid-template-rows: auto auto auto max-content;
  grid-row-gap: 20px;
  //border: 1px solid red;
  justify-content: center;
  align-self: start;
  @media (max-width: 1080px) {
    margin-top: 40px;
    transition: 0.5s;
  }
  @media (max-width: 550px) {
    height: 250px;
  }
`;
