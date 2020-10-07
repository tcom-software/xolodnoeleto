import AboutOrder from "./AboutOrder";
import { connect } from "react-redux";

const mapStateToProps = ({ basket: { items, total_amount } }) => ({
  total_amount,
  itemsCount: Object.keys(items).length,
});

export default connect(mapStateToProps)(AboutOrder);
