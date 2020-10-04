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
    catalog: [
      "Инверторные кондиционеры",
      "Настенные кондиционеры сплит-системы",
      "Мульти сплит системы (комплект)",
      "Мульти сплит системы (НБ)",
      "Мульти сплит системы (ВБ)",
      "Кассетные кондиционеры",
      "Канальные кондиционеры",
      "Колонные кондиционеры",
      "Напольно-потолочные кондиционеры",
      "VRV и VRF системы (НБ)",
      "VRV и VRF системы (ВБ)",
      "Чиллеры",
      "Фанкойлы",
      "Холодильное оборудование",
    ],
  },
  phones: ["+7 (495) 272-03-39", "+7 (495) 134-22-02"],
  worksTime: [9, 22],
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
      items: ["+7 (495) 272-03-39", "+7 (495) 134-22-02"],
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
  inputsValidationData: {
    name: {
      errorMessage: "Пожалуйста заполните имя",
      validation: /^[a-zA-Z]{2,15}$/,
      placeholder: "Имя",
    },
    surname: {
      errorMessage: "Пожалуйста заполните фамилию",
      validation: /^[a-zA-Z]{2,20}$/,
      placeholder: "Фамилия",
    },
    phone: {
      errorMessage: "Пример номера телефона +7 000 000-00-00",
      // validation: "",
      placeholder: "+7...",
    },
    dateForCall: {
      errorMessage: "Выбранная дата недоступна",
      validation: "",
      placeholder: "Удобное время для звонка",
    },
    message: {
      errorMessage: "Пожалуйста заполните Сообщение",
      validation: /^[a-zA-Z0-9 ]*$/,
      placeholder: "Сообщение",
    },
    email: {
      errorMessage: "Incorrect email",
      validation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      placeholder: "Email",
    },
  },
  aboutUsCards: [
    {
      title: "10 лет \n на рынке",
      type: "hands",
      width: "35px",
      height: "35px",
    },
    {
      title: "Своя \n доставка",
      type: "delivery",
      width: "35px",
      height: "35px",
    },
    {
      title: "Более 5 000 \n товаров в наличии",
      type: "boxes",
      width: "30px",
      height: "30px",
    },
    {
      title: "10 лет \n гарантии",
      type: "shield",
      width: "30px",
      height: "30px",
    },
  ],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default counterReducer;
