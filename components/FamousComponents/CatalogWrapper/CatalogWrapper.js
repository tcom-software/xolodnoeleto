import React from "react";
import Loading from "../Loading";
import { DataEmpty } from "../index";
import theme from "../../../styles/theme";
import Filters from "./components/Filters";
import Products from "./components/Products";
import ProductList from "../../ProductsList";
import TitleNavigation from "../../TitleNavigation";
import { CatalogWrapperContainer } from "./styles";
import { GlobalSection, SeenProductWrapper } from "@famous";

const CatalogWrapper = ({
  products,
  productsLoading,
  seenProducts,
  children,
}) => {
  function domCases() {
    switch (true) {
      case productsLoading:
      case productsLoading && products.length == 0:
      case productsLoading && products.length > 0:
        return <Loading />;
        break;
      case productsLoading === false && products.length === 0:
        return <DataEmpty title={"Нет продуктов"} />;
      default:
        return children;
    }
  }

  return (
    <>
      <TitleNavigation title="Каталог" currentPage="Каталог" />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        mobilePadding={"10px 8px"}
      >
        <CatalogWrapperContainer>
          <Filters />
          <Products>{domCases()}</Products>
        </CatalogWrapperContainer>
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webPadding={"35px 0px"}
          webBackground={theme.body.background}
        >
          <ProductList
            title={"ВЫ НЕДАВНО СМОТРЕЛИ"}
            mobileType={"scroll"}
            products={seenProducts}
          />
        </GlobalSection>
      </SeenProductWrapper>
    </>
  );
};
export default CatalogWrapper;
