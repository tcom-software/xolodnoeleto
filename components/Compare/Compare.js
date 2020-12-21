import React, { useState } from "react";
import theme from "styles/theme";
import getConfig from "next/config";
import ProductList from "../ProductsList";
import { CompareContainer } from "./styles";
import TitleNavigation from "../TitleNavigation";
import CreateCompareInformation from "./compareInformation";
import { Button, GlobalSection, Input, SvgIcon } from "@famous";
import AddProductCon from "./content/AddProductCon";
import ProductsCon from "./content/ProductsCon";

const Compare = ({ seenProducts, compareProducts }) => {
  const [type, setType] = useState(1);
  const products = Object.values(compareProducts);
  const array = [...Array(3 - products.length == 0 ? 0 : 1)];

  const {
    publicRuntimeConfig: { productsUpload, serverUrl },
  } = getConfig();

  console.log(compareProducts);

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
      >
        <CompareContainer productCounts={products.length}>
          <div className="top-section">
            <AddProductCon
              type={type}
              array={array}
              setType={setType}
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
    </>
  );
};

export default Compare;
