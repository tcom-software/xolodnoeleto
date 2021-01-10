import React from "react";
import { Global, Section, MiniDiv } from "./styles";
import { GlobalSectionInterface } from "interfaces";

const GlobalSection = ({
  children,

  isWeb,
  isMobile,

  webPadding,
  borderTop,

  borderBottom,
  mobilePadding,

  webBackground,
  mobileBackground,

  width,
  height,

  widthMobile,
  heightMobile,

  webPosition,
  mobilePosition,

  overflowStyle,
}: GlobalSectionInterface) => {
  return (
    <Global
      width={width}
      height={height}
      heightMobile={heightMobile}
      widthMobile={widthMobile}
      isWeb={isWeb}
      isMobile={isMobile}
      mobileBackground={mobileBackground}
      webBackground={webBackground}
      borderTop={borderTop}
      borderBottom={borderBottom}
      overflowStyle={overflowStyle}
      webPosition={webPosition}
      mobilePosition={mobilePosition}
    >
      <Section>
        <MiniDiv webPadding={webPadding} mobilePadding={mobilePadding}>
          {children}
        </MiniDiv>
      </Section>
    </Global>
  );
};

export default GlobalSection;
