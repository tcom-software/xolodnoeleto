import React, { useEffect } from "react";
import theme from "styles/theme";
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
      }
    }
  }, [stepsResult, selectedData]);

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
        mobilePadding="50px 0"
      >
        {itemsLength.length === 0 ? (
          <DataEmpty title={"У вас нет продуктов в корзине"} />
        ) : (
          <>
            {stepState === 6 ? (
              <OrderDone />
            ) : (
              <GridSection stepState={stepState} isMobile={isMobile}>
                <BasketStepsCases />

                <AboutOrder />
                {stepState === 1 ? (
                  <StepInformation stepStructure={stepObject} />
                ) : null}
              </GridSection>
            )}
          </>
        )}
      </GlobalSection>
    </Container>
  );
};

export default Basket;
