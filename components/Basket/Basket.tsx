import React, { useEffect } from "react";
import theme from "styles/theme";
import WebCase from "../ProductListView/WebCase";
import TitleNavigation from "../TitleNavigation";
import { Container, GridSection } from "./styles";
import getBasketStepInfo from "./getBasketStepInfo";
import { DataEmpty, GlobalSection } from "@famous";
import MobileCase from "../ProductListView/MobileCase";

import {
  AboutOrder,
  StepInformation,
  BasketBuyForm,
  OrderDone,
  DeliveryOrPayment,
} from "./content";
import { object } from "prop-types";

const Basket = ({
  basketItems,
  isMobile,
  stepState,
  basketSteps,
  selectedData,
  stepsResult,
  stepsContentData: { stepFour, stepFive },
}) => {
  const itemsLength = Object.keys(basketItems).length;
  const stepObject = getBasketStepInfo(stepState, basketSteps);

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
      console.log(checkSelectedData, "-------checkSelectedData");
      // here will be axios which direction to Arman backend
    }
  }, [stepsResult, selectedData]);

  if (itemsLength === 0) {
    return (
      <>
        <TitleNavigation
          title="Оформление заказа"
          currentPage="Оформление Заказа"
        />
        <DataEmpty title={"У вас нет продуктов в корзине"} />
      </>
    );
  }

  return (
    <Container>
      {stepState === 6 ? null : (
        <TitleNavigation
          title="Оформление заказа"
          currentPage="Оформление Заказа"
        />
      )}

      <GlobalSection
        isMobile={true}
        isWeb={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.secondBackground}
        webPadding="50px 0"
        mobilePadding="0 0"
      >
        {stepState === 6 ? (
          <OrderDone />
        ) : (
          <GridSection stepState={stepState} isMobile={isMobile}>
            {stepState === 1 ? (
              isMobile ? (
                <MobileCase basketItems={basketItems} functionalType="basket" />
              ) : (
                <WebCase
                  basketItems={basketItems}
                  header={true}
                  borderShow={true}
                  functionalType="basket"
                />
              )
            ) : null}

            {stepState == 2 ? (
              <StepInformation stepStructure={stepObject}>
                {stepState == 2 ? (
                  isMobile ? (
                    <MobileCase
                      basketItems={basketItems}
                      functionalType="basket"
                    />
                  ) : (
                    <WebCase
                      basketItems={basketItems}
                      borderShow={true}
                      functionalType="basket"
                    />
                  )
                ) : null}
              </StepInformation>
            ) : null}

            {stepState == 3 ? (
              <StepInformation stepStructure={stepObject}>
                <BasketBuyForm />
              </StepInformation>
            ) : null}

            {stepState == 4 ? (
              <StepInformation stepStructure={stepObject}>
                <DeliveryOrPayment data={stepFour} />
              </StepInformation>
            ) : null}

            {stepState == 5 ? (
              <StepInformation stepStructure={stepObject}>
                <DeliveryOrPayment data={stepFive} />
              </StepInformation>
            ) : null}

            <AboutOrder />

            {stepState === 1 ? (
              <StepInformation stepStructure={stepObject} />
            ) : null}
          </GridSection>
        )}
      </GlobalSection>
    </Container>
  );
};

export default Basket;
