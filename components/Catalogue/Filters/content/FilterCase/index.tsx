import FilterCase from "./FilterCase";
import { connect } from "react-redux";
import { actionFirstFiltersLevelArray } from "redux/actions/catalogueActions";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { isOpenFilters, firstLevelFiltersArray },
}) => ({ isMobile, isOpenFilters, firstLevelFiltersArray });

const mapDispatchToProps = (dispatch) => ({
  actionFirstFiltersLevelArray: (filter) =>
    dispatch(actionFirstFiltersLevelArray(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCase);
