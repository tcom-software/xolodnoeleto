import { INITIAL_STATE } from "../actions/productListAction";

const ProductsInitialState = {
  newProducts: [
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      price: 22240,
      selectedStarsCount: 4,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 3,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 5,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7450",
      price: 22240,
      selectedStarsCount: 4,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 2,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7680",
      price: 22240,
      selectedStarsCount: 4,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7486",
      price: 22240,
      selectedStarsCount: 4,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 22240,
      selectedStarsCount: 3,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7880",
      price: 22240,
      selectedStarsCount: 4,
    },
    {
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 2380",
      price: 22240,
      selectedStarsCount: 4,
    },
  ],
};

const ProductListReducer = (state = ProductsInitialState, action) => {
  switch (action.type) {
    case INITIAL_STATE:
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
