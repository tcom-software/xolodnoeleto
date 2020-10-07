import Products from "./Products";
import { connect } from "react-redux";

const mapStateToProps = ({ basket: { items } }) => ({
  items,
});

export default connect(mapStateToProps)(Products);
