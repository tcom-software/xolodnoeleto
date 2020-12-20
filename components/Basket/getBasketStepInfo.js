const getBasketStepInfo = (stepState, basketSteps) => {
  switch (stepState) {
    case 1:
      return basketSteps.stepOne;
      break;
    case 2:
      return basketSteps.stepTwo;
      break;
    case 3:
      return basketSteps.stepThree;
      break;
    case 4:
      return basketSteps.stepFour;
      break;
    case 5:
      return basketSteps.stepFive;
      break;
    case 6:
      return basketSteps.stepSix;
      break;
    default:
      return basketSteps.stepOne;
      break;
  }
};

export default getBasketStepInfo;
