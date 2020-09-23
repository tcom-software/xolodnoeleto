import React from "react";
import "../styles/globals.css";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import {Provider} from 'react-redux';

import withRedux from "next-redux-wrapper";
import store from '../redux/store';

function MyApp(props) {
    const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </Provider>
    </ThemeProvider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
