import React from "react";

const SeenProductWrapper = ({ children, seenProducts }) => {
  const products = Object.keys(seenProducts);
  if (products.length > 0) {
    return children;
  } else {
    return null;
  }
};

export default SeenProductWrapper;
