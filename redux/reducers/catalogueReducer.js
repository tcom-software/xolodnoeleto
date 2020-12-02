import * as types from "../actions/catalogueActions";

const initialState = {
  productsLoading: true,
  filters: {
    Цена: [
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
  selectedData: {},
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
    case types.MANIPULATION_MULTIPLE_DATA:
      const { id, parent_id } = action.payload;
      if (state.selectedData[parent_id]) {
        if (state.selectedData[parent_id].includes(id)) {
          // Delete old item
          const array = [
            ...state.selectedData[parent_id].filter((e) => e != id),
          ];
          if (array.length === 0) {
            delete state.selectedData[parent_id];
          } else {
            state.selectedData[parent_id] = array;
          }

          return {
            ...state,
            selectedData: { ...state.selectedData },
          };
        } else {
          // add item
          state.selectedData[parent_id].push(id);

          return {
            ...state,
            selectedData: {
              ...state.selectedData,
              [parent_id]: [...state.selectedData[parent_id]],
            },
          };
        }
      } else {
        return {
          ...state,
          selectedData: {
            ...state.selectedData,
            [parent_id]: [id],
          },
        };
      }
    case types.MANIPULATION_BETWEEN_DATA:
      const { title, from, to } = action.payload;
      console.log(action.payload, "--=-=-=-=-=-=-=-=-=");
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          [title]: {
            from,
            to,
          },
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default catalogueReducer;
