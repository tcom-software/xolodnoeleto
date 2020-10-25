import React from "react";
import { Container, Title, ListContainer } from "./styles";

const ProductList = ({ title, children, mobileType }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer mobileType={mobileType}>{children}</ListContainer>
    </Container>
  );
};

export default ProductList;
