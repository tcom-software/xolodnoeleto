import * as types from "../actions/catalogueActions";

const initialState = {
  productsLoading: true,
  filters: {
    Сортировка: [
      {
        id: "DEFAULT",
        name: "file.checkbox",
        characteristic_id: "sortBy",
        name_ru: "по популярности",
        title: "Сортировка",
      },
      {
        id: "ASC",
        name: "file.checkbox",
        characteristic_id: "sortBy",
        name_ru: "Цена: низкая-высокая",
        title: "Сортировка",
      },
      {
        id: "DESC",
        name: "file.checkbox",
        characteristic_id: "sortBy",
        name_ru: "Цена: высокая-низкая",
        title: "Сортировка",
      },
    ],
    Цена: [
      {
        id: "price",
        name: "file.fromTo",
        name_ru: "Цена (Руб.)",
        title: "Price",
        values: {
          from: 0,
          to: 0,
        },
      },
    ],
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
        products: [...products],
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
            page: 1,
          },
        };
      } else {
        // there is checkboxes key in object
        if (checkboxes[parent_id]) {
          // there is parent id of selected value

          if (checkboxes[parent_id].includes(id)) {
            // there is id of selected value
            const object = {
              ...checkboxes,
              [parent_id]: [...checkboxes[parent_id].filter((e) => e != id)],
            };

            for (let key in object) {
              if (object[key].length === 0) {
                delete object[key];
              }
            }

            return {
              ...state,
              selectedData: {
                ...state.selectedData,
                checkboxes: { ...object },
                page: 1,
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
                page: 1,
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
              page: 1,
            },
          };
        }
      }
    case types.MANIPULATION_BETWEEN_DATA:
      const { id: betweenId, from, to } = action.payload;

      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          fromTo: {
            ...state.selectedData.fromTo,
            [betweenId]: [from ? from : null, to ? to : null],
          },
        },
      };
    case types.MANIPULATION_RADIO_DATA:
      const { characteristic_id, id: value } = action.payload;
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          radio: {
            ...state.selectedData.radio,
            [characteristic_id]: [value],
          },
          page: 1,
        },
      };
    case types.UPDATE_SELECTED_DATA_FROM_URL:
      return {
        ...state,
        selectedData: action.payload,
      };
    case types.UPDATE_SELECTED_DATA_PAGE:
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          page: action.payload,
        },
      };
    case types.UPDATE_SELECTED_ORDER_BY:
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          orderBy: action.payload,
          page: state.page ? state.page : 1,
        },
      };
    case types.CLEAR_SELECTED_FILTERS_DATA:
      return {
        ...state,
        selectedData: { page: 1 },
      };
    default:
      return {
        ...state,
      };
  }
};

export default catalogueReducer;
