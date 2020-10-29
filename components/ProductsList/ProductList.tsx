import React from "react";
import { Container, Title, ListContainer } from "./styles";
import ProductGridView from "../ProductGridView";

const ProductList = ({ title, products, mobileType }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer mobileType={mobileType}>
        {Object.values(products).map((item, index) => {
          return <ProductGridView key={index} item={item} />;
        })}
      </ListContainer>
    </Container>
  );
};

export default ProductList;
