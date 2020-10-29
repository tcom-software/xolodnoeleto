import React from "react";
import { Container, Title, ListContainer } from "./styles";
import ProductGridView from "../ProductGridView";

const ProductList = ({ title, products, mobileType }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer mobileType={mobileType}>
        {Object.values(products).map(
          ({
            id,
            src,
            title,
            price,
            vendorCode,
            selectedStarsCount,
            superPrice = false,
          }) => {
            return (
              <ProductGridView
                key={id}
                id={id}
                src={src}
                title={title}
                price={price}
                vendorCode={vendorCode}
                superPrice={superPrice}
                selectedStarsCount={selectedStarsCount}
              />
            );
          }
        )}
      </ListContainer>
    </Container>
  );
};

export default ProductList;
