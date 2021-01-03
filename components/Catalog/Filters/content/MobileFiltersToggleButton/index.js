import React from "react";
import { connect } from "react-redux";
import MobileCloseFilters from "./MobileFiltersToggleButton";
import { changeMobileFiltersStatus } from "redux/actions/catalogActions";

const mapStateToProps = ({
  general: { isMobile },
  catalog: { mobileFiltersStatus },
}) => ({
  isMobile,
  mobileFiltersStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeMobileFiltersStatus: () => dispatch(changeMobileFiltersStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileCloseFilters);
