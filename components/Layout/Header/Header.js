import React from "react";
import { Top, Bottom, Middle, Banner } from "./sections";
import { Element as ScrollPosition } from "react-scroll";

const Header = () => {
  return (
    <header>
      <Banner />
      <Top />
      <Middle />
      <ScrollPosition name="default" />
      <Bottom />
    </header>
  );
};

export default Header;
