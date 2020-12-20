import AboutOrder from "./AboutOrder";
import { connect } from "react-redux";
import {
  changeOrderStep,
  updateStepsResult,
} from "redux/actions/basketActions";

const mapStateToProps = ({ basket: { items, total_amount, stepState } }) => ({
  stepState,
  total_amount,
  itemsCount: Object.keys(items).length,
});
const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (data) => dispatch(updateStepsResult(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AboutOrder);
