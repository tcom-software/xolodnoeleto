import Reviews from "./Reviews";
import { connect } from "react-redux";
import { getReviewByPage } from "redux/actions/reviewActions";
import { changeBigImage } from "redux/actions/generalActions";

const mapStateToProps = ({ review: { total, reviews, reviewImages } }) => ({
  total,
  reviews,
  reviewImages,
});

const mapDispatchToProps = (dispatch) => ({
  getReviewByPage: (page) => dispatch(getReviewByPage(page)),
  changeBigImage: (image) => dispatch(changeBigImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
