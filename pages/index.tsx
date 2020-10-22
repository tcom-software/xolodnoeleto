import React from "react";
import Banner from "../components/Banner";
import SubScriptionEmail from "../components/SubScriptionEmail";
import SuperSale from "../components/SuperSale";
import { connect } from "react-redux";

import ProductGridView from "../components/ProductGridView";
import ProductList from "../components/ProductsList";
import Brands from "../components/Brands";
import LazyLoad from "react-lazyload";
import ShowMoreWrapper from "../components/ShowMoreWrapper";
import { GlobalSection } from "@atoms";
import theme from "styles/theme";

const Index = ({ newProducts, landing }) => {
  return (
    <>
      <Banner />
      <ProductList title={"НОВЫЕ ПРОДУКТЫ"} mobileType={"scroll"}>
        {Object.values(newProducts).map(
          ({ id, src, title, price, vendorCode, selectedStarsCount }) => {
            return (
              <ProductGridView
                key={id}
                id={id}
                src={src}
                title={title}
                price={price}
                vendorCode={vendorCode}
                selectedStarsCount={selectedStarsCount}
              />
            );
          }
        )}
      </ProductList>
      <LazyLoad>
        <SuperSale />
      </LazyLoad>
      <LazyLoad>
        <ProductList title={"СУПЕРЦЕНЫ УСПЕЙ КУПИТЬ!"} mobileType={"scroll"}>
          {Object.values(newProducts).map(
            ({ id, src, title, price, vendorCode, selectedStarsCount }) => {
              return (
                <ProductGridView
                  key={id}
                  id={id}
                  src={src}
                  title={title}
                  price={price}
                  vendorCode={vendorCode}
                  selectedStarsCount={selectedStarsCount}
                  superPrice={true}
                />
              );
            }
          )}
        </ProductList>
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
          />
        </GlobalSection>
      </LazyLoad>
    </>
  );
};

const mapStateToProps = ({
  products: { newProducts },
  general: {
    showMoreTexts: { landing },
  },
}) => ({
  landing,
  newProducts,
});
export default connect(mapStateToProps)(Index);
