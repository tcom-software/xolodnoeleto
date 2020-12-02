import { connect } from "react-redux";
import Between from "./Between";

import { actionManipulationBetween } from "redux/actions/catalogueActions";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { selectedData, secondLevelFiltersArray },
}) => ({ isMobile, selectedData, secondLevelFiltersArray });

const mapDispatchToProps = (dispatch) => ({
  actionManipulationBetween: (data) =>
    dispatch(actionManipulationBetween(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Between);
