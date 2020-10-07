import React from "react";
import Link from "next/link";
import {
  Container,
  ListContainer,
  MakeOrder,
  TotalPrice,
  Table,
} from "./styles";
import ProductListView from "components/ProductListView";

import { Button } from "@atoms";
import { makePrice } from "utils";

const BasketMenu = ({ whatMenu, basketItems, total_amount }: any) => {
  return (
    <Container whatMenu={whatMenu}>
      <ListContainer>
        <Table>
          <tbody>
            {Object.values(basketItems).map((item, id) => (
              <ProductListView key={id} item={item} imageBorder={true} />
            ))}
          </tbody>
        </Table>
      </ListContainer>
      <MakeOrder>
        <TotalPrice>
          Итого к оплате
          <span>{makePrice(total_amount)}</span>
        </TotalPrice>
        <Link href="/basket">
          <Button type="primary" width="277px" height="47px">
            ОФОРМИТЬ ЗАКАЗ
          </Button>
        </Link>
      </MakeOrder>
    </Container>
  );
};

export default BasketMenu;
