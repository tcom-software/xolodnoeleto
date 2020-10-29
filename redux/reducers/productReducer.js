import * as types from "../actions/productActions";

const initialState = {
  product: {
    id: Math.floor(Math.random() * 5000),
    src: "/test-product.png",
    manufacturer: "Dahatsu",
    model: "COMFORT-ON-OFF-2019-DG-07",
    vendorCode: "7380",
    price: 27129,
    count: 1,
    superPrice: true,
    selectedStarsCount: 4,
    images: [
      "/test-product.png",
      "/test-two-product.jpg",
      "/test-three-product.jpg",
    ],
    brand: "/images/brands/1.png",
    description: `Сплит-системы Bismark серии STARK объединили в себе высокое качество, эффективность и приемлемые цены.
          Сплит-системы Bismark серии STARK оснащены оптимальным набором функций, таких как I FEEL, I FAVOR, режим SLEEP и TURBO, а также таймером на включение и выключение. В
          Кондиционеры STARK представлены пятью классическими моделями от 07 до 24 kBTU. Сплит-системы STARK работают в режимах охлаждения, обогрева, вентиляции и осушения воздуха.
          Для удобства пользователя кондиционеры оснащены скрытым LED дисплеем и функциональным пультом дистанционного управления.
          Низкий уровень шума внутреннего блока обеспечивается за счет дополнительной изоляции компрессора.
          Гарантия высокого качества сплит-систем STARK - это многоуровневый контроль производства инженерами ОТК.
          Кондиционеры Bismark имеют высший класс энергоэффективности А*
          Возможность выбора из 3¬х скоростей вентилятора позволяет установить максимально комфортный режим
          Кондиционеры Bismark имеют 4 режима работы: охлаждение, обогрев, вентиляция и осушение
          Автоматический возврат к ранее заданным параметрам в случае отключения электропитания произойдет за счет наличия функции авторестарт
          В режиме TURBO кондиционер работает с повышенной мощностью, что обеспечивает максимально быстрое охлаждение/обогрев
          Во время работы кондиционера в ночном режиме, вентилятор работает на низких оборотах, что снижает уровень шума.
          
          Компрессор - GMCC
          
          Bismark STARK-BSS-S07-001`,
    characteristics: {
      general: {},
      control: {},
      sizes: {},
      main: {},
    },
  },
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_PRODUCT:
      return {
        ...state,
        product: {
          ...state.product,
          count: state.product.count + 1,
        },
      };
    case types.DECREMENT_PRODUCT:
      return {
        ...state,
        product: {
          ...state.product,
          count: state.product.count === 1 ? 1 : state.product.count - 1,
        },
      };
    default:
      return { ...state };
  }
};

export default favoriteReducer;
