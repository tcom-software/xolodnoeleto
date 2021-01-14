import Catalog from "./Catalog";
import { connect } from "react-redux";
import {
  getCatalogProductLoadingTrigger,
  getCatalogProducts,
  updateSelectedDataFromUrl,
  updateSelectedDataPage,
} from "redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { products, total, selectedData },
  products: { seenProducts },
}) => ({
  selectedData,
  total,
  products,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
