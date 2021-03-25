import { connect } from "react-redux";
import Between from "./Between";

import { actionManipulationBetween } from "redux/actions/catalogActions";

const mapStateToProps = ({
  general: { isMobile },
  catalog: { selectedData, secondLevelFiltersArray },
}) => ({ isMobile, selectedData, secondLevelFiltersArray });

const mapDispatchToProps = (dispatch) => ({
  actionManipulationBetween: (data) =>
    dispatch(actionManipulationBetween(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Between);
