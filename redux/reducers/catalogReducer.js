import * as types from "../actions/catalogActions";

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
  mobileFiltersStatus: false,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CATALOG_LIST:
      return {
        ...state,
        catalogMenu: action.payload,
      };
    case types.GET_CATALOG_PRODUCTS:
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
    case types.GET_CATALOG_FILTERS:
      const filters = {
        ...state.filters,
        ...action.payload,
      };

      const sortedItems = {};

      const pattern = [
        "Цена",
        "Количество подключаемых блоков",
        "Бренды",
        "Обслуживаемая площадь",
        "Инверторный",
        "Охлаждение / обогрев",
        "Режим приточной вентиляции",
        "Класс энергопотребления",
        "Габариты",
      ];

      for (let i = 0; i < pattern.length; i++) {
        if (filters[pattern[i]] === undefined) {
          /** Filters don't match pattern */
          continue;
        }
        sortedItems[pattern[i]] = [...filters[pattern[i]]];
        delete filters[pattern[i]];
      }

      const newFilters = {
        ...sortedItems,
        ...filters,
      };

      return {
        ...state,
        filters: newFilters,
      };
    case types.CATALOG_LOADING_TRIGGER:
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
      const { checkboxes, manufacturerCountries } = state.selectedData;

      if (parent_id === "manufacturerCountries") {
        /** Exception for checkbox type*/
        if (!manufacturerCountries) {
          return {
            ...state,
            selectedData: {
              ...state.selectedData,
              manufacturerCountries: [id],
            },
          };
        } else {
          const included = manufacturerCountries.includes(id);
          if (included) {
            const index = manufacturerCountries.indexOf(id);
            manufacturerCountries.splice(index, 1);
            if (manufacturerCountries.length === 0) {
              const newCollection = state.selectedData;
              delete newCollection["manufacturerCountries"];

              return {
                ...state,
                selectedData: {
                  ...newCollection,
                  page: 1,
                },
              };
            } else {
              return {
                ...state,
                selectedData: {
                  ...state.selectedData,
                  manufacturerCountries: [...manufacturerCountries],

                  page: 1,
                },
              };
            }
          } else {
            return {
              ...state,
              selectedData: {
                ...state.selectedData,
                manufacturerCountries: [...manufacturerCountries, id],
                page: 1,
              },
            };
          }
        }
      } else if (!checkboxes) {
        /** there isn't checkboxes key in object*/
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
        /** there is checkboxes key in object*/
        if (checkboxes[parent_id]) {
          /** there is parent id of selected value*/
          if (checkboxes[parent_id].includes(id)) {
            /** there is id of selected value*/
            const object = {
              ...checkboxes,
              [parent_id]: [...checkboxes[parent_id].filter((e) => e != id)],
            };

            for (let key in object) {
              if (object[key].length === 0) {
                delete object[key];
              }
            }

            if(Object.keys(object).length === 0) {
              console.log(111111)
              const newObj = JSON.parse(JSON.stringify(state.selectedData))
              delete newObj["checkboxes"]

              return {
                ...state,
                selectedData: {...newObj}
              };
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
            /** there isn't id of selected value*/
            return {
              ...state,
              selectedData: {
                ...state.selectedData,
                checkboxes: {
                  ...state.selectedData.checkboxes,
                  [parent_id]: [
                    ...state.selectedData.checkboxes[parent_id],
                    id,
                  ],
                },
                page: 1,
              },
            };
          }
        } else {
          /** there isn't parent id of selected value*/
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
    case types.CHANGE_MOBILE_FILTERS_STATUS:
      return {
        ...state,
        mobileFiltersStatus: !state.mobileFiltersStatus,
      };
    case types.CLEAR_FILTERS:
      const clearedFilters = {
        Сортировка: state.filters["Сортировка"],
        Цена: state.filters["Цена"],
      };
      return {
        ...state,
        filters: { ...clearedFilters },
      };
    default:
      return {
        ...state,
      };
  }
};

export default catalogReducer;
