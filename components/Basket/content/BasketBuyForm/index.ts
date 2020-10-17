import BasketBuyForm from "./BasketBuyForm";
import { connect } from "react-redux";
import {
  changeOrderStep,
  updateStepsResult,
} from "redux/actions/basketActions";

const mapStateToProps = ({
  basket: { stepState, basketBuyInputs },
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
  basketBuyInputs,
  BuyFormInputs: [fullName, email, phone, addressDelivery, commentByOrder],
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (data) => dispatch(updateStepsResult(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketBuyForm);
