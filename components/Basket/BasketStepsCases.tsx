import React from "react";
import { connect } from "react-redux";
import WebCase from "../ProductListView/WebCase";
import MobileCase from "../ProductListView/MobileCase";
import getBasketStepInfo from "./getBasketStepInfo";
import { BasketBuyForm, DeliveryOrPayment, StepInformation } from "./content";

const BasketStepsCases = ({
  isMobile,
  stepState,
  basketSteps,
  basketItems,
  stepsContentData: { stepFour, stepFive },
}) => {
  const stepObject = getBasketStepInfo(stepState, basketSteps);
  let html;
  switch (stepState) {
    case 1:
      html = (
        <>
          {isMobile ? (
            <MobileCase basketItems={basketItems} functionalType="basket" />
          ) : (
            <WebCase
              basketItems={basketItems}
              header={true}
              borderShow={true}
              functionalType="basket"
            />
          )}
        </>
      );
      break;
    case 2:
      html = (
        <StepInformation stepStructure={stepObject}>
          {isMobile ? (
            <MobileCase basketItems={basketItems} functionalType="basket" />
          ) : (
            <WebCase
              basketItems={basketItems}
              borderShow={true}
              functionalType="basket"
            />
          )}
        </StepInformation>
      );
      break;
    case 3:
      html = (
        <StepInformation stepStructure={stepObject}>
          <BasketBuyForm />
        </StepInformation>
      );
      break;
    case 4:
      html = (
        <StepInformation stepStructure={stepObject}>
          <DeliveryOrPayment data={stepFour} />
        </StepInformation>
      );
      break;
    case 5:
      html = (
        <StepInformation stepStructure={stepObject}>
          <DeliveryOrPayment data={stepFive} />
        </StepInformation>
      );
      break;
    default:
      html = null;
      break;
  }
  return html;
};

const mapStateToProps = ({
  basket: { items, stepState, stepsContentData, basketSteps },
  general: { isMobile },
}) => ({
  isMobile,
  basketSteps,
  stepState,
  stepsContentData,
  basketItems: items,
});

export default connect(mapStateToProps)(BasketStepsCases);
