import React from "react";
import LazyLoad from "react-lazyload";
import { ImageInterface } from "interfaces";
import { Img } from "./styles";

const Image = (props: ImageInterface) => {
  const {
    simpleWeb,
    webpWeb,
    width,
    height,
    callback,
    customClass = "",
    alt = "",
  } = props;
  return (
    <LazyLoad>
      <picture>
        <source type="image/webp" srcSet={webpWeb} />
        <Img
          src={simpleWeb}
          width={width}
          height={height}
          onClick={callback}
          className={customClass}
          alt={alt}
        />
      </picture>
    </LazyLoad>
  );
};

export default Image;
