import Catalogue from "./Catalogue";
import { connect } from "react-redux";
import {
  getCatalogueProducts,
  getCatalogueFilters,
  getCatalogueProductLoadingTrigger,
} from "redux/actions/catalogueActions";

const mapStateToProps = ({
  catalogue: { total, products, productsLoading },
  general: { isMobile },
}) => ({
  total,
  products,
  isMobile,
  productsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCatalogueProducts: (type, page) =>
    dispatch(getCatalogueProducts(type, page)),
  getCatalogueFilters: (catalogueId) =>
    dispatch(getCatalogueFilters(catalogueId)),
  getCatalogueProductLoadingTrigger: (boolean) =>
    dispatch(getCatalogueProductLoadingTrigger(boolean)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
