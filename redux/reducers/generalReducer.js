import GeneralData from "../GeneralData";

const initialState = {
  header: {
    navigation: [
      "Оплата и доставка",
      "О нас",
      "Установка Кондиционеров",
      "Фото Наших Монтажей",
      "Наши Клиенты",
      "Наши Сертификаты",
      "Контакты",
    ],
    elseRefs: ["% Акции", "Бренды", "Сравнить", "Избранные"],
  },
  phones: ["+7 (495) 272-03-39", "+7 (495) 134-22-02"],
  socialNetworks: [
    {
      title: "Мы в соц. сетях",
      items: [
        {
          img: "vk.png",
          link: "",
        },
        {
          img: "instagram.png",
          link: "",
        },
        {
          img: "fb.png",
          link: "",
        },
      ],
    },
    {
      title: "Принимаем",
      items: [
        {
          img: "master_card.png",
          link: "",
        },
        {
          img: "uniTeller.png",
          link: "",
        },
        {
          img: "visa.png",
          link: "",
        },
      ],
    },
  ],
  menu: [
    {
      title: "Есть вопросы? Звоните!",
      items: GeneralData.phones,
    },
    {
      title: "Компания",
      items: [
        "Бренды",
        "Категории",
        "Оплата и Доставка",
        "Установка Кондиционеров",
        "Фото Наших Монтажей",
      ],
      sideItems: ["Наши Клиенты", "Наши Сертификаты", "О нас", "Контакты"],
    },
    {
      title: "Контакты",
      items: ["ООО ХОЛОДНОЕЛЕТО", "г. Москва", "zakaz@xolodnoeleto.ru"],
    },
  ],
  copyright: {
    title: "xolodnoeleto.ru | продажа и установка кондиционеров",
  },
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default counterReducer;
