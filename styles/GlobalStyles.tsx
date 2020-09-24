import { createGlobalStyle } from "styled-components";
import { fontfaces } from "../styles/fonts";
import theme from "styles/theme";

const GlobalStyles = createGlobalStyle`
  ${fontfaces()}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.body.fontSize};
  }
  *:focus {
    outline: none;
  }
  body {
    background: ${theme.body.background};
  }
  picture {
    display: contents;
  }
  
  h2 {
    font-size: 14px;
    font-weight: 700;
  }
`;

export default GlobalStyles;
