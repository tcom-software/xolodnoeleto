import FilterCase from "./FilterCase";
import { connect } from "react-redux";
import { actionFirstFiltersLevelArray } from "redux/actions/catalogActions";

const mapStateToProps = ({
  general: { isMobile },
  catalog: { isOpenFilters, firstLevelFiltersArray },
}) => ({ isMobile, isOpenFilters, firstLevelFiltersArray });

const mapDispatchToProps = (dispatch) => ({
  actionFirstFiltersLevelArray: (filter) =>
    dispatch(actionFirstFiltersLevelArray(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCase);
