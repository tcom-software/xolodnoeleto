import { Container, GridSection } from "./styles";
import { TitleNavigation, AboutOrder } from "./content";
import { GlobalSection } from "@atoms";
import theme from "styles/theme";
import MobileCase from "../ProductListView/MobileCase";
import WebCase from "../ProductListView/WebCase";

import React from "react";

const Basket = ({ basketItems, isMobile }) => {
  return (
    <Container>
      <TitleNavigation
        title="Оформление заказа"
        currentPage="Оформление Заказа"
      />
      <GlobalSection
        isMobile={true}
        isWeb={true}
        webBackground={theme.body.background}
        mobileBackground={theme.body.secondBackground}
      >
        <GridSection>
          {isMobile ? (
            <MobileCase basketItems={basketItems} />
          ) : (
            <WebCase basketItems={basketItems} edit={true} />
          )}
          <AboutOrder />
        </GridSection>
      </GlobalSection>
    </Container>
  );
};

export default Basket;
