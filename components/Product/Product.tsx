import React, { useState } from "react";
import { ProductTopContainer, ProductBottomContainer } from "./styles";
import { GlobalSection } from "@famous";
import theme from "styles/theme";
import ImageContainer from "./content/ImageContainer";
import InformationContainer from "./content/InformationContainer";
import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
      >
        <ProductTopContainer>
          <ImageContainer productKey={id} />
          <InformationContainer />
        </ProductTopContainer>
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
      >
        <ProductTopContainer></ProductTopContainer>
      </GlobalSection>
    </>
  );
};
export default Product;
