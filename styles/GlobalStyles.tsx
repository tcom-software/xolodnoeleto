import { createGlobalStyle } from "styled-components";
import { fontfaces } from "../styles/fonts";

const GlobalStyles = createGlobalStyle`
  ${fontfaces()}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans;
  }
  *:focus {
    outline: none;
  }
`;

export default GlobalStyles;
