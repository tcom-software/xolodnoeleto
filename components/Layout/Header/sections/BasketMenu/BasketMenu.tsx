import React from "react";
import Link from "next/link";
import { Container, ListContainer, MakeOrder, TotalPrice } from "./styles";
import WebCase from "components/ProductListView/WebCase";

import { Button } from "@atoms";
import { makePrice } from "utils";

const BasketMenu = ({
  modalRef,
  modalType,
  closeModal,
  basketItems,
  total_amount,
  changeOrderStep,
}: any) => {
  return (
    <Container
      modalType={modalType}
      ref={modalType === "basket" ? modalRef : null}
    >
      <ListContainer>
        <WebCase basketItems={basketItems} />
      </ListContainer>
      <MakeOrder>
        <TotalPrice>
          Итого к оплате
          <span>{makePrice(total_amount)}</span>
        </TotalPrice>
        <Link href="/basket">
          <Button
            type="primary"
            width="277px"
            height="47px"
            onClick={() => changeOrderStep(1) && closeModal()}
          >
            ОФОРМИТЬ ЗАКАЗ
          </Button>
        </Link>
      </MakeOrder>
    </Container>
  );
};

export default BasketMenu;
