import { connect } from "react-redux";
import ButtonLayout from "./ButtonLayout";
import {
  clearFiltersSelectedData,
  filtersToggle,
} from "redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { filters, isOpenFilters },
  general: { isMobile },
}) => ({
  filters,
  isMobile,
  isOpenFilters,
});

const mapDispatchToProps = (dispatch) => ({
  filtersToggle: () => dispatch(filtersToggle()),
  clearFiltersSelectedData: () => dispatch(clearFiltersSelectedData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLayout);
