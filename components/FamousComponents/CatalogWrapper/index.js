import CatalogWrapper from "./CatalogWrapper";
import { connect } from "react-redux";

// import {
//   clearFilters,
//   clearFiltersSelectedData,
//   getCatalogFilters,
//   getCatalogProductLoadingTrigger,
//   getCatalogProducts,
//   updateSelectedDataFromUrl,
//   updateSelectedDataPage,
// } from "../../../redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { products, productsLoading, selectedData },
  products: { seenProducts },
}) => ({
  products,
  seenProducts,
  productsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  // updateSelectedDataPage: (page) => dispatch(updateSelectedDataPage(page)),
  // getCatalogProducts: (catalogId, object) =>
  //   dispatch(getCatalogProducts(catalogId, object)),
  // getCatalogProductLoadingTrigger: (boolean) =>
  //   dispatch(getCatalogProductLoadingTrigger(boolean)),
  // updateSelectedDataFromUrl: (data) =>
  //   dispatch(updateSelectedDataFromUrl(data)),
  // getCatalogFilters: (catalogId, selectedData) =>
  //   dispatch(getCatalogFilters(catalogId, selectedData)),
  // clearFiltersSelectedData: () => dispatch(clearFiltersSelectedData()),
  // clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogWrapper);
