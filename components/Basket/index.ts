import Basket from "./Basket";
import { connect } from "react-redux";

const mapStateToProps = ({
  basket: { items, stepState, basketSteps, basketBuyInputs },
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
  basketBuyInputs,
  basketItems: items,
  BuyFormInputs: [fullName, email, phone, addressDelivery, commentByOrder],
});

export default connect(mapStateToProps)(Basket);
