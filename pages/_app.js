import React, { useEffect, useRef } from "react";
import store from "../redux/store";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { setIsMobile } from "../redux/actions/generalActions";
import BigImage from "../components/BigImage";
import { animated } from "react-spring";
import { Transition } from "react-spring/renderprops.cjs";
import { useRouter } from "next/router";

import "../styles/fonts.scss";
import "../styles/globals.css";

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "rc-slider/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
import { Notification } from "../components/FamousComponents";
import Footer from "../components/Layout/Footer";

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
  const router = useRouter();
  const { Component, pageProps } = props;
  const items = [
    {
      id: router.pathname,
      Component,
      pageProps,
    },
  ];
  useWidth();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <GlobalStyles />
          {store.getState().general.isMobile ? (
            <Component {...pageProps} />
          ) : (
            <div style={{ position: "relative" }} className="mainDiv">
              <Transition
                items={items}
                keys={(item) => item.id}
                from={{ transform: "translateX(-100%)", position: "absolute" }}
                initial={{
                  transform: "translateX(-100%)",
                  position: "absolute",
                }}
                enter={{ transform: "translateX(0)", position: "absolute" }}
                leave={{ transform: "translateX(100%)", position: "absolute" }}
              >
                {({ Component, pageProps }) => (styles) => (
                  <animated.div style={{ ...styles, width: "100%" }}>
                    <Component {...pageProps} />
                    <Footer />
                  </animated.div>
                )}
              </Transition>
            </div>
          )}
        </Layout>
        <BigImage />
        <Notification />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
