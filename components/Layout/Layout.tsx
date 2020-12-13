import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PopUp from "./PopUp";
import { Element as ScrollPosition } from "react-scroll";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <ScrollPosition name="default" />
        {children}
      </main>
      <Footer />
      <PopUp />
    </>
  );
};

export default Layout;
