import React from "react";
import theme from "styles/theme";
import TitleNavigation from "../TitleNavigation";
import { FavoriteContainer } from "./styles";
import { GlobalSection } from "@famous";
import MobileCase from "../ProductListView/MobileCase";
import WebCase from "../ProductListView/WebCase";
import ProductList from "../ProductsList";

const Favorite = ({ isMobile, favoriteProducts, seenProducts }) => {
  return (
    <>
      <TitleNavigation title={"ИЗБРАННЫЕ"} currentPage={"Избранные"} />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        mobileBackground={theme.body.background}
        webBackground={theme.body.secondBackground}
      >
        <FavoriteContainer>
          {isMobile ? (
            <MobileCase
              basketItems={favoriteProducts}
              functionalType="favorite"
            />
          ) : (
            <WebCase
              basketItems={favoriteProducts}
              header={true}
              borderShow={true}
              basketButton={true}
              functionalType="favorite"
            />
          )}
        </FavoriteContainer>
      </GlobalSection>
      <GlobalSection
        isWeb={false}
        isMobile={true}
        webBackground={theme.body.background}
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

export default Favorite;
