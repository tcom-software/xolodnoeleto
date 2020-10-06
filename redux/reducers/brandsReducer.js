import { INITIAL_STATE } from "../actions/brandsActions";

const initialState = {
  items: [
    { src: "/images/brands/1.png" },
    { src: "/images/brands/2.png" },
    { src: "/images/brands/3.png" },
    { src: "/images/brands/4.png" },
    { src: "/images/brands/5.png" },
    { src: "/images/brands/6.png" },
    { src: "/images/brands/7.png" },
    { src: "/images/brands/8.png" },
    { src: "/images/brands/9.png" },
    { src: "/images/brands/10.png" },
    { src: "/images/brands/1.png" },
    { src: "/images/brands/2.png" },
    { src: "/images/brands/3.png" },
    { src: "/images/brands/4.png" },
    { src: "/images/brands/5.png" },
  ],
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default brandsReducer;
