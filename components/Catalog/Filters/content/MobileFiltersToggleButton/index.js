import React from "react";
import { connect } from "react-redux";
import MobileCloseFilters from "./MobileFiltersToggleButton";
import {
  changeMobileFiltersStatus,
  clearFiltersSelectedData,
  filtersToggle,
} from "redux/actions/catalogActions";

const mapStateToProps = ({
  general: { isMobile },
  catalog: { isOpenFilters, mobileFiltersStatus },
}) => ({
  isMobile,
  mobileFiltersStatus,
  isOpenFilters,
});

const mapDispatchToProps = (dispatch) => ({
  changeMobileFiltersStatus: () => dispatch(changeMobileFiltersStatus()),
  filtersToggle: () => dispatch(filtersToggle()),
  clearFiltersSelectedData: () => dispatch(clearFiltersSelectedData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileCloseFilters);
