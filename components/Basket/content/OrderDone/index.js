import OrderDone from "./OrderDone";
import { connect } from "react-redux";
import { makeInitialStepsResult } from "redux/actions/basketActions";

const mapStateToProps = ({
  basket: {
    basketSteps: {
      stepSix: { first, second },
    },
  },
}) => ({
  first,
  second,
});

const mapDispatchToProps = (dispatch) => ({
  makeInitialStepsResult: (page) => dispatch(makeInitialStepsResult(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDone);
