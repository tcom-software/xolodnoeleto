import React from "react";
import "../styles/globals.css";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { Provider } from "react-redux";

import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { useSpring, animated } from "react-spring";

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

function MyApp(props) {
  const { Component, pageProps } = props;
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <animated.div style={animationProps}>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </animated.div>
      </Provider>
    </ThemeProvider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
