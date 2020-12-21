import React, { useEffect } from "react";
import theme from "styles/theme";
import { useRouter } from "next/router";
import ProductList from "../ProductsList";
import { ProductTopContainer } from "./styles";
import { GlobalSection, Loading } from "@famous";
import ImageContainer from "./content/ImageContainer";
import Characteristics from "./content/Characteristics";
import FunctionalContainer from "./content/FunctionalContainer";

const Product = ({
  productInfo,
  seenProducts,
  getProductInfo,
  clearProductInfo,
}) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    id && getProductInfo(id);
    return () => clearProductInfo();
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
        webPadding={"60px 0"}
        mobilePadding={"0"}
      >
        <ProductList
          superPrice={false}
          mobileType={"scroll"}
          products={seenProducts}
          title={"ВЫ НЕДАВНО СМОТРЕЛИ"}
        />
      </GlobalSection>
    </>
  );
};

export default Product;
