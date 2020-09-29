import React from "react";
import { Top, Bottom, Middle, Banner } from "./sections";

const Header = () => {
  return (
    <header>
      <Banner />
      <Top />
      <Middle />
      <Bottom />
    </header>
  );
};

export default Header;
