import * as types from "../actions/generalActions";

const initialState = {
  header: {
    navigation: [
      { title: "Оплата и доставка", url: "/payment-and-delivery" },
      { title: "О нас", url: "/about-us" },
      { title: "Установка Кондиционеров", url: "/ac-installation" },
      { title: "Фото Наших Монтажей", url: "/installation-photos" },
      { title: "Наши Клиенты", url: "/our-clients" },
      { title: "Наши Сертификаты", url: "/certificates" },
      { title: "Контакты", url: "/contact-us" },
    ],
    elseRefs: [
      // { title: "% Акции", url: "" },
      // { title: "Бренды", url: "/brands" },
      { title: "Сравнить", url: "/compare" },
      { title: "Избранные", url: "/favorites" },
    ],
  },

  phones: [
    {
      first: "+7 (499) 286-89-",
      second: "05",
    },
    // {
    //   first: "+7 (495) 134-22-",
    //   second: "02",
    // },
  ],
  worksTime: [9, 22],
  isMobile: false,
  isOpenBigImg: "",
  socialNetworks: [
    {
      title: "Мы в соц. сетях",
      items: [
        {
          img: "vk.png",
          link: "",
          width: "31px",
          height: "31px",
        },
        {
          img: "instagram.png",
          link: "",
          width: "31px",
          height: "31px",
        },
        {
          img: "fb.png",
          link: "",
          width: "31px",
          height: "31px",
        },
      ],
    },
    {
      title: "Принимаем",
      items: [
        {
          img: "master_card.png",
          link: "",
          height: "31px",
          width: "51px",
        },
        {
          img: "visa.png",
          link: "",
          height: "16px",
          width: "54px",
        },
        {
          img: "uniTeller.png",
          link: "",
          height: "21px",
          width: "105px",
        },
      ],
    },
  ],
  menu: [
    {
      title: "Есть вопросы? Звоните!",
      items: [],
    },
    {
      title: "Компания",
      items: [
        // { title: "Бренды", url: "/brands" },
        { title: "Категории", url: "" },
        { title: "Оплата и Доставка", url: "/payment-and-delivery" },
        { title: "Установка Кондиционеров", url: "/ac-installation" },
        { title: "Фото Наших Монтажей", url: "/installation-photos" },
      ],
      sideItems: [
        { title: "Наши Клиенты", url: "/our-clients" },
        { title: "Наши Сертификаты", url: "/certificates" },
        { title: "О нас", url: "/about-us" },
        { title: "Контакты", url: "/contact-us" },
      ],
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
    fullName: {
      errorMessage: "Пожалуйста заполните полное имя",
      validation: "^[a-zA-Zа-яА-яа-яА-я ]{2,15}$",
      placeholder: "Иванович Иван Иванов",
    },
    name: {
      errorMessage: "Пожалуйста заполните имя",
      validation: "^[a-zA-Zа-яА-я]{2,15}$",
      placeholder: "Имя",
    },
    surname: {
      errorMessage: "Пожалуйста заполните фамилию",
      validation: "^[a-zA-Zа-яА-я]{2,20}$",
      placeholder: "Фамилия",
    },
    phone: {
      errorMessage: "Пример номера телефона +7 000 000-00-00",
      // validation: "",
      placeholder: "+7...",
    },
    address: {
      errorMessage: "Полный Адрес, Город, Улица",
      validation: "^[a-zA-Zа-яА-я0-9 ]{2,30}$",
      placeholder: "Адрес...",
    },
    deliveryAddress: {
      errorMessage: "Пожалуйста, напишите полный адрес",
      validation: "^[a-zA-Zа-яА-я0-9 ]{2,30}$",
      placeholder: "Адрес...",
    },
    commentByOrder: {
      errorMessage: "Пожалуйста, напишите комментарии",
      // validation: "^[a-zA-Zа-яА-я0-9 ]{2,30}$",
      validation: "^[a-zA-Zа-яА-яа-яА-я0-9 .,=+!@#$%&*^()]{2,150}$",
      placeholder: "Напишите ваш комментарии",
    },
    comment: {
      errorMessage: "Пожалуйста, напишите комментарии",
      // validation: "^[a-zA-Zа-яА-я0-9 ]{2,30}$",
      validation: "^[a-zA-Zа-яА-яа-яА-я0-9 .,=+!@#$%&*^()]{2,150}$",
      placeholder: "Напишите ваш комментарии",
    },
    uploadImages: {
      errorMessage: "Пожалуйста, выберите фото",
      validation: "",
      placeholder: "",
    },
    date: {
      errorMessage: "Пожалуйста, выберите дата монтажа",
      // validation: /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
      // validation: /^(\w+\S+)$/,
      validation: "[a-zA-Z0-9-,+()]+",
      placeholder: "Дата Монтажа _ _/ _ _/_ _ _ _",
    },
    dateForCall: {
      errorMessage: "Выбранная дата недоступна",
      validation: "",
      placeholder: "Удобное время для звонка",
    },
    message: {
      errorMessage: "Пожалуйста заполните Сообщение",
      validation: "^[a-zA-Zа-яА-я0-9 ]*$",
      placeholder: "Сообщение",
    },
    email: {
      errorMessage: "Неверный почтовый ящик\n",
      validation: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",

      placeholder: "IvanIvanov@mail.ru",
    },
    rating: {
      errorMessage: "",
      validation: "^[0-9]{0,1}$",
      placeholder: "",
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
  showMoreTexts: {
    landing: `В зависимости от функций, которые выполняет кондиционер, и его мощности меняются размеры и стоимость кондиционера. Покупая кондиционер, обратите внимание, на какую квадратуру он рассчитан, чтобы не переплачивать. Ведь слишком мощный кондиционер будет переохлаждать  помещение и потреблять больше электроэнергии. А, например, для спальни можно выбрать более бесшумную модель кондиционера. Сегодня очень популярны бытовые сплит-системы – кондиционеры, состоящие из внутреннего и наружного блоков. Для большего комфорта  основные шумопроизводящие элементы кондиционера вынесены в наружный блок, который располагается за пределами охлаждаемого  помещения. На нашем сайте можно найти большой ассортимент сплит-систем от бытовых до полупромышленных моделей.
      В зависимости от функций, которые выполняет кондиционер, и его мощности меняются размеры и стоимость кондиционера. Покупая кондиционер, обратите внимание, на какую квадратуру он рассчитан, чтобы не переплачивать. Ведь слишком мощный кондиционер будет переохлаждать  помещение и потреблять больше электроэнергии. А, например, для спальни можно выбрать более бесшумную модель кондиционера. Сегодня очень популярны бытовые сплит-системы – кондиционеры, состоящие из внутреннего и наружного блоков. Для большего комфорта  основные шумопроизводящие элементы кондиционера вынесены в наружный блок, который располагается за пределами охлаждаемого  помещения. На нашем сайте можно найти большой ассортимент сплит-систем от бытовых до полупромышленных моделей.
      В зависимости от функций, которые выполняет кондиционер, и его мощности меняются размеры и стоимость кондиционера. Покупая кондиционер, обратите внимание, на какую квадратуру он рассчитан, чтобы не переплачивать. Ведь слишком мощный кондиционер будет переохлаждать  помещение и потреблять больше электроэнергии. А, например, для спальни можно выбрать более бесшумную модель кондиционера. Сегодня очень популярны бытовые сплит-системы – кондиционеры, состоящие из внутреннего и наружного блоков. Для большего комфорта  основные шумопроизводящие элементы кондиционера вынесены в наружный блок, который располагается за пределами охлаждаемого  помещения. На нашем сайте можно найти большой ассортимент сплит-систем от бытовых до полупромышленных моделей.`,
  },
  acInstallation: {
    title: `УСТАНОВКА КОНДИЦИОНЕРОВ ЦЕНЫ\nУСТАНОВКА КОНДИЦИОНЕРОВ В МОСКВЕ И МОСКОВСКОЙ ОБЛАСТИ`,
    description: {
      firstPath: `
Наша компания предоставляет широкий спектр услуг в сфере систем кондиционирования воздуха, включающий как подбор и продажу климатического оборудования, так и установку и обслуживание систем кондиционирования любого типа: от монтажа бытовых кондиционеров и различных сплит-систем до проектирования и установки промышленных кондиционеров и комплексных систем кондиционирования. `,
      secondPath: `Профессиональный монтаж и установка кондиционера – залог его долгой и надежной работы. Наличие в нашей компании опытных специалистов в сфере кондиционирования, а также использование профессионального монтажного оборудования гарантирует высокое качество производимых монтажных работ и бесперебойную работу установленного кондиционирующего оборудования. Уровень подготовки наших монтажных бригад позволяет решить организационные и технические задачи любого уровня сложности.\n

Точная цена монтажа кондиционера, сплит-системы или другого климатического оборудования варьируется и должна определятся для каждого конкретного случая отдельно. Однако, для большинства случаев может подойти стандартный монтаж кондиционера, приведенный ниже. Следует отметить, что мы предлагаем значительные скидки на установку и монтаж кондиционера, если климатическое оборудование было приобретено в нашей компании.`,
    },
    information: {
      ourPriceList: {
        title: "Наш Прайс Лист для Установки",
        children: [
          {
            title: {
              name: "Услуга",
              value: ["Стоимость у нас", "Стоимость при акции"],
            },
            children: [
              {
                key: "1500 Вт - 2000 Вт модельный ряд 5",
                value: ["10270 руб", "7900 руб"],
              },
              {
                key: "2000 Вт - 3000 Вт модельный ряд 7-9",
                value: ["11570 руб", "8900 руб"],
              },
              {
                key: "3000 Вт - 4600 Вт модельный ряд 12-13-14",
                value: ["14170 руб", "10900 руб"],
              },
              {
                key: "4600 Вт - 6100 Вт модельный ряд 18",
                value: ["15470 руб", "11900 руб"],
              },
              {
                key: "6100 Вт - 7500 Вт модельный ряд 24",
                value: ["16770 руб", "12900 руб"],
              },
            ],
          },
          {
            title: {
              name: `Цены на установку для кондиционеров купленных не в \n интернет-магазине "Холодноелето"`,
              value: ["", ""],
            },
            children: [
              {
                key: "1500 Вт - 2000 Вт модельный ряд 5",
                value: ["10270 руб", "7900 руб"],
              },
              {
                key: " 2000 Вт - 3000 Вт модельный ряд 7-9",
                value: ["11570 руб", "8900 руб"],
              },
              {
                key: " 3000 Вт - 4600 Вт модельный ряд 12-13-14",
                value: ["14170 руб", "10900 руб"],
              },
              {
                key: " 4600 Вт - 6100 Вт модельный ряд 18	15470",
                value: ["15470 руб", "11900 руб"],
              },
              {
                key: " 6100 Вт - 7500 Вт модельный ряд 24	16770",
                value: ["16770 руб", "12900 руб"],
              },
            ],
          },
        ],
      },
      installingPoints: {
        title: `Стандартная установка кондиционеров`,
        description:
          "Все включено без дополнительной оплаты!\nВ стандартный монтаж включены все расходные материалы:",
        children: [
          "Кронштейн для внешнего блока, для крепления на стену.",
          "Фреоновые трубки межблочная трасса до 5м.",
          "Теплоизолятор для фреоновых труб.",
          "Кабель межблочный.",
          "Кабель до розетки 2м.",
          "декоративный короб 1м.",
          "Дренажный шланг.",
        ],
      },
      InstallationIsCarriedOutAsFollows: {
        title: "Установка осуществляется следующим образом",
        middleText: {
          title: "Нестандартная установка кондиционеров",
          description:
            "Нестандартная установка кондиционеров производится в том случае, когда исходя из условий монтажа или предпочтений заказчика, необходимо проведение дополнительных работ, которые не входят в стандартный монтаж кондиционеров. Таковыми являются:",
        },
        children: [
          `Внешний блок размещается на кронштейнах под окном (без применения альпинистского снаряжения).Если установка производится на первом этаже, то внешний блок ставится на высоте до 4м (модельный ряд 5, 7, 9, 12) все остальные модели до 3м.`,
          `Одно отверстие во внешней стене для вывода коммуникаций, кабель питания и дренажный шланг к наружному блоку.`,
          `Межблочная теплотрасса до 5м. (фреоновые трубки в изоляции, электрические провода, дренажный шланг).`,
          `Коммуникации от внутреннего блока до отверстия во внешней стене(внутри помещения) идут под небольшим наклоном и закрываются декоративным коробом длиной до 1м.`,
          `Наружные коммуникации не фиксируются на стене и не укладываются в декоративный короб.`,
        ],
        secondChildren: [
          `Штробление и укладка в штробу межблочных коммуникаций.`,
          `“Установка кондиционеров в два этапа”. Обычно применяется, когда установка кондиционеров производится одновременно с капитальным ремонтом помещения. Во время общего ремонта офиса или квартиры проводится первый этап: устанавливается внешний блок и выводятся межблочные коммуникации. После ремонта, во время второго этапа устанавливается внутренний блок.`,
          `Установка внешнего блока сплит-системы не под окном, а сверху или сбоку от окна, что намного осложняет работу монтажников. Иногда такая установка невозможна без использования спец.техники, автовышек или вмешательства альпинистов.`,
          `Монтаж защитного козырька над наружным блоком сплит-системы.`,
          `Закрепление наружных коммуникаций к стене.`,
          `Установка помпы для дренажа.`,
          `Удлинение межблочной трассы (свыше 5 метров).`,
        ],
      },
      middleInfoWithBorder: `В случаях, когда требуется нестандартная установка сплит-системы, Вы можете заказать выезд нашего специалиста, который посоветует Вам наиболее оптимальный вариант установки кондиционера, определит какие дополнительные работы необходимо провести и верно оценит стоимость установки кондиционеров в Вашем случае.\n
Ниже представляем цены на дополнительные работы при установке кондиционеров, на основе которых наши менеджеры определяют стоимость нестандартной установки кондиционеров:`,
      service: {
        children: [
          {
            title: {
              name: "Услуга",
              value: "Стоимость у нас",
            },
            children: [
              {
                key:
                  "Дополнительный метр трассы для кондиционера мощностью 07-09 (20-26 м2)",
                value: "800 руб",
              },
              {
                key:
                  "Дополнительный метр трассы для кондиционера мощностью 12-15-16 (35-45 м2)",
                value: "1000 руб",
              },
              {
                key:
                  "Дополнительный метр трассы для кондиционера мощностью 18-21-22 (50 - 65м2)",
                value: "1200 руб",
              },
              {
                key:
                  "	Дополнительный метр трассы для кондиционера мощностью 24 (70 м2)",
                value: "1500 руб",
              },
              {
                key:
                  "Дополнительное сверление (например, при наличии балкона-лоджии)",
                value: "1000 руб",
              },
            ],
          },
        ],
      },
      casesOfMounting: {
        title: `Варианты стандартных монтажей: схематическое представление`,
        children: [
          {
            src: "1.png",
            title:
              "Установка внутреннего блока кондиционера на левой стене, наружный под окном (с наименьшей трассой внутри квартиры).",
          },
          {
            src: "2.png",
            title:
              "Установка внутреннего блока кондиционера на левой стене, наружный под окном (с наименьшей трассой внутри квартиры).",
          },
          {
            src: "2.png",
            title:
              "Установка внутреннего блока кондиционера на левой стене, наружный под окном (с наименьшей трассой внутри квартиры).",
          },
          {
            src: "4.png",
            title:
              "Установка внутреннего блока кондиционера на левой стене, наружный под окном (с наименьшей трассой внутри квартиры).",
          },
        ],
      },
      ApartmentRenovation: {
        title: "Ремонт квартиры  - стихийное бедствие или… ?",
        src: "komunikacija_izvne21.jpg",
        firstText:
          "Говорят, самым дорогим расходным материалом  при ремонте квартиры являются нервные клетки. И с этим трудно не согласиться… Как бы детально не планировались работы, нет-нет да и всплывает ситуация, когда поникший хозяин квартиры, дрожащей рукой закурив сигарету, скажет что то наподобие: “Зин, а про это-то мы и забыли”. И как ни странно, одним из таких случаев является проводка коммуникаций для кондиционера. Очень часто мы сталкиваемся с людьми которые заказывают установку кондиционера в квартире с совершенно новым ремонтом. В этом случае спрятать коммуникационные трубы в стене не представляется возможным (ну, кто же разрешит штробить только что отремонтированную стену). Как результат, коммуникации проводятся по стене внося тем самым некий дисбаланс в дизайн команты. ",
        secondText:
          "Дисбаланса можно избежать заказав кондиционер не после, а во время ремонтных работ в квартире. В этом случае устанавливается внешний блок кондиционера и проводятся коммуникации внутрь квартиры по заранее проштробленной борозде . Внутрений же блок, ставится уже после окончания ремонта (через месяц-два).\n" +
          "Следует отметить , что пожалуй самым благоприятным сезоном для заказа кондиционера является осень. Обычно осенью  цены на сплит системы максимально низки, да и кроме того это сезон многочисленных скидок и акций. Безусловно, компания “Холоднолето” не является исключением. Здесь цены на многие модели кондиционеров с установкой в Москве и Московской области приятно Вас удивят (например на все модели компании Фуджитсу (Япония)кроме привлекательной стоимости действует также бесплатная установка и доставка).\n" +
          "Если у Вас есть вопросы по установке сплит системы в Вашем доме , наши сотрудники с радостью проконсультирут Вас по всем интересующим Вас вопросам по телефону +7 (495) 797-96-26. Также, прямо сейчас, можно осуществить онлайн звонок с Вашего компьютера нажав на эту ссылку.",
      },
    },
  },
  InstallationPhotos: [
    { jpg: "images/done_job/1.jpg", webP: "images/done_job/1.webp" },
    { jpg: "images/done_job/2.jpg", webP: "images/done_job/2.webp" },
    { jpg: "images/done_job/3.JPEG", webP: "images/done_job/2.webp" },
    { jpg: "images/done_job/4.JPEG", webP: "images/done_job/4.webp" },
    { jpg: "images/done_job/5.JPEG", webP: "images/done_job/5.webp" },
    { jpg: "images/done_job/6.JPEG", webP: "images/done_job/6.webp" },
    { jpg: "images/done_job/7.JPEG", webP: "images/done_job/7.webp" },
    { jpg: "images/done_job/8.jpg", webP: "images/done_job/8.webp" },
  ],
  ourClients: [
    {
      srcOne: "1/1.png",
      srcTwo: "1/2.png",
    },
    {
      srcOne: "2/1.png",
      srcTwo: "2/2.png",
    },
    {
      srcOne: "3/1.png",
      srcTwo: "3/2.png",
    },
    {
      srcOne: "4/1.png",
      srcTwo: "4/2.png",
    },
    // {
    //   srcOne: "5/1.png",
    //   srcTwo: "5/2.png",
    // },
    {
      srcOne: "6/1.png",
      srcTwo: "6/2.png",
    },
    {
      srcOne: "7/1.png",
      srcTwo: "7/2.png",
    },
    {
      srcOne: "8/1.png",
      srcTwo: "8/2.png",
    },
    {
      srcOne: "9/1.png",
      srcTwo: "9/2.png",
    },
    {
      srcOne: "10/1.jpg",
      srcTwo: "10/2.png",
    },
    {
      srcOne: "11/1.png",
      srcTwo: "11/2.png",
    },
    {
      srcOne: "12/1.png",
      srcTwo: "12/2.png",
    },
    {
      srcOne: "13/1.png",
      srcTwo: "13/2.png",
    },
    {
      srcOne: "14/1.gif",
      srcTwo: "14/2.png",
    },
    {
      srcOne: "15/1.jpg",
    },
    { srcOne: "1.png" },
    { srcOne: "2.png" },
    { srcOne: "2.png" },
    { srcOne: "4.png" },
    { srcOne: "5.png" },
    { srcOne: "6.png" },
    { srcOne: "7.png" },
    { srcOne: "7.png" },
    { srcOne: "9.png" },
    { srcOne: "8.png" },
    { srcOne: "11.png" },
    { srcOne: "12.png" },
    { srcOne: "13.png" },
    { srcOne: "14.png" },
    { srcOne: "15.png" },
    { srcOne: "16.gif" },
  ],
  certificates: 14,
  paymentAndDelivery: {
    first: {
      src: "/images/payment-and-delivery/2.jpg",
      content: {
        title: "Варианты доставки и оплаты!",
        text: `Не надо копить — можно сразу купить:\nУ нас можно приобрести В Рассрочку 0% без переплат!\n
Оплата производится на месте по факту привоза товара. При покупке кондиционера с установкой, поднятие на этаж бесплатно. Если отсутствует лифт в доме и оборудование без установки, то поднятие на один этаж стоит 200 рублей.У нас действуют специальные предложения, согласно которым, купленные кондиционеры в интернет-магазине «ХолодноеЛето» доставляются и устанавливаются бесплатно.`,
      },
    },
    second: {
      src: "/images/payment-and-delivery/1.jpg",
      content: {
        title:
          "Все кондиционеры по акции ДОСТАВКА БЕСПЛАТНО! (в пределах МКАД)",
        text: `Доставка и установка кондиционеров производится в один день!
Доставляем и устанавливаем кондиционеры как в будние дни, так и в выходные!
В нашей компании есть возможность самовывоза!
Мы можем доставить товар по указанному адресу в Москве и МО.
Доставка без акции в пределах МКАД – 800 руб
Доставка товаров без акции за пределы МКАД 800 руб + 30 руб. за каждый км. от МКАД
При покупке 4-х и более кондиционеров доставка кондиционеров по Москве осуществляется бесплатно.`,
      },
    },
    third: {
      content: {
        text:
          "Оплата производится на месте по факту привоза товара. При покупке кондиционера с установкой, поднятие на этаж бесплатно. Если отсутствует лифт в доме и оборудование без установки, то поднятие на один этаж стоит 200 рублей.У нас действуют специальные предложения, согласно которым, купленные кондиционеры в интернет-магазине «ХолодноеЛето» доставляются и устанавливаются бесплатно.",
      },
    },
  },
  notification: {
    message: null,
    type: null,
  },
  showOurPhones: false,
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_OPEN_BIG_IMAGE:
      return {
        ...state,
        isOpenBigImg: action.payload,
      };
    case types.IS_MOBILE:
      return {
        ...state,
        isMobile: action.payload <= 768 ? true : false,
      };
    case types.NOTIFICATION_MESSAGE:
      return {
        ...state,
        notification: {
          message: action.payload.message,
          type: action.payload.type,
        },
      };
    case types.SHOW_ORU_PHONES:
      return {
        ...state,
        showOurPhones: !state.showOurPhones,
      };
    default:
      return { ...state };
  }
};

export default generalReducer;
