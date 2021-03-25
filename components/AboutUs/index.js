import AboutUs from "./AboutUs";
import { connect } from "react-redux";

const mapStateToProps = ({ products: { seenProducts } }) => ({
  seenProducts,
});

export default connect(mapStateToProps)(AboutUs);
