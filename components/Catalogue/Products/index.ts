import Products from "./Products";
import { connect } from "react-redux";
import {
  getCatalogueProducts,
  updateSelectedDataFromUrl,
  getCatalogueProductLoadingTrigger,
  updateSelectedOrderBy,
} from "redux/actions/catalogueActions";

const mapStateToProps = ({
  catalogue: { total, products, productsLoading, selectedData },
  general: { isMobile },
}) => ({
  total,
  products,
  isMobile,
  productsLoading,
  selectedData,
});

const mapDispatchToProps = (dispatch) => ({
  getCatalogueProducts: (catalogueId, object) =>
    dispatch(getCatalogueProducts(catalogueId, object)),
  getCatalogueProductLoadingTrigger: (boolean) =>
    dispatch(getCatalogueProductLoadingTrigger(boolean)),
  updateSelectedDataFromUrl: (data) =>
    dispatch(updateSelectedDataFromUrl(data)),
  updateSelectedOrderBy: (type) => dispatch(updateSelectedOrderBy(type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);
