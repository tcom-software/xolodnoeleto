import React from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import { GlobalSection } from "@famous";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import SuperSale from "../components/SuperSale";
import ProductList from "../components/ProductsList";
import SubScriptionEmail from "../components/SubScriptionEmail";
import ShowMoreWrapper from "../components/ShowMoreWrapper";

import theme from "styles/theme";
import ReviewList from "../components/ReviewList";

const Index = ({ newProducts, superPriceProducts, landing }) => {
  /*return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      webBackground={theme.body.background}
    >
      <ReviewList />
    </GlobalSection>
  );*/

  return (
    <>
      <Banner />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding="40px 0"
      >
        <ProductList
          title={"НОВЫЕ ПРОДУКТЫ"}
          mobileType={"scroll"}
          products={newProducts}
        />
      </GlobalSection>
      <LazyLoad>
        <SuperSale />
      </LazyLoad>
      <LazyLoad>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          webPadding="40px 0"
        >
          <ProductList
            title={"СУПЕРЦЕНЫ УСПЕЙ КУПИТЬ!"}
            mobileType={"scroll"}
            products={superPriceProducts}
          />
        </GlobalSection>
      </LazyLoad>
      <LazyLoad>
        <Brands />
      </LazyLoad>
      <LazyLoad>
        <SubScriptionEmail />
      </LazyLoad>
      <LazyLoad>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          mobilePadding="25px 0"
          webPadding="50px 0 20px"
        >
          <ShowMoreWrapper
            color="#5B5B5B"
            text={landing}
            fromHeight={90}
            border={"none"}
            svgShow={true}
            buttonStyle={false}
            buttonText={[`Показать больше`, `Показать меньше`]}
          />
        </GlobalSection>
      </LazyLoad>
    </>
  );
};

const mapStateToProps = ({
  products: { newProducts, superPriceProducts },
  general: {
    showMoreTexts: { landing },
  },
}) => ({
  landing,
  newProducts,
  superPriceProducts,
});
export default connect(mapStateToProps)(Index);
