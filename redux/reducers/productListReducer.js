import * as types from "../actions/modalActions";

const ProductsInitialState = {
  newProducts: {
    1: {
      id: 1,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      price: 22240,
      selectedStarsCount: 4,
    },
    2: {
      id: 2,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 3,
    },
    3: {
      id: 3,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 5,
    },
    4: {
      id: 4,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7450",
      price: 22240,
      selectedStarsCount: 4,
    },
    5: {
      id: 5,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 2,
    },
    6: {
      id: 6,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7680",
      price: 22240,
      selectedStarsCount: 4,
    },
    7: {
      id: 7,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7486",
      price: 22240,
      selectedStarsCount: 4,
    },
    8: {
      id: 8,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 3,
    },
    9: {
      id: 9,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7880",
      price: 22240,
      selectedStarsCount: 4,
    },
    10: {
      id: 10,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 2380",
      price: 22240,
      selectedStarsCount: 4,
    },
  },
  seenProducts: {
    1: {
      id: 1,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      price: 22240,
      selectedStarsCount: 4,
    },
    2: {
      id: 2,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 3,
    },
    3: {
      id: 3,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 5,
    },
    4: {
      id: 4,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7450",
      price: 22240,
      selectedStarsCount: 4,
    },
    5: {
      id: 5,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 2,
    },
  },
};

const ProductListReducer = (state = ProductsInitialState, action) => {
  switch (action.type) {
    case types.INITIAL_STATE:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProductListReducer;
