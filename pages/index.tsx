import React from "react";
import Banner from "../components/Banner";
import SubScriptionEmail from "../components/SubScriptionEmail";
import SuperSale from "../components/SuperSale";
import { connect } from "react-redux";

import Product from "../components/Product";
import ProductList from "../components/ProductList";
import Brands from "../components/Brands";

const Index = ({ newProducts }) => {
  return (
    <>
      <Banner />
      <ProductList title={"НОВЫЕ ПРОДУКТЫ"} mobileType={"scroll"}>
        {newProducts.map(
          ({ src, title, price, vendorCode, selectedStarsCount }, i) => {
            return (
              <Product
                key={i}
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
