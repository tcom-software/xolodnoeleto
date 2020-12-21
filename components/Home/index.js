import Banner from "./Banner";
import React from "react";
import Brands from "./Brands";
import SuperSale from "./SuperSale";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import theme from "../../styles/theme";
import { GlobalSection } from "@famous";
import ProductList from "../ProductsList";
import ShowMoreWrapper from "../ShowMoreWrapper";
import SubScriptionEmail from "./SubScriptionEmail";
import ReviewList from "../ReviewList";

const Index = ({ newProducts, superPriceProducts, landing }) => {
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
            superPrice={true}
            mobileType={"scroll"}
            products={superPriceProducts}
          />
        </GlobalSection>
      </LazyLoad>
      <LazyLoad>
        <Brands />
      </LazyLoad>
      {/* <LazyLoad>
        <SubScriptionEmail />
      </LazyLoad>*/}
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
            padding={"15px"}
            buttonTextAlign="center"
            buttonText={[`Показать больше`, `Показать меньше`]}
          />
        </GlobalSection>
      </LazyLoad>
      <LazyLoad>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          webPadding={"30px 0 30px 0"}
          mobilePadding={"0"}
        >
          <ReviewList />
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
