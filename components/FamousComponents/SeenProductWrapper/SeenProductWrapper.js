import React from "react";

const SeenProductWrapper = ({ children, seenProducts }) => {
  if (seenProducts === undefined) return null;
  const products = seenProducts.length
    ? seenProducts
    : Object.values(seenProducts);

  if (products.length > 0) {
    return children;
  } else {
    return null;
  }
};

export default SeenProductWrapper;
