import BrandProducts from "./BrandProducts";
import { connect } from "react-redux";
import { getBrandProducts } from "../../redux/actions/brandsActions";

const mapStateToProps = ({ brands: { brandProducts } }) => ({
  brandProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getBrandProducts: (page, brandId) =>
    dispatch(getBrandProducts(page, brandId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandProducts);
