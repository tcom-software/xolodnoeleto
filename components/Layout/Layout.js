import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PopUp from "./PopUp";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <PopUp />
    </>
  );
};

export default Layout;
