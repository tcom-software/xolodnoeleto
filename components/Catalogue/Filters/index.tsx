import Filters from "./Filters";
import { connect } from "react-redux";
import { getCatalogueFilters } from "redux/actions/catalogueActions";

const mapStateToProps = ({
  catalogue: { filters, selectedData },
  general: { isMobile },
}) => ({ filters, isMobile, selectedData });

const mapDispatchToProps = (dispatch) => ({
  getCatalogueFilters: (catalogueId) =>
    dispatch(getCatalogueFilters(catalogueId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
