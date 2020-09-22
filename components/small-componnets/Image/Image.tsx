import React from "react";
import styled, { css } from "styled-components";

interface ImageInterface {
  variant: string;
}

// const Image = styled.img``;

const Image = () => {
  return (
    <picture>
      {/*<source srcSet="/images/banners/one.webp" />*/}
      <img src="/images/banners/two.jpg" />
    </picture>
  );
};

export default Image;
