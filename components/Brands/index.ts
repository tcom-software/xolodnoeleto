import Brands from "./Brands";
import { connect } from "react-redux";
import { changeBigImage } from "redux/actions/generalActions";

const mapStateToProps = ({
  products: { seenProducts },
  brands: { items: brandItems },
}) => ({
  brandItems,
  seenProducts,
});

export default connect(mapStateToProps)(Brands);
