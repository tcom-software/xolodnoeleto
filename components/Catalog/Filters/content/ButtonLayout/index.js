import { connect } from "react-redux";
import ButtonLayout from "./ButtonLayout";
import {
  clearFiltersSelectedData,
  filtersToggle,
} from "redux/actions/catalogActions";

const mapStateToProps = ({ catalog: { filters }, general: { isMobile } }) => ({
  filters,
  isMobile,
});

const mapDispatchToProps = (dispatch) => ({
  filtersToggle: () => dispatch(filtersToggle()),
  clearFiltersSelectedData: () => dispatch(clearFiltersSelectedData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLayout);
