import Catalog from "./Catalog";
import { connect } from "react-redux";
import {
  clearFiltersSelectedData,
  getCatalogProductLoadingTrigger,
  getCatalogProducts,
  updateSelectedDataFromUrl,
  updateSelectedDataPage,
  clearFilters,
  getCatalogProductsWithoutAxios,
} from "redux/actions/catalogActions";
import { getBrandProducts } from "../../redux/actions/brandsActions";
import {
  actionSearch,
  makeEmptySearch,
  setSelectedSearchCatalog,
} from "../../redux/actions/searchActions";

const mapStateToProps = ({
  catalog: { products, products_info, total, selectedData },
  search: {
    searchInputValue,
    lastSearchedWord,
    products: searchProducts,
    products_info: searchProductsInfo,
    selectedSearchCatalog,
  },
}) => ({
  selectedData,
  total,
  products,
  products_info,
  searchProducts,
  searchInputValue,
  lastSearchedWord,
  searchProductsInfo,
  selectedSearchCatalog,
});
const mapDispatchToProps = (dispatch) => ({
  getBrandProducts: (page, brandId, object) =>
    dispatch(getBrandProducts(page, brandId, object)),
  updateSelectedDataPage: (page) => dispatch(updateSelectedDataPage(page)),
  getCatalogProducts: (catalogId, object) =>
    dispatch(getCatalogProducts(catalogId, object)),
  getCatalogProductLoadingTrigger: (boolean) =>
    dispatch(getCatalogProductLoadingTrigger(boolean)),
  updateSelectedDataFromUrl: (data) =>
    dispatch(updateSelectedDataFromUrl(data)),
  clearFiltersSelectedData: () => dispatch(clearFiltersSelectedData()),
  getCatalogProductsWithoutAxios: (data) =>
    dispatch(getCatalogProductsWithoutAxios(data)),
  actionSearch: (object) => dispatch(actionSearch(object)),
  setSelectedSearchCatalog: (catalogId) =>
    dispatch(setSelectedSearchCatalog(catalogId)),
  makeEmptySearch: () => dispatch(makeEmptySearch()),
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
