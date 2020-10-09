import StepInformation from "./StepInformation";
import { connect } from "react-redux";
import { changeOrderStep } from "../../../../redux/actions/basketActions";

const mapStateToProps = ({ basket: { items, total_amount, stepState } }) => ({
  stepState,
  total_amount,
  itemsCount: Object.keys(items).length,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
});
export default connect(mapStateToProps, mapDispatchToProps)(StepInformation);
