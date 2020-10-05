import React from "react";
import { ImageInterface } from "interfaces";

const Image = (props: ImageInterface) => {
  const { simpleWeb, simpleMobile, webpWeb, webpMobile } = props;
  return (
    <picture>
      <source type="image/webp" media="(min-width:768px)" srcSet={webpMobile} />
      <source type="image/webp" srcSet={webpWeb} />

      <source media="(max-width: 768px)" srcSet={simpleMobile} />
      <img src={simpleWeb} />
    </picture>
  );
};

export default Image;
