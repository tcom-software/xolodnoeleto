import Product from "./Product";
import { connect } from "react-redux";

const mapStateToProps = ({ product: { product } }) => ({
  product,
});
export default connect(mapStateToProps)(Product);
