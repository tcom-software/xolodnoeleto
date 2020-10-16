import StepInformation from "./StepInformation";
import { connect } from "react-redux";

const mapStateToProps = ({ basket: { items, total_amount, stepState } }) => ({
  stepState,
  total_amount,
  itemsCount: Object.keys(items).length,
});

export default connect(mapStateToProps)(StepInformation);
