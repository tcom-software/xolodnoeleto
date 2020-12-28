import React, { useEffect } from "react";
import store from "../redux/store";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { setIsMobile } from "../redux/actions/generalActions";
import BigImage from "../components/BigImage";

import "../styles/globals.css";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "rc-slider/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
import { Notification } from "../components/FamousComponents";

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
  useWidth();

  // fetch("api/hello")
  //   .then((res) => res.json())
  //   .then((ress) => console.log(ress));

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
        <BigImage />
        <Notification />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
