import React from "react";
import { makePrice } from "@utils";
import { Button } from "@famous";
import { AboutOrderContainer, Title, MiniCon, Border } from "./styles";

const AboutOrder = ({
  total_amount,
  itemsCount,
  stepState,
  changeOrderStep,
  updateStepsResult,
}) => {
  return (
    <AboutOrderContainer stepState={stepState}>
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
        {stepState === 1 ? (
          <Button
            type="primary"
            width="100%"
            height="47px"
            onClick={() => {
              updateStepsResult({ step: "stepOne", value: true });
              changeOrderStep(stepState + 1);
            }}
          >
            ОФОРМИТЬ ЗАКАЗ
          </Button>
        ) : null}
      </MiniCon>
    </AboutOrderContainer>
  );
};

export default AboutOrder;