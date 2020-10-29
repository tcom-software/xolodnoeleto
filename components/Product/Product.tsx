import React, { useState } from "react";
import { ProductTopContainer, ProductBottomContainer } from "./styles";
import { GlobalSection } from "@famous";
import theme from "styles/theme";
import ImageContainer from "./content/ImageContainer/ImageContainer";
import InformationContainer from "./content/InformationContainer/InformationContainer";
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
          <ImageContainer product={product} />
          <InformationContainer product={product} />
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
