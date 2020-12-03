import Catalogue from "./Catalogue";
import { connect } from "react-redux";
import {
  getCatalogueProducts,
  getCatalogueProductLoadingTrigger,
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
  getCatalogueProducts: (type, page) =>
    dispatch(getCatalogueProducts(type, page)),
  getCatalogueProductLoadingTrigger: (boolean) =>
    dispatch(getCatalogueProductLoadingTrigger(boolean)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
