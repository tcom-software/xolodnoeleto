import Products from "./Products";
import { connect } from "react-redux";
import {
  updateSelectedOrderBy,
  updateSelectedDataPage,
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
  updateSelectedDataPage: (page) => dispatch(updateSelectedDataPage(page)),
  updateSelectedOrderBy: (type) => dispatch(updateSelectedOrderBy(type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);
