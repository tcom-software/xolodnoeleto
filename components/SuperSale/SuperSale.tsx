import React from "react";
import { GlobalSection, Image } from "@atoms";
import { Container } from "./styles";
import theme from "styles/theme";

const SuperSale = () => {
  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      webBackground={theme.body.background}
    >
      <Container>
        <Image
          simpleWeb="images/banners/super-sale.png"
          simpleMobile="images/banners/super-sale.png"
          webpWeb={""}
          webpMobile={""}
        />
      </Container>
    </GlobalSection>
  );
};

export default SuperSale;
