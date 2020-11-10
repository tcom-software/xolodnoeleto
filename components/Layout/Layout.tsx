import React from "react";
import Header from "./Header";
import PopUp from "./PopUp";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <PopUp />
    </>
  );
};

export default Layout;
