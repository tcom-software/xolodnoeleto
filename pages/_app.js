import React, { useEffect } from "react";
import store from "../redux/store";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { animated } from "react-spring";
import { setIsMobile } from "../redux/actions/generalActions";
import BigImage from "../components/BigImage";
import { Transition } from "react-spring/renderprops.cjs";
import { useRouter } from "next/router";

import "../styles/globals.css";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "rc-slider/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";
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
  const { Component, pageProps } = props;
  const router = useRouter();
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
          <div
            style={{
              position: "relative",
              willChange: "transform",
            }}
          >
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
        </Layout>
        <BigImage />
      </Provider>
    </ThemeProvider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
