import DeliveryOrPayment from "./DeliveryOrPayment";
import { connect } from "react-redux";
import {
  changeOrderStep,
  makeInitialStepsResult,
  manipulationSelectedData,
  updateStepsResult,
} from "redux/actions/basketActions";

const mapStateToProps = ({ basket: { stepState, loading } }) => ({
  loading,
  stepState,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (data) => dispatch(updateStepsResult(data)),
  makeInitialStepsResult: (step) => dispatch(makeInitialStepsResult(step)),
  manipulationSelectedData: (data) => dispatch(manipulationSelectedData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOrPayment);
