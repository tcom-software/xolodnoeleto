import React from "react";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import ProductList from "../ProductsList";
import { CompareContainer } from "./styles";
import ProductsCon from "./content/ProductsCon";
import TitleNavigation from "../TitleNavigation";
import AddProductCon from "./content/AddProductCon";
import CreateCompareInformation from "./compareInformation";
import { SeenProductWrapper } from "../FamousComponents";

const Compare = ({ seenProducts, compareProducts }) => {
  const products = Object.values(compareProducts);
  const array = [...Array(3 - products.length == 0 ? 0 : 1)];
  const compareInformation = CreateCompareInformation(compareProducts);
  return (
    <>
      <TitleNavigation
        title="Сравнение товаров"
        currentPage="Сравнение товаров"
      />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        mobilePadding={"0px"}
      >
        <CompareContainer>
          <div className="top-section">
            <AddProductCon
              array={array}
              products={products}
              compareInformation={compareInformation}
            />
            <ProductsCon
              products={products}
              compareInformation={compareInformation}
            />
          </div>
        </CompareContainer>
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          webPadding="40px 0"
        >
          <ProductList
            superPrice={false}
            title={"Вы недавно смотрели"}
            mobileType={"scroll"}
            products={seenProducts}
          />
        </GlobalSection>
      </SeenProductWrapper>
    </>
  );
};

export default Compare;
