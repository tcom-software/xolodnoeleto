import OurClients from "./OurClients";
import { connect } from "react-redux";

const mapStateToProps = ({ general: { ourClients } }) => ({
  ourClients,
});

export default connect(mapStateToProps)(OurClients);
