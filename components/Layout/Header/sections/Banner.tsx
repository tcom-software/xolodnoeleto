import React from "react";
import theme from "styles/theme";
import { Image, SvgIcon } from "@famous";
import { BannerContainer } from "../styles";

const Banner = () => {
  return (
    <BannerContainer>
      <Image
        simpleWeb={`/images/banners/top-banner.jpg`}
        simpleMobile={`/images/banners/top-banner.jpg`}
        webpWeb={`/images/banners/top-banner.webp`}
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
