import React from "react";
import { Container, Title, ListContainer } from "./styles";
import ProductGridView from "../ProductGridView";

const ProductList = ({ title, products, mobileType, superPrice }) => {
  const Array = products.length ? products : Object.values(products);

  if (Array.length > 0) {
    return (
      <Container>
        <Title>{title}</Title>
        <ListContainer mobileType={mobileType}>
          {Array.map((item, index) => {
            return (
              <ProductGridView
                key={index}
                item={item}
                superPrice={superPrice}
              />
            );
          })}
        </ListContainer>
      </Container>
    );
  } else {
    return null;
  }
};

export default ProductList;
