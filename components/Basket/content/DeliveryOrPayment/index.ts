import DeliveryOrPayment from "./DeliveryOrPayment";
import { connect } from "react-redux";
import { changeOrderStep } from "../../../../redux/actions/basketActions";

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOrPayment);
