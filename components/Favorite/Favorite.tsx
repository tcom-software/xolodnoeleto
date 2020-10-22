import React from "react";
import theme from "styles/theme";
import TitleNavigation from "../TitleNavigation";
import { FavoriteContainer } from "./styles";
import { GlobalSection } from "@atoms";
import MobileCase from "../ProductListView/MobileCase";
import WebCase from "../ProductListView/WebCase";

const Favorite = ({ isMobile, favoriteProducts }) => {
  return (
    <>
      <TitleNavigation title={"ИЗБРАННЫЕ"} currentPage={"Избранные"} />
      <GlobalSection
        isWeb={true}
        isMobile={true}
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
              basketButton={true}
              functionalType="favorite"
            />
          )}
        </FavoriteContainer>
      </GlobalSection>
    </>
  );
};

export default Favorite;