import * as types from "../actions/catalogueActions";

const initialState = {
  productsLoading: true,
  filters: {
    цена: [
      {
        id: 1,
        type: "",
        name: "between",
        name_ru: "Цена (Руб.)",
        title: "Цена",
        values: {
          from: 0,
          to: 0,
        },
      },
    ],
    /*sortBy: {
      id: 59,
      type: "simpleCases",
      ruTitle: "Сортировать",
      enTitle: "sortBy",
      values: [
        { id: 60, name: "по популярности" },
        { id: 61, name: "Цена: низкая-высокая" },
        { id: 62, name: "Цена: высокая-низкая" },
      ],
    },
    ,
    */
  },
  total: 0,
  products: [],
  catalogMenu: [],
  isOpenFilters: false,
  firstLevelFiltersArray: [],
  secondLevelFiltersArray: [],
};

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CATALOG_LIST:
      return {
        ...state,
        catalogMenu: action.payload,
      };
    case types.GET_CATALOGUE_PRODUCTS:
      const {
        products,
        products_info: { total },
      } = action.payload;

      return {
        ...state,
        products,
        total,
        productsLoading: false,
      };
    case types.GET_CATALOGUE_FILTERS:
      console.log(action.payload);

      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case types.CATALOGUE_LOADING_TRIGGER:
      return {
        ...state,
        productsLoading: action.payload,
      };
    case types.OPEN_FILTERS_TOGGLE:
      return {
        ...state,
        isOpenFilters: !state.isOpenFilters,
      };
    case types.FIRST_FILTERS_LEVEL_ARRAY:
      const arrayTrigger = state.firstLevelFiltersArray;

      const indexTrigger = arrayTrigger.indexOf(action.payload);
      if (indexTrigger === -1) {
        arrayTrigger.push(action.payload);
      } else {
        arrayTrigger.splice(indexTrigger, 1);
      }
      return {
        ...state,
        firstLevelFiltersArray: [...arrayTrigger],
      };
    case types.FIRST_SECOND_LEVEL_ARRAY:
      const array = state.secondLevelFiltersArray;

      const index = array.indexOf(action.payload);
      if (index === -1) {
        array.push(action.payload);
      } else {
        array.splice(index, 1);
      }
      return {
        ...state,
        secondLevelFiltersArray: [...array],
      };
    default:
      return {
        ...state,
      };
  }
};

export default catalogueReducer;
