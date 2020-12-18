import React from "react";
import { Container, Title, ListContainer } from "./styles";
import ProductGridView from "../ProductGridView";

const ProductList = ({ title, products, mobileType, superPrice }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer mobileType={mobileType}>
        {Object.values(products).map((item, index) => {
          return (
            <ProductGridView key={index} item={item} superPrice={superPrice} />
          );
        })}
      </ListContainer>
    </Container>
  );
};

export default ProductList;
