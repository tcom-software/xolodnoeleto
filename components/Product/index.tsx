import Product from "./Product";
import { connect } from "react-redux";
import { getProductInfo } from "redux/actions/productActions";

const mapStateToProps = ({
  product: { productInfo },
  products: { seenProducts },
}) => ({
  productInfo,
  seenProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getProductInfo: (id) => dispatch(getProductInfo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
