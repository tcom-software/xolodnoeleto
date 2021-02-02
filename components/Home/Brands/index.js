import Brands from "./Brands";
import { connect } from "react-redux";

const mapStateToProps = ({ brands: { items } }) => {
  return {
    brands: items,
  };
};

export default connect(mapStateToProps)(Brands);
