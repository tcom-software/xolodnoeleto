import React from "react";
import { Container, ListContainer, ItemStyle } from "./styles";
import BasketProduct from "./BasketProduct";

const BasketMenu = ({ whatMenu, basketItems, closeModal }: any) => {
  return (
    <Container whatMenu={whatMenu}>
      <ListContainer>
        {basketItems.map(
          ({ price, src, title, model, manufacturer }, i: number) => {
            return (
              <BasketProduct
                key={i}
                src={src}
                price={price}
                model={model}
                manufacturer={manufacturer}
              />
            );
          }
        )}
      </ListContainer>
    </Container>
  );
};

export default BasketMenu;
