import { Container } from "./styles";
import BasketProduct from "../../../Layout/Header/sections/BasketMenu/BasketProduct";
import React from "react";

const Products = ({ items }) => {
  return (
    <Container>
      {Object.values(items).map(
        ({ id, price, src, model, count, manufacturer }: any) => {
          return (
            <BasketProduct
              key={id}
              id={id}
              src={src}
              price={price}
              model={model}
              count={count}
              manufacturer={manufacturer}
              edit={true}
            />
          );
        }
      )}
    </Container>
  );
};

export default Products;
