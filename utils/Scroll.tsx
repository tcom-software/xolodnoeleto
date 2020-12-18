import React from "react";
import { scroller } from "react-scroll";

export const To = (to) => {
  setTimeout(() => {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, 300);
};

const Link = ({ children, to }) => (
  <div onClick={() => To(to)} className="r-elem">
    {children}
  </div>
);

export default { To, Link };
