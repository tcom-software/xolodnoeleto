import React from "react";
import { Button } from "@atoms";
import { Container, Title, MiniCon, Border } from "./styles";
import { makePrice } from "utils";

const AboutOrder = ({ total_amount, itemsCount, stepCount }) => {
  return (
    <Container stepCount={stepCount}>
      <MiniCon>
        <Title>ВАШ ЗАКАЗ</Title>
      </MiniCon>
      <Border />
      <MiniCon>
        <div>
          <p>Товары ({itemsCount})</p>
          <p>{makePrice(total_amount)}</p>
        </div>
        <div>
          <p>НДС (20%, вкл. в цену)</p>
          <p>1 500 руб.</p>
        </div>
        <div>
          <p>Скидка</p>
          <p>0 00 %</p>
        </div>
        <div>
          <p>Доставка</p>
          <p>бесплатно</p>
        </div>
      </MiniCon>
      <Border />
      <MiniCon childrenIsBold={true}>
        <div>
          <p>Итого к оплате</p>
          <p>{makePrice(total_amount)}</p>
        </div>
        <Button type="primary" width="100%" height="47px">
          ОФОРМИТЬ ЗАКАЗ
        </Button>
      </MiniCon>
    </Container>
  );
};

export default AboutOrder;
