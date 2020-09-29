import React from "react";
import { BannerContainer } from "../styles";
import { Image, SvgIcon } from "@atoms";
import theme from "styles/theme";

const Banner = () => {
  return (
    <BannerContainer>
      <Image
        jpg={`/images/banners/top-banner.jpg`}
        jpgMobile={`/images/banners/top-banner.jpg`}
        webp={`/images/banners/top-banner.webp`}
        webpMobile={`/images/banners/top-banner.webp`}
      />
      <SvgIcon
        type="close"
        width={15}
        height={15}
        color={theme.close.color}
        callback={() => {}}
      />
    </BannerContainer>
  );
};

export default Banner;
