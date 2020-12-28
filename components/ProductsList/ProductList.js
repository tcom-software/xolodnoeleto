import React from "react";
import { Container, Title, ListContainer } from "./styles";
import ProductGridView from "../ProductGridView";

const ProductList = ({ title, products, mobileType, superPrice }) => {
  const Array = products.length ? products : Object.values(products);
  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer mobileType={mobileType}>
        {Array.map((item, index) => {
          return (
            <ProductGridView key={index} item={item} superPrice={superPrice} />
          );
        })}
      </ListContainer>
    </Container>
  );
};

export default ProductList;
