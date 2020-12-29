import Products from "./Products";
import { connect } from "react-redux";
import {
  getCatalogProducts,
  updateSelectedDataFromUrl,
  getCatalogProductLoadingTrigger,
  updateSelectedOrderBy,
} from "redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { total, products, productsLoading, selectedData },
  general: { isMobile },
}) => ({
  total,
  products,
  isMobile,
  productsLoading,
  selectedData,
});

const mapDispatchToProps = (dispatch) => ({
  getCatalogProducts: (catalogId, object) =>
    dispatch(getCatalogProducts(catalogId, object)),
  getCatalogProductLoadingTrigger: (boolean) =>
    dispatch(getCatalogProductLoadingTrigger(boolean)),
  updateSelectedDataFromUrl: (data) =>
    dispatch(updateSelectedDataFromUrl(data)),
  updateSelectedOrderBy: (type) => dispatch(updateSelectedOrderBy(type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);
