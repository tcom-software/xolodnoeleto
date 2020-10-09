import React from "react";
import theme from "styles/theme";
import { GlobalSection } from "@atoms";
import WebCase from "../ProductListView/WebCase";
import { Container, GridSection } from "./styles";
import { TitleNavigation, AboutOrder } from "./content";
import MobileCase from "../ProductListView/MobileCase";
import StepInformation from "./content/StepInformation";
import BasketBuyForm from "./content/BasketBuyForm";

const Basket = ({ basketItems, isMobile, stepState, basketSteps }) => {
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
      default:
        return basketSteps.stepOne;
    }
  };
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
        <GridSection stepState={stepState}>
          {stepState === 1 ? (
            isMobile ? (
              <MobileCase basketItems={basketItems} />
            ) : (
              <WebCase basketItems={basketItems} edit={true} header={true} />
            )
          ) : null}

          {stepState == 2 ? (
            <StepInformation stepStructure={stepObject}>
              {stepState == 2 ? (
                isMobile ? (
                  <MobileCase basketItems={basketItems} />
                ) : (
                  <WebCase basketItems={basketItems} edit={true} />
                )
              ) : null}
            </StepInformation>
          ) : null}

          {stepState == 3 ? (
            <StepInformation stepStructure={stepObject}>
              <BasketBuyForm />
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
