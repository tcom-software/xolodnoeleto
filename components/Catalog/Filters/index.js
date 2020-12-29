import Filters from "./Filters";
import { connect } from "react-redux";
import { getCatalogFilters } from "redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { filters, selectedData },
  general: { isMobile },
}) => ({ filters, isMobile, selectedData });

const mapDispatchToProps = (dispatch) => ({
  getCatalogFilters: (catalogId) => dispatch(getCatalogFilters(catalogId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
