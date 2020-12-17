import { axiosInstance } from "@utils";
export const GET_INITIAL_REVIEWS = "GET_INITIAL_REVIEWS";
export const GET_REVIEWS_BY_PAGE = "GET_REVIEWS_BY_PAGE";

export const getInitialReview = () => {
  return (dispatch) => {
    axiosInstance
      .get(`http://projects-backend.ru/api/getReviews`)
      .then(({ data }) => {
        if (data) {
          dispatch({
            type: GET_INITIAL_REVIEWS,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const getReviewByPage = (page) => {
  return (dispatch) => {
    axiosInstance
      .get(`http://projects-backend.ru/api/getReviews?page=${page}`)
      .then(({ data }) => {
        if (data) {
          dispatch({
            type: GET_REVIEWS_BY_PAGE,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
