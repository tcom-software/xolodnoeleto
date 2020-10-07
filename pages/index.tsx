import React from "react";
import Banner from "../components/Banner";
import SubScriptionEmail from "../components/SubScriptionEmail";
import SuperSale from "../components/SuperSale";
import { connect } from "react-redux";

import ProductGridView from "../components/ProductGridView";
import ProductList from "../components/ProductsList";
import Brands from "../components/Brands";

const Index = ({ newProducts }) => {
  return (
    <>
      <Banner />
      <ProductList title={"НОВЫЕ ПРОДУКТЫ"} mobileType={"scroll"}>
        {Object.values(newProducts).map(
          ({ id, src, title, price, vendorCode, selectedStarsCount }) => {
            return (
              <ProductGridView
                key={id}
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
      <Brands />
      <SuperSale />

      <SubScriptionEmail />
    </>
  );
};

const mapStateToProps = ({ products: { newProducts } }) => ({
  newProducts,
});
export default connect(mapStateToProps)(Index);
