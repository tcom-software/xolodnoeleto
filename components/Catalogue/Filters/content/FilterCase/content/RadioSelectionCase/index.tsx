import { connect } from "react-redux";
import RadioSelectionCase from "./RadioSelectionCase";
import { actionManipulationRadio } from "redux/actions/catalogueActions";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { secondLevelFiltersArray, selectedData },
}) => ({ isMobile, selectedData, secondLevelFiltersArray });

const mapDispatchToProps = (dispatch) => ({
  actionManipulationRadio: (data) => dispatch(actionManipulationRadio(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioSelectionCase);
