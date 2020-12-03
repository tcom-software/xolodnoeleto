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
        title: "Price",
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
      const { checkboxes } = state.selectedData;
      if (!checkboxes) {
        // there isn't checkboxes key in object
        return {
          ...state,
          selectedData: {
            ...state.selectedData,
            checkboxes: {
              ...state.selectedData.checkboxes,
              [parent_id]: [id],
            },
          },
        };
      } else {
        // there is checkboxes key in object
        if (checkboxes[parent_id]) {
          // there is parent id of selected value

          if (checkboxes[parent_id].includes(id)) {
            // there is id of selected value

            return {
              ...state,
              selectedData: {
                ...state.selectedData,
                checkboxes: {
                  ...checkboxes,
                  [parent_id]: [
                    ...checkboxes[parent_id].filter((e) => e != id),
                  ],
                },
              },
            };
          } else {
            // there isn't id of selected value

            checkboxes[parent_id].push(id);
            return {
              ...state,
              selectedData: {
                ...state.selectedData,
                checkboxes: {
                  ...checkboxes,
                },
              },
            };
          }
        } else {
          // there isn't parent id of selected value
          return {
            ...state,
            selectedData: {
              ...state.selectedData,
              checkboxes: {
                ...checkboxes,
                [parent_id]: [id],
              },
            },
          };
        }
      }
    case types.MANIPULATION_BETWEEN_DATA:
      const { title, from, to } = action.payload;

      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          fromTo: {
            ...state.selectedData.fromTo,
            [title]: {
              from,
              to,
            },
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
