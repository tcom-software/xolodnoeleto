import Brands from "./Brands";
import { connect } from "react-redux";

const mapStateToProps = ({
  products: { seenProducts },
  brands: { items: brandItems },
}) => ({
  brandItems,
  seenProducts,
});

export default connect(mapStateToProps)(Brands);
