import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#000000" : "#000000")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Heading1 = styled.h1`
  color: black;
  font-size: 40px;
  //padding: #top/bot #sides
  padding: px 0;
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
`;

export const Heading2 = styled.h2`
  color: black;
  font-size: 40px;
  //padding: #top/bot #sides
  padding: px 0;
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
`;

export const SubHeading = styled.h3`
  color: black;
  font-size: 30px;
  //padding: #top/bot #sides
  margin-top: 50px;
  margin-left: 30px;
  text-align: left;
  font-weight: bold;
`;

export default GlobalStyle;
