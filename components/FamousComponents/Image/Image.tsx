import React from "react";
import { ImageInterface } from "interfaces";
import LazyLoad from "react-lazyload";
import { Img } from "./styles";

const Image = (props: ImageInterface) => {
  const {
    simpleWeb,
    webpWeb,
    width,
    height,
    callback,
    customClass = "",
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
        />
      </picture>
    </LazyLoad>
  );
};

export default Image;
