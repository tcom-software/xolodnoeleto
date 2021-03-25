import * as types from "../actions/reviewActions";

const initialState = {
  initialReviews: [],
  total: 1,
  reviews: [],
  reviewImages: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INITIAL_REVIEWS:
      return {
        ...state,
        initialReviews: action.payload.reviews,
      };
    case types.GET_REVIEWS_BY_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export default reviewReducer;
