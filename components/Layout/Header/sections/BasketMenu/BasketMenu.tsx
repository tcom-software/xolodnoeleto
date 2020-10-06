import React from "react";
import { Container, ListContainer, ItemStyle } from "./styles";
import BasketProduct from "./BasketProduct";

const BasketMenu = ({ whatMenu, basketItems, closeModal }: any) => {
  return (
    <Container whatMenu={whatMenu}>
      <ListContainer>
        {basketItems.map(({ price, src, title }, i: number) => {
          return (
            <BasketProduct key={i} price={price} src={src} title={title} />
          );
        })}
      </ListContainer>
    </Container>
  );
};

export default BasketMenu;
