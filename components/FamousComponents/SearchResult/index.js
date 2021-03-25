import SearchResult from "./SearchResult";
import { connect } from "react-redux";
import {
  actionSearch,
  setNewRefForSearch,
  whereWasSearchAction,
  searchInputValueAction,
  setSelectedSearchCatalog,
} from "redux/actions/searchActions";
import { openModal } from "../../../redux/actions/modalActions";
import {
  getCatalogProductLoadingTrigger,
  getCatalogProductsWithoutAxios,
} from "../../../redux/actions/catalogActions";

const mapStateToProps = ({
  search: {
    loading,
    products,
    new_loading,
    refForSearch,
    products_info,
    whereWasSearch,
    searchInputValue,
    selectedSearchCatalog,
    selectedSearchCatalogTitle,
  },
}) => {
  return {
    loading,
    products,
    new_loading,
    refForSearch,
    products_info,
    whereWasSearch,
    searchInputValue,
    selectedSearchCatalog,
    selectedSearchCatalogTitle,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actionSearch: (object) => dispatch(actionSearch(object)),
  openModal: (type) => dispatch(openModal(type)),
  whereWasSearchAction: (where) => dispatch(whereWasSearchAction(where)),
  searchInputValueAction: (value) => dispatch(searchInputValueAction(value)),
  setNewRefForSearch: (ref) => dispatch(setNewRefForSearch(ref)),
  setSelectedSearchCatalog: (catalog) =>
    dispatch(setSelectedSearchCatalog(catalog)),
  getCatalogProductLoadingTrigger: (boolean) =>
    dispatch(getCatalogProductLoadingTrigger(boolean)),
  getCatalogProductsWithoutAxios: (object) =>
    dispatch(getCatalogProductsWithoutAxios(object)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
