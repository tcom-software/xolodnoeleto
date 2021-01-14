import DeliveryOrPayment from "./DeliveryOrPayment";
import { connect } from "react-redux";
import {
  changeOrderStep,
  updateStepsResult,
  manipulationSelectedData,
} from "redux/actions/basketActions";

const mapStateToProps = ({ basket: { stepState, loading } }) => ({
  loading,
  stepState,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (data) => dispatch(updateStepsResult(data)),
  manipulationSelectedData: (data) => dispatch(manipulationSelectedData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOrPayment);
