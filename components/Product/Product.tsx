import React, { useState, useEffect } from "react";
import { GlobalSection, Loading } from "@famous";
import theme from "styles/theme";
import { useRouter } from "next/router";
import ReviewList from "../ReviewList";
import ProductList from "../ProductsList";
import ImageContainer from "./content/ImageContainer";
import FunctionalContainer from "./content/FunctionalContainer";
import { ProductTopContainer } from "./styles";
import Characteristics from "./content/Characteristics";

const Product = ({ productInfo, seenProducts, getProductInfo }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    id && getProductInfo(id);
  }, [id]);

  if (Object.keys(productInfo).length === 0) {
    return <Loading />;
  }

  return (
    <>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        mobilePadding={"20px 8px"}
      >
        <ProductTopContainer>
          <ImageContainer productKey={id} />
          <FunctionalContainer />
        </ProductTopContainer>
      </GlobalSection>
      <Characteristics />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding={"30px 0 0 0"}
        mobilePadding={"0"}
      >
        <ReviewList />
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding={"60px 0"}
        mobilePadding={"0"}
      >
        <ProductList
          title={"ВЫ НЕДАВНО СМОТРЕЛИ"}
          mobileType={"scroll"}
          products={seenProducts}
        />
      </GlobalSection>
    </>
  );
};

export default Product;
