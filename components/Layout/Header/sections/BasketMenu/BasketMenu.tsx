import React from "react";
import { Container, ListContainer, MakeOrder, TotalPrice } from "./styles";
import BasketProduct from "./BasketProduct";
import { Button } from "@atoms";
import { makePrice } from "utils";

const BasketMenu = ({ whatMenu, basketItems, total_amount }: any) => {
  return (
    <Container whatMenu={whatMenu}>
      <ListContainer>
        {Object.values(basketItems).map(
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
              />
            );
          }
        )}
      </ListContainer>
      <MakeOrder>
        <TotalPrice>
          Итого к оплате
          <span>{makePrice(total_amount)}</span>
        </TotalPrice>
        <Button type="primary" width="277px" height="47px">
          ОФОРМИТЬ ЗАКАЗ
        </Button>
      </MakeOrder>
    </Container>
  );
};

export default BasketMenu;
