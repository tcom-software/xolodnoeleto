import Basket from "./Basket";
import { connect } from "react-redux";

const mapStateToProps = ({
  basket: { items, stepState },
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
  BuyFormInputs: [fullName, email, phone, addressDelivery, commentByOrder],
  basketItems: items,
});

export default connect(mapStateToProps)(Basket);
