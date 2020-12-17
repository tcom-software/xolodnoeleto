import * as types from "../actions/reviewActions";

const initialState = {
  /*items: [
    {
      id: 1,
      avatarPath: "1.png",
      fullName: "Ирина Каринова",
      starCount: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      avatarPath: "2.png",
      fullName: "Карина Степанова",
      starCount: 5,
      description:
        "Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту",
    },
    {
      id: 3,
      avatarPath: "3.png",
      fullName: "Степан Гудко",
      starCount: 3,
      description:
        "Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту",
    },
    {
      id: 4,
      avatarPath: "3.png",
      fullName: "Вова Уваров",
      starCount: 4,
      description:
        "Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту",
    },
    {
      id: 5,
      avatarPath: "1.png",
      fullName: "Галина Кустова",
      starCount: 5,
      description:
        "Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту",
    },
    {
      id: 6,
      avatarPath: "3.png",
      fullName: "Никита Козлова",
      starCount: 4,
      description:
        "Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту Бригада монтажников молодцы,монтаж за час! Менеджерам тоже спасибо,всегда на связи и очень лояльны к клиенту",
    },
  ],*/
  initialReviews: [],
  total: 1,
  reviews: [],
  reviewImages: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INITIAL_REVIEWS:
      return {
        ...state,
        initialReviews: action.payload.reviews,
      };
    case types.GET_REVIEWS_BY_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export default reviewReducer;
