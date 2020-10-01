import React from "react";
import { ImageInterface } from "interfaces";

const Image = (props: ImageInterface) => {
  const { jpg, jpgMobile, webp, webpMobile } = props;
  return (
    <picture>
      <source type="image/webp" media="(min-width:768px)" srcSet={webp} />
      <source type="image/webp" srcSet={webpMobile} />

      <source media="(min-width:768px)" srcSet={jpg} />
      <img src={jpgMobile} />
    </picture>
  );
};

export default Image;
