import React, { useEffect } from "react";
import store from "../redux/store";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { useSpring, animated } from "react-spring";
import { setIsMobile } from "../redux/actions/generalActions";

import "../styles/globals.css";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "rc-slider/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";

const useWidth = () => {
  const handleResize = () => {
    store.dispatch(setIsMobile(window.innerWidth));
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", () => handleResize());
    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

function MyApp(props) {
  const { Component, pageProps } = props;
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  useWidth();
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

/*
 *   Filters mobile
 *    Favorite Mobile
 *
 * */
