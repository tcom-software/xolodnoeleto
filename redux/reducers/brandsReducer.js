import * as types from "../actions/brandsActions";

const initialState = {
  items: [
    {
      src: "/images/brands/1.png",
      name: "LG",
      url: "",
    },
    {
      src: "/images/brands/2.png",
      name: "Fujitsu",
      url: "",
    },
    {
      src: "/images/brands/3.png",
      name: "Panasonic",
      url: "",
    },
    {
      src: "/images/brands/4.png",
      name: "Samsung",
      url: "",
    },
    {
      src: "/images/brands/5.png",
      name: "Sony",
      url: "",
    },
    {
      src: "/images/brands/6.png",
      name: "Toshiba",
      url: "",
    },
    {
      src: "/images/brands/7.png",
      name: "Sharp",
      url: "",
    },
    {
      src: "/images/brands/8.png",
      name: "Zanussi",
      url: "",
    },
  ],
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIAL_STATE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default brandsReducer;
