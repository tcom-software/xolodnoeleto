import React from "react";

const ProductImage = ({ src, alt = "", title = "", className, callback }) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      onClick={callback != null ? (e) => callback(e) : null}
      onError={(error) => {
        error.target.src = "/images/no_found/broken-image.png";
      }}
    />
  );
};

export default ProductImage;
