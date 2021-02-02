import Brands from "./Brands";
import { connect } from "react-redux";
import { getBrandsWithPage } from "../../redux/actions/brandsActions";

const mapStateToProps = ({
  products: { seenProducts },
  brands: { brandsBrandPage },
}) => ({
  brandsBrandPage,
  seenProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getBrandsWithPage: (page) => dispatch(getBrandsWithPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
