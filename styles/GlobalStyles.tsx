import { createGlobalStyle } from "styled-components";
import theme from "styles/theme";
import { hidden } from "ansi-colors";

const GlobalStyles = createGlobalStyle`
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${theme.body.fontSize};
  }
  *:focus {
    outline: none;
  }
  body {
    background: ${theme.body.background};
    color: #202020;
    overflow-x: hidden;
    font-family: 'Helvetica Neue', sans-serif;

  }
  .overflow-hidden {
    overflow: hidden;
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
    width: 70px;
    height: 70px;
  }
  p {
    text-align: justify !important;
  }
`;

export default GlobalStyles;
