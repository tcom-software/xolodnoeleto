import Basket from "./Basket";
import { connect } from "react-redux";
import { actionMakeOrder } from "../../redux/actions/basketActions";

const mapStateToProps = ({
  basket: {
    items,
    stepState,
    basketSteps,
    basketBuyInputs,
    stepsContentData,
    stepsResult,
    selectedData,
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
  selectedData,
  basketBuyInputs,
  stepsContentData,
  basketItems: items,
  BuyFormInputs: [fullName, email, phone, addressDelivery, commentByOrder],
});

const mapDispatchToState = (dispatch) => ({
  actionMakeOrder: (data) => dispatch(actionMakeOrder(data)),
});

export default connect(mapStateToProps, mapDispatchToState)(Basket);
