import React from "react";
import theme from "styles/theme";
import TitleNavigation from "../TitleNavigation";
import { FavoriteContainer } from "./styles";
import { GlobalSection } from "@famous";
import { MobileCase, WebCase } from "../ProductListView";
import ProductList from "../ProductsList";
import { DataEmpty } from "@famous";
import { SeenProductWrapper } from "../FamousComponents";

const Favorite = ({ isMobile, favoriteProducts, seenProducts }) => {
  const itemsLength = Object.keys(favoriteProducts).length;

  return (
    <>
      <TitleNavigation title={"ИЗБРАННЫЕ"} currentPage={"Избранные"} />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        mobilePadding={"50px 0"}
        mobileBackground={theme.body.background}
        webBackground={theme.body.secondBackground}
      >
        {itemsLength === 0 ? (
          <DataEmpty title={"У вас нет избранных продуктов"} />
        ) : (
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
        )}
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
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
      </SeenProductWrapper>
    </>
  );
};

export default Favorite;
