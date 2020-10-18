import React from "react";
import { connect } from "react-redux";
import ProductGridView from "../components/ProductGridView";
import ProductList from "../components/ProductsList";
import TitleNavigation from "../components/TitleNavigation";
import Compare from "../components/Compare";

const Index = ({ seenProducts }) => {
  return (
    <>
      <TitleNavigation
        title="Сравнение товаров"
        currentPage="Сравнение товаров"
      />
      <Compare />
      <ProductList title={"вы недавно смотрели"} mobileType={"scroll"}>
        {Object.values(seenProducts).map(
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
    </>
  );
};

const mapStateToProps = ({ products: { seenProducts } }) => ({
  seenProducts,
});
export default connect(mapStateToProps)(Index);
