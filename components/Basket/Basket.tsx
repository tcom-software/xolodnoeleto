import { Container, GridSection } from "./styles";
import { TitleNavigation, AboutOrder } from "./content";
import { Button, GlobalSection } from "@atoms";
import theme from "styles/theme";
import MobileCase from "../ProductListView/MobileCase";
import WebCase from "../ProductListView/WebCase";
import StepInformation from "./content/StepInformation";
import React from "react";

const steps = {
  stepOne: {
    top: [],
    current: [
      { title: "Вернуться к выбору товаров", svgType: "longArrowLeft" },
    ],
    bottom: [],
  },
  stepTwo: {
    top: [],
    current: [{ title: "Товары в заказе" }],
    bottom: [
      { title: "Покупатель" },
      { title: "Доставка" },
      { title: "Оплата" },
    ],
  },
  stepThree: {
    top: [{ title: "Товары в заказе" }],
    current: [{ title: "Покупатель" }],
    bottom: [{ title: "Доставка" }, { title: "Оплата" }],
  },
  stepFour: {
    top: [{ title: "Товары в заказе" }, { title: "Покупатель" }],
    current: [{ title: "Доставка" }],
    bottom: [{ title: "Оплата" }],
  },
  stepFive: {
    top: [
      { title: "Товары в заказе" },
      { title: "Покупатель" },
      { title: "Доставка" },
    ],
    current: [{ title: "Оплата" }],
    bottom: [],
  },
};
const customSwitch = (stepState) => {
  switch (stepState) {
    case 1:
      return steps.stepOne;
    case 2:
      return steps.stepTwo;
    case 3:
      return steps.stepThree;
    case 4:
      return steps.stepFour;
    case 5:
      return steps.stepFive;
    default:
      return steps.stepOne;
  }
};

const Basket = ({ basketItems, isMobile, stepState }) => {
  const stepObject = customSwitch(stepState);

  return (
    <Container>
      <TitleNavigation
        title="Оформление заказа"
        currentPage="Оформление Заказа"
      />
      <GlobalSection
        isMobile={true}
        isWeb={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.secondBackground}
      >
        <GridSection>
          {stepState === 1 ? (
            isMobile ? (
              <MobileCase basketItems={basketItems} />
            ) : (
              <WebCase basketItems={basketItems} edit={true} header={true} />
            )
          ) : null}

          {stepState !== 1 ? (
            <StepInformation stepStructure={stepObject}>
              {isMobile ? (
                <MobileCase basketItems={basketItems} />
              ) : (
                <WebCase
                  basketItems={basketItems}
                  edit={true}
                  imageBorder={true}
                />
              )}
            </StepInformation>
          ) : null}

          <AboutOrder />

          {stepState === 1 ? (
            <StepInformation stepStructure={stepObject} />
          ) : null}
        </GridSection>
      </GlobalSection>
    </Container>
  );
};

export default Basket;
