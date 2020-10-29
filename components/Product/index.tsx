import Product from "./Product";
import { connect } from "react-redux";

const mapStateToProps = ({
  product: { product },
  products: { seenProducts },
}) => ({
  product,
  seenProducts,
});
export default connect(mapStateToProps)(Product);
