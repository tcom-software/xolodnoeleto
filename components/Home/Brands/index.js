import Brands from "./Brands";
import { connect } from "react-redux";

const mapStateToProps = ({ brands: { brandsLandingPage } }) => ({
  brandsLandingPage,
});

export default connect(mapStateToProps)(Brands);
