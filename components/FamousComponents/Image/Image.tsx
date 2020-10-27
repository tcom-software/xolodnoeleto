import React from "react";
import { ImageInterface } from "interfaces";
import LazyLoad from "react-lazyload";
import { Img } from "./styles";

const Image = (props: ImageInterface) => {
  const { simpleWeb, simpleMobile, webpWeb, webpMobile, width, height } = props;
  return (
    <LazyLoad>
      <picture>
        <source
          type="image/webp"
          media="(min-width:768px)"
          srcSet={webpMobile}
        />
        <source type="image/webp" srcSet={webpWeb} />

        <source media="(max-width: 768px)" srcSet={simpleMobile} />
        <Img src={simpleWeb} width={width} height={height} />
      </picture>
    </LazyLoad>
  );
};

export default Image;
