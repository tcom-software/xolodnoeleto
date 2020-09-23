import { createGlobalStyle } from "styled-components";
import { fontfaces } from "../styles/fonts";
import theme from 'styles/theme';

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
  body {
    background: ${theme.body.background};
  }
  picture {
    display: contents;
  }
`;

export default GlobalStyles;
