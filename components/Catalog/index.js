import Catalog from "./Catalog";
import { connect } from "react-redux";
import {
  clearFiltersSelectedData,
  getCatalogFilters,
  getCatalogProductLoadingTrigger,
  getCatalogProducts,
  updateSelectedDataFromUrl,
  updateSelectedDataPage,
  clearFilters,
} from "redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { products, products_info, total, selectedData },
  products: { seenProducts },
}) => ({
  selectedData,
  total,
  products,
  products_info,
  seenProducts,
});
const mapDispatchToProps = (dispatch) => ({
  updateSelectedDataPage: (page) => dispatch(updateSelectedDataPage(page)),
  getCatalogProducts: (catalogId, object) =>
    dispatch(getCatalogProducts(catalogId, object)),
  getCatalogProductLoadingTrigger: (boolean) =>
    dispatch(getCatalogProductLoadingTrigger(boolean)),
  updateSelectedDataFromUrl: (data) =>
    dispatch(updateSelectedDataFromUrl(data)),
  getCatalogFilters: (catalogId, selectedData) =>
    dispatch(getCatalogFilters(catalogId, selectedData)),
  clearFiltersSelectedData: () => dispatch(clearFiltersSelectedData()),
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
