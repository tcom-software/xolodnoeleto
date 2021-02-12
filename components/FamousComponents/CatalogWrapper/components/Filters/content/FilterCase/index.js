import FilterCase from "./FilterCase";
import { connect } from "react-redux";
import {
  actionFirstFiltersLevelArray,
  changeMobileFiltersStatus,
} from "redux/actions/catalogActions";

const mapStateToProps = ({
  general: { isMobile },
  catalog: { isOpenFilters, firstLevelFiltersArray, mobileFiltersStatus },
}) => ({
  isMobile,
  isOpenFilters,
  firstLevelFiltersArray,
  mobileFiltersStatus,
});

const mapDispatchToProps = (dispatch) => ({
  actionFirstFiltersLevelArray: (filter) =>
    dispatch(actionFirstFiltersLevelArray(filter)),
  changeMobileFiltersStatus: () => dispatch(changeMobileFiltersStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCase);
