import { INITIAL_STATE } from "../actions/brandsActions";

const initialState = {
  items: [
    {
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      price: 22240,
      selectedStarsCount: 4,
    },
    {
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 3,
    },
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
