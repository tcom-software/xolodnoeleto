import Catalog from "./Catalog";
import { connect } from "react-redux";
import {
  clearFiltersSelectedData,
  getCatalogProductLoadingTrigger,
  getCatalogProducts,
  updateSelectedDataFromUrl,
  updateSelectedDataPage,
  clearFilters,
} from "redux/actions/catalogActions";
import { getBrandProducts } from "../../redux/actions/brandsActions";

const mapStateToProps = ({
  catalog: { products, products_info, total, selectedData },
}) => ({
  selectedData,
  total,
  products,
  products_info,
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
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
