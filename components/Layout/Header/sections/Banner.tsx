import React, { useState } from "react";
import theme from "styles/theme";
import { BannerContainer } from "../styles";
import { GlobalSection, Image, SvgIcon } from "@famous";

const Banner = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      webBackground={theme.body.background}
      webPadding={"0"}
      mobilePadding={"0"}
    >
      <BannerContainer>
        <Image
          simpleWeb={`/images/banners/top-banner.jpg`}
          webpWeb={`/images/banners/top-banner.webp`}
        />
        <SvgIcon
          type="close"
          width={15}
          height={15}
          color={theme.close.color}
          callback={() => setVisible(false)}
        />
      </BannerContainer>
    </GlobalSection>
  );
};

export default Banner;
