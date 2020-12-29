import Catalog from "./Catalog";
import { connect } from "react-redux";
import { updateSelectedDataPage } from "redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { products, total },
  products: { seenProducts },
}) => ({
  total,
  products,
  seenProducts,
});
const mapDispatchToProps = (dispatch) => ({
  updateSelectedDataPage: (page) => dispatch(updateSelectedDataPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
