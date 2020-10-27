import React from "react";
import { Global, Section, MiniDiv } from "./styles";
import { GlobalSectionInterface } from "interfaces";

const GlobalSection = ({
  isWeb,
  webPadding,
  mobilePadding,
  children,
  overflowStyle,
  isMobile,
  borderTop,
  borderBottom,
  webBackground,
  mobileBackground,
  width,
  height,
  widthMobile,
  heightMobile,
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
