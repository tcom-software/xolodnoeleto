import React from "react";
import { connect } from "react-redux";
import theme from "../styles/theme";
import { GlobalSection } from "@famous";
import Compare from "../components/Compare";
import ProductList from "../components/ProductsList";
import TitleNavigation from "../components/TitleNavigation";

const Index = ({ seenProducts }) => {
  return (
    <>
      <TitleNavigation
        title="Сравнение товаров"
        currentPage="Сравнение товаров"
      />
      <Compare />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding="40px 0"
      >
        <ProductList
          title={"Вы недавно смотрели"}
          mobileType={"scroll"}
          products={seenProducts}
        />
      </GlobalSection>
    </>
  );
};

const mapStateToProps = ({ products: { seenProducts } }) => ({
  seenProducts,
});
export default connect(mapStateToProps)(Index);
