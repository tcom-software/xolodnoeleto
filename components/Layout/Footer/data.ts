import GeneralData from "redux/GeneralData";

const Data = {
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
  socialNetworks: GeneralData.socialNetworks,
  Copyright: {
    title: "xolodnoeleto.ru | продажа и установка кондиционеров",
  },
};

export default Data;
