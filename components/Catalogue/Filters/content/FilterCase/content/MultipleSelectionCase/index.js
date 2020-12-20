import { connect } from "react-redux";
import MultipleSelectionCase from "./MultipleSelectionCase";

import {
  actionManipulationMultiple,
  actionSecondFiltersLevelArray,
} from "redux/actions/catalogueActions";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { secondLevelFiltersArray, selectedData },
}) => ({ isMobile, selectedData, secondLevelFiltersArray });

const mapDispatchToProps = (dispatch) => ({
  actionSecondFiltersLevelArray: (filter) =>
    dispatch(actionSecondFiltersLevelArray(filter)),
  actionManipulationMultiple: (data) =>
    dispatch(actionManipulationMultiple(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleSelectionCase);
