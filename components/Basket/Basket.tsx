import React from "react";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import { Container, GridSection } from "./styles";
import WebCase from "../ProductListView/WebCase";
import MobileCase from "../ProductListView/MobileCase";
import TitleNavigation from "../TitleNavigation";
import {
  AboutOrder,
  StepInformation,
  BasketBuyForm,
  OrderDone,
  DeliveryOrPayment,
} from "./content";

const Basket = ({
  basketItems,
  isMobile,
  stepState,
  basketSteps,
  stepsContentData: { stepFour, stepFive },
}) => {
  const customSwitch = (stepState) => {
    switch (stepState) {
      case 1:
        return basketSteps.stepOne;
      case 2:
        return basketSteps.stepTwo;
      case 3:
        return basketSteps.stepThree;
      case 4:
        return basketSteps.stepFour;
      case 5:
        return basketSteps.stepFive;
      case 6:
        return basketSteps.stepSix;
      default:
        return basketSteps.stepOne;
    }
  };
  const stepObject = customSwitch(stepState);
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
