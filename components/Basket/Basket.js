import React, { useEffect } from "react";
import theme from "styles/theme";
import { Scroll } from "@utils";
import TitleNavigation from "../TitleNavigation";
import { Container, GridSection } from "./styles";
import { DataEmpty, GlobalSection } from "@famous";
import BasketStepsCases from "./BasketStepsCases";
import getBasketStepInfo from "./getBasketStepInfo";
import { AboutOrder, OrderDone, StepInformation } from "./content";

const Basket = ({
  basketItems,
  isMobile,
  stepState,
  basketSteps,
  selectedData,
  stepsResult,
  actionMakeOrder,
}) => {
  const stepObject = getBasketStepInfo(stepState, basketSteps);
  const itemsLength = Object.keys(basketItems).length;

  useEffect(() => {
    let orderState = false;
    for (let key in stepsResult) {
      if (key == "stepSix") {
        continue;
      } else if (stepsResult[key]) {
        orderState = true;
      } else {
        orderState = false;
        break;
      }
    }
    if (orderState) {
      let checkSelectedData = false;
      for (let key in selectedData) {
        if (
          (key == "products" && Object.keys(selectedData[key]).length > 0) ||
          (typeof selectedData[key] === "string" && selectedData[key] != "")
        ) {
          checkSelectedData = true;
        } else {
          checkSelectedData = false;
          break;
        }
      }

      if (checkSelectedData) {
        actionMakeOrder(selectedData);
      } else {
      }
    }
  }, [stepsResult, selectedData]);

  const CasesByStep = () => {
    if (stepState === 6) {
      return <OrderDone />;
    } else if (itemsLength === 0) {
      return <DataEmpty title={"У вас нет продуктов в корзине"} />;
    } else {
      return (
        <GridSection stepState={stepState} isMobile={isMobile}>
          <BasketStepsCases />

          <AboutOrder />

          {stepState === 1 ? (
            <StepInformation stepStructure={stepObject} />
          ) : null}
        </GridSection>
      );
    }
  };
  return (
    <Container>
      {stepState !== 6 ? (
        <TitleNavigation
          title="Оформление заказа"
          currentPage="Оформление Заказа"
        />
      ) : null}

      <GlobalSection
        isMobile={true}
        isWeb={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.secondBackground}
        webPadding="50px 0"
        mobilePadding={"10px 0"}
      >
        {CasesByStep()}
      </GlobalSection>
    </Container>
  );
};

export default Basket;
