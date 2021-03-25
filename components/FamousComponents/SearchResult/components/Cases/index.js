import Cases from "./Cases";
import { connect } from "react-redux";
import { addCompareProduct } from "redux/actions/compareActions";

const mapDispatchToProps = (dispatch) => ({
  addCompareProduct: (id) => dispatch(addCompareProduct(id)),
});
export default connect(null, mapDispatchToProps)(Cases);
