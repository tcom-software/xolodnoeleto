import * as types from "../actions/basketActions";

const initialState = {
  items: {},
  loading: false,
  basketSteps: {
    stepOne: {
      top: [],
      current: [
        { title: "Вернуться к выбору товаров", svgType: "longArrowLeft" },
      ],
      bottom: [],
    },
    stepTwo: {
      top: [],
      current: [{ title: "Товары в заказе" }],
      bottom: [
        { title: "Покупатель" },
        { title: "Доставка" },
        { title: "Оплата" },
      ],
    },
    stepThree: {
      top: [{ title: "Товары в заказе" }],
      current: [{ title: "Покупатель" }],
      bottom: [{ title: "Доставка" }, { title: "Оплата" }],
    },
    stepFour: {
      top: [{ title: "Товары в заказе" }, { title: "Покупатель" }],
      current: [{ title: "Доставка" }],
      bottom: [{ title: "Оплата" }],
    },
    stepFive: {
      top: [
        { title: "Товары в заказе" },
        { title: "Покупатель" },
        { title: "Доставка" },
      ],
      current: [{ title: "Оплата" }],
      bottom: [],
    },
    stepSix: {
      text: `Спасибо за покупку \n Ваш заказ №7O3W4 от 26.03.2020 17:55 успешно создан.\nНомер вашей оплаты:\n №7O3W4/1\n\n Вы можете следить за выполнением своего заказа в Персональном разделе сайта. Обратите \n внимание, что для входа в этот раздел вам необходимо будет ввести логин и пароль пользователя\n сайта.\n \nОплата заказа: Наличный расчет`,
    },
  },
  basketBuyInputs: [
    {
      name: "name",
      type: "input",
      label: "Имя",
    },
    {
      name: "surname",
      type: "input",
      label: "Фамилия",
    },
    {
      name: "email",
      type: "input",
      label: "E-Mail",
    },
    {
      name: "phone",
      type: "input",
      label: "Телефон",
    },
    {
      name: "deliveryAddress",
      type: "input",
      label: "Адрес доставки",
    },
    {
      name: "commentByOrder",
      type: "textarea",
      label: "Комментарии к заказу",
    },
  ],
  stepsContentData: {
    stepFour: {
      1: {
        id: 1,
        title: "Доставка курьером",
        price: 0,
        svg: "delivery",
        width: "35px",
        height: "22px",
      },
      2: {
        id: 2,
        title: "Доставка транспортной \n" + "компанией",
        price: 500,
        svg: "delivery",
        width: "35px",
        height: "22px",
      },
      3: {
        id: 3,
        title: "Самовывоз",
        price: 0,
        svg: "delivery",
        width: "35px",
        height: "22px",
      },
    },
    stepFive: {
      1: {
        id: 1,
        title: "Наличный расчет",
        price: 0,
        svg: "purse",
        width: "32px",
        height: "32px",
      },
      2: {
        id: 2,
        title: "Онлайн оплата",
        price: 500,
        svg: "CardWithCoin",
        width: "32px",
        height: "32px",
      },
      3: {
        id: 3,
        title: "Оплата картой при получении",
        price: 0,
        svg: "handWithCoin",
        width: "32px",
        height: "32px",
      },
    },
  },
  total_amount: 0,
  stepState: 1,
  stepsResult: {
    stepOne: false,
    stepTwo: false,
    stepFive: false,
    stepTree: false,
    stepFour: false,
    stepSix: false,
  },
  selectedData: {
    comment: "",
    delivery_address: "",
    delivery_type: "",
    email: "",
    last_name: "",
    name: "",
    payment_type: "",
    phone_number: "",
    products: {},
  },
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BASKET:
      if (action.payload.count === undefined) {
        action.payload.count = 1;
      }

      const { count, price } = action.payload;
      const makePrice = count === undefined ? price : count * price;

      if (state.items[action.payload.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload.id]: {
              ...state.items[action.payload.id],
              count: state.items[action.payload.id].count + count,
            },
          },
          total_amount: state.total_amount + makePrice,
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload.id]: {
              ...action.payload,
            },
          },
          total_amount: state.total_amount + makePrice,
        };
      }
    case types.INITIAL_STEPS_RESULT:
      return {
        ...state,
        stepsResult: {
          stepOne: false,
          stepTwo: false,
          stepTree: false,
          stepFour: false,
          stepFive: false,
          stepSix: false,
        },
      };
    case types.MAKE_ORDER:
      return {
        ...state,
        stepState: 6,
        stepsResult: {
          stepOne: false,
          stepTwo: false,
          stepFive: false,
          stepTree: false,
          stepFour: false,
          stepSix: false,
        },
        selectedData: {
          comment: "",
          delivery_address: "",
          delivery_type: "",
          email: "",
          last_name: "",
          name: "",
          payment_type: "",
          phone_number: "",
          products: {},
        },
      };
    case types.UPDATE_STEPS_RESULT:
      return {
        ...state,
        stepsResult: {
          ...state.stepsResult,
          [action.payload.step]: action.payload.value,
        },
      };
    case types.BASKET_INITIAL_STATE:
      return {
        ...state,
        total_amount: Object.values(state.items)
          .map((e) => e.price * e.count)
          .reduce((acc, next) => acc + next, 0),
      };
    case types.INCREMENT_BASKET:
      const incBaskId = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [incBaskId]: {
            ...state.items[incBaskId],
            count: state.items[incBaskId].count + 1,
          },
        },
        total_amount: state.total_amount + state.items[incBaskId].price,
      };
    case types.DECREMENT_BASKET:
      const decBaskId = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [decBaskId]: {
            ...state.items[decBaskId],
            count:
              state.items[decBaskId].count === 1
                ? 1
                : state.items[decBaskId].count - 1,
          },
        },
        total_amount:
          state.items[decBaskId].count === 1
            ? state.total_amount
            : state.total_amount - state.items[decBaskId].price,
      };
    case types.DELETE_BASKET_ITEM:
      const delBaskId = action.payload;
      return {
        ...state,
        items: {
          ...Object.values(state.items)
            .filter((e) => e.id != delBaskId)
            .reduce((acc, next) => {
              return {
                ...acc,
                [next.id]: {
                  ...next,
                },
              };
            }, {}),
        },
        total_amount:
          state.total_amount -
          state.items[delBaskId].price * state.items[delBaskId].count,
      };
    case types.CHANGE_ORDER_STATE:
      return {
        ...state,
        stepState: action.payload,
      };
    case types.SELECTED_DATA_MANIPULATION:
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          ...action.payload,
        },
      };
    case types.BASKET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return { ...state };
  }
};

export default basketReducer;
