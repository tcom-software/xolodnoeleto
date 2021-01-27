import * as types from "../actions/brandsActions";

const initialState = {
  items: [],
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIAL_STATE:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return { ...state };
  }
};

export default brandsReducer;
