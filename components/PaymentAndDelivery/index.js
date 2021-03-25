import PaymentAndDelivery from "./PaymentAndDelivery";
import { connect } from "react-redux";

const mapStateToProps = ({
  products: { seenProducts },
  general: { paymentAndDelivery },
}) => ({
  seenProducts,
  paymentAndDelivery,
});

export default connect(mapStateToProps)(PaymentAndDelivery);
