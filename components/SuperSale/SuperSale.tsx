import React from "react";
import { GlobalSection, Image, Button } from "@atoms";
import { Container } from "./styles";
import theme from "styles/theme";

const SuperSale = () => {
  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      mobilePadding={"20px 0px"}
      webBackground={theme.body.background}
      mobileBackground={
        "radial-gradient(50% 42.7% at 50% 50%, #FFFFFF 0%, #E5E5E5 100%)"
      }
    >
      <Container>
        <Image
          simpleWeb="images/banners/super-sale-web.png"
          simpleMobile="images/banners/super-sale-mobile.png"
          webpWeb={""}
          webpMobile={""}
        />
        <Button type="primary" width={"180px"} height={"50px"}>
          смотреть все
        </Button>
      </Container>
    </GlobalSection>
  );
};

export default SuperSale;
