import Filters from "./Filters";
import { connect } from "react-redux";
import { getCatalogueFilters } from "redux/actions/catalogueActions";

const mapStateToProps = ({
  catalogue: { filters },
  general: { isMobile },
}) => ({ filters, isMobile });

const mapDispatchToProps = (dispatch) => ({
  getCatalogueFilters: (catalogueId) =>
    dispatch(getCatalogueFilters(catalogueId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
