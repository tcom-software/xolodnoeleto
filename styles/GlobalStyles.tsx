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
    color: #202020;
    overflow-x: hidden;
  }
  picture {
    display: contents;
  }
  h2 {
    font-size: 14px;
    font-weight: 700;
  }
  a {
    color: ${theme.body.color};
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  input,
  select,
  textarea,
  button {
    outline: none;
    appearance: none;
    border: 0;
  }
  .product-image-table-and-mobile-case {
    object-fit: contain;
  }
`;

export default GlobalStyles;
