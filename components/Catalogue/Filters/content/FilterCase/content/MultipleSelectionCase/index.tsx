import { connect } from "react-redux";
import MultipleSelectionCase from "./MultipleSelectionCase";
import { actionSecondFiltersLevelArray } from "redux/actions/catalogueActions";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { secondLevelFiltersArray },
}) => ({ isMobile, secondLevelFiltersArray });

const mapDispatchToProps = (dispatch) => ({
  actionSecondFiltersLevelArray: (filter) =>
    dispatch(actionSecondFiltersLevelArray(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleSelectionCase);
