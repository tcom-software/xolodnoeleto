import Catalogue from "./Catalogue";
import { connect } from "react-redux";

const mapStateToProps = ({ catalogue: { products } }) => ({
  products,
});

export default connect(mapStateToProps)(Catalogue);
