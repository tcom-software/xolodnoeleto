import DeliveryOrPayment from "./DeliveryOrPayment";
import { connect } from "react-redux";
import {
  changeOrderStep,
  makeInitialStepsResult,
  updateStepsResult,
} from "redux/actions/basketActions";

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (data) => dispatch(updateStepsResult(data)),
  makeInitialStepsResult: () => dispatch(makeInitialStepsResult()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOrPayment);
