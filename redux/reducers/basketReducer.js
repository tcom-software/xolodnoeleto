import * as types from "../actions/basketActions";

const initialState = {
  items: {
    1: {
      id: 1,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      price: 27129,
      count: 5,
      selectedStarsCount: 4,
    },
    2: {
      id: 2,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 7644,
      count: 3,
      selectedStarsCount: 3,
    },
    3: {
      id: 3,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
    4: {
      id: 4,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
    5: {
      id: 5,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
  },
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
      name: "fullName",
      type: "input",
      label: "Ф.И.О.",
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
      name: "addressDelivery",
      type: "input",
      label: "Адрес доставки",
    },
    {
      name: "commentByOrder",
      type: "input",
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
  stepState: 6,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BASKET:
      if (state.items[action.payload]) {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: {
              ...state.items[action.payload],
              count: state.items[action.payload].count + 1,
            },
          },
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: {
              id: action.payload,
              src: "/test-product.png",
              manufacturer: "Dahatsu",
              model: "COMFORT-ON-OFF-2019-DG-07",
              vendorCode: "Артикул  | 7380",
              price: 27129,
              count: 1,
              selectedStarsCount: 4,
            },
          },
          total_amount: state.total_amount + 27129,
        };
      }

    case types.BASKET_INITIAL_STATE:
      return {
        ...state,
        total_amount: Object.values(state.items)
          .map((e) => e.price * e.count)
          .reduce((acc, next) => acc + next, 0),
      };
    case types.INCREMENT:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            count: state.items[action.payload.id].count + 1,
          },
        },
        total_amount: state.total_amount + state.items[action.payload.id].price,
      };
    case types.DECREMENT:
      console.log(state.items);
      console.log(action.payload);

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            count:
              state.items[action.payload.id].count === 1
                ? 1
                : state.items[action.payload.id].count - 1,
          },
        },
        total_amount:
          state.items[action.payload.id].count === 1
            ? state.total_amount
            : state.total_amount - state.items[action.payload.id].price,
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        items: {
          ...Object.values(state.items)
            .filter((e) => e.id != action.payload.id)
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
          state.items[action.payload.id].price *
            state.items[action.payload.id].count,
      };
    case types.CHANGE_ORDER_STATE:
      return {
        ...state,
        stepState: action.payload,
      };
    default:
      return { ...state };
  }
};

export default basketReducer;
