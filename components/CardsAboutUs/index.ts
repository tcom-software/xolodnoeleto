import CardsAboutUs from "./CardsAboutUs";
import { connect } from "react-redux";

const mapStateToProps = ({ general: { aboutUsCards } }) => ({
  aboutUsCards,
});

export default connect(mapStateToProps)(CardsAboutUs);
