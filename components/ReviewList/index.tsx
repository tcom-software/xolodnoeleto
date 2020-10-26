import ReviewList from "./ReviewList";
import { connect } from "react-redux";

const mapStateToProps = ({
  review: { items: reviewItems },
  general: { isMobile },
}) => ({
  isMobile,
  reviewItems,
});

export default connect(mapStateToProps)(ReviewList);
