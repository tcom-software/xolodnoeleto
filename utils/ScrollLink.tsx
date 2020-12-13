import React from "react";
import { scroller } from "react-scroll";

const scrollTo = (to) => {
  setTimeout(() => {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, 300);
};

const ScrollLink = ({ children, to }) => (
  <div onClick={() => scrollTo(to)} className="r-elem">
    {children}
  </div>
);

export default ScrollLink;
