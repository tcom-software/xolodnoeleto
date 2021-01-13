import React from "react";

const ProductImage = ({ src, alt = "", title = "", className }) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      onError={(error) => {
        error.target.src = "/images/no_found/broken-image.png";
      }}
    />
  );
};

export default ProductImage;
