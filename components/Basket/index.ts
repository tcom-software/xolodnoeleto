import Basket from "./Basket";
import { connect } from "react-redux";

const mapStateToProps = ({
  basket: {
    items,
    stepState,
    basketSteps,
    basketBuyInputs,
    stepsContentData,
    stepsResult,
  },
  general: {
    isMobile,
    inputsValidationData: {
      phone,
      email,
      fullName,
      addressDelivery,
      commentByOrder,
    },
  },
}) => ({
  isMobile,
  stepState,
  basketSteps,
  stepsResult,
  basketBuyInputs,
  stepsContentData,
  basketItems: items,
  BuyFormInputs: [fullName, email, phone, addressDelivery, commentByOrder],
});

export default connect(mapStateToProps)(Basket);
