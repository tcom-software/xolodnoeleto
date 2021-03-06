import Filters from "./Filters";
import { connect } from "react-redux";
import { filtersToggle } from "redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { filters, selectedData, isOpenFilters },
  general: { isMobile },
}) => ({ filters, isMobile, selectedData, isOpenFilters });

const mapDispatchToProps = (dispatch) => ({
  filtersToggle: () => dispatch(filtersToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
