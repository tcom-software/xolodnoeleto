import React from "react";
import "../styles/globals.css";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
