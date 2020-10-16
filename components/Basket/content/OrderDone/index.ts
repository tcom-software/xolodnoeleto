import OrderDone from "./OrderDone";
import { connect } from "react-redux";

const mapStateToProps = ({
  basket: {
    basketSteps: {
      stepSix: { text },
    },
  },
}) => ({
  text,
});
export default connect(mapStateToProps)(OrderDone);
