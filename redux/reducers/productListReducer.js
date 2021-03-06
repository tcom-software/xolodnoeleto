import * as types from "../actions/productListAction";

const ProductsInitialState = {
  newProducts: {},
  seenProducts: {},
  superPriceProducts: {
    ...[
      {
        id: 2247,
        model: "RAS-18U2KHS/RAS-18U2AHS-EE",
        brand: "Toshiba",
        brand_logo: "Toshiba.png",
        series_name: "STANDART-ON/OFF",
        series_picture_folder: "product_series0",
        series_picture_file_name: "cb9f5d01788eff1d38967477ec4212e1",
        series_picture_format: "jpg",
        product_picture_folder: "products0",
        product_picture_file_name: "b8189bc5134f6d123b008d6838ad619b",
        product_picture_format: "jpg",
        price: 36900,
        setup_price: 3080,
        characteristic_name_ru: "Обслуживаемая площадь",
        characteristic_attribute_name: "21-25  м²",
      },
      {
        id: 2288,
        model: "ACN-18HE",
        brand: "JAX",
        brand_logo: "jax.png",
        series_name: "TASMANIA-ON/OFF",
        series_picture_folder: "product_series0",
        series_picture_file_name: "bfe2ce148ecc81a48b2300c71e30e224",
        series_picture_format: "jpg",
        product_picture_folder: "products0",
        product_picture_file_name: "b4ba058f9eced31a4762cbbe655ad574",
        product_picture_format: "jpg",
        price: 31900,
        setup_price: 0,
        characteristic_name_ru: "Обслуживаемая площадь",
        characteristic_attribute_name: "21-25  м²",
      },
      {
        id: 2248,
        model: "RAS-24U2KHS/RAS-24U2AHS-EE",
        brand: "Toshiba",
        brand_logo: "Toshiba.png",
        series_name: "STANDART-ON/OFF",
        series_picture_folder: "product_series0",
        series_picture_file_name: "cb9f5d01788eff1d38967477ec4212e1",
        series_picture_format: "jpg",
        product_picture_folder: "products0",
        product_picture_file_name: "d1e916ee69366ebad59e4d7c57bbcc9c",
        product_picture_format: "jpg",
        price: 47000,
        setup_price: 3204,
        characteristic_name_ru: "Обслуживаемая площадь",
        characteristic_attribute_name: "21-25  м²",
      },
      {
        id: 2224,
        model: "RAS-12U2KHS/RAS-12U2AHS-EE",
        brand: "Toshiba",
        brand_logo: "Toshiba.png",
        series_name: "STANDART-ON/OFF",
        series_picture_folder: "product_series0",
        series_picture_file_name: "cb9f5d01788eff1d38967477ec4212e1",
        series_picture_format: "jpg",
        product_picture_folder: "products0",
        product_picture_file_name: "d6140a901ebbb9a5a20dee4cfb510ca0",
        product_picture_format: "jpg",
        price: 0,
        setup_price: 0,
        characteristic_name_ru: "Обслуживаемая площадь",
        characteristic_attribute_name: "21-25  м²",
      },
      {
        id: 2285,
        model: "ACN-14HE",
        brand: "JAX",
        brand_logo: "jax.png",
        series_name: "TASMANIA-ON/OFF",
        series_picture_folder: "product_series0",
        series_picture_file_name: "bfe2ce148ecc81a48b2300c71e30e224",
        series_picture_format: "jpg",
        product_picture_folder: "products0",
        product_picture_file_name: "4f5c42d46951ad76f014d82450c7d354",
        product_picture_format: "jpg",
        price: 20500,
        setup_price: 854,
        characteristic_name_ru: "Обслуживаемая площадь",
        characteristic_attribute_name: "21-25  м²",
      },
      {
        id: 2246,
        model: "RAS-09U2KHS/RAS-09U2AHS-EE",
        brand: "Toshiba",
        brand_logo: "Toshiba.png",
        series_name: "STANDART-ON/OFF",
        series_picture_folder: "product_series0",
        series_picture_file_name: "cb9f5d01788eff1d38967477ec4212e1",
        series_picture_format: "jpg",
        product_picture_folder: "products0",
        product_picture_file_name: "772fff734bc32b9355555429f885d6a9",
        product_picture_format: "jpg",
        price: 0,
        setup_price: 2924,
        characteristic_name_ru: "Обслуживаемая площадь",
        characteristic_attribute_name: "21-25  м²",
      },
    ],
  },
};

const ProductListReducer = (state = ProductsInitialState, action) => {
  switch (action.type) {
    case types.SEEN_PRODUCTS:
      let newObject = {};
      const seenProducts = Object.values(state.seenProducts);
      if (state.seenProducts[action.payload.articule]) {
        newObject = {
          ...seenProducts
            .filter((e, i) => i < 6 && e.articule != action.payload.articule)
            .reduce((acc, next) => {
              return {
                ...acc,
                [next.articule]: next,
              };
            }, {}),
          [action.payload.articule]: action.payload,
        };
      } else if (seenProducts.length >= 6) {
        newObject = {
          ...seenProducts
            .filter((_, i) => i < 6)
            .reduce((acc, next) => {
              return {
                ...acc,
                [next.articule]: next,
              };
            }, {}),
          [action.payload.articule]: action.payload,
        };
      } else {
        newObject = {
          ...state.seenProducts,
          [action.payload.articule]: action.payload,
        };
      }

      return {
        ...state,
        seenProducts: { ...newObject },
      };
    case types.NEW_PRODUCTS:
      return {
        ...state,
        newProducts: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProductListReducer;
