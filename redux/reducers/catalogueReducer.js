import * as types from "../actions/catalogueActions";

const initialState = {
  filters: {
    price: {
      id: 1,
      type: "between",
      enTitle: "Price",
      ruTitle: "Цена (Руб.)",
      values: {
        from: 0,
        to: 0,
      },
    },
    brands: {
      id: 2,
      type: "multipleCases",
      ruTitle: "Бренды",
      enTitle: "Brands",
      values: [
        { id: 3, name: "Dantex" },
        { id: 4, name: "Daikin" },
        { id: 5, name: "Cooper Hunter" },
        { id: 6, name: "Chigo" },
        { id: 7, name: "Ballu" },
        { id: 8, name: "Energolux" },
        { id: 9, name: "Fujitsu" },
        { id: 10, name: "Haier" },
        { id: 11, name: "Hisense" },
        { id: 12, name: "Hyundai" },
        { id: 13, name: "General climate" },
        { id: 14, name: "General" },
        { id: 15, name: "Gree" },
        { id: 16, name: "Midea" },
        { id: 17, name: "Marsa" },
        { id: 18, name: "MDV" },
        { id: 19, name: "Rover" },
        { id: 20, name: "Kitano" },
        { id: 21, name: "Lessar" },
        { id: 22, name: "Mitsubishi Electric" },
        { id: 23, name: "Sakata" },
        { id: 24, name: "Tosot" },
        { id: 25, name: "Mitsubishi Heavy" },
        { id: 26, name: "NeoClima" },
        { id: 27, name: "Panasonic" },
        { id: 28, name: "Roda" },
        { id: 29, name: "LG" },
        { id: 30, name: "SmartWay" },
        { id: 31, name: "Royal Clima" },
        { id: 32, name: "Electrolux" },
        { id: 33, name: "Kentatsu" },
        { id: 34, name: "Green" },
        { id: 35, name: "Pioneer" },
        { id: 36, name: "Toshiba" },
        { id: 37, name: "Dahatsu" },
        { id: 38, name: "Aeronik" },
        { id: 39, name: "Abion" },
        { id: 40, name: "TCL" },
        { id: 41, name: "IGC" },
        { id: 42, name: "Aux" },
        { id: 43, name: "Wisnow" },
        { id: 44, name: "Hitachi" },
        { id: 45, name: "JAX" },
        { id: 46, name: "Timberk" },
        { id: 47, name: "Lanzkraft" },
        { id: 48, name: "Hotpoint Ariston" },
      ],
    },
    ServicedArea: {
      id: 49,
      type: "multipleCases",
      ruTitle: "Обслуживаемая площадь",
      enTitle: "ServicedArea",
      values: [
        { id: 50, name: "до 20 м2" },
        { id: 51, name: "21 - 25 м2" },
        { id: 52, name: "26 - 35 м2" },
        { id: 53, name: "36 - 50 м2" },
        { id: 54, name: "51 - 70 м2" },
        { id: 55, name: "71 - 100 м2" },
      ],
    },
    CoolingCapacity: {
      id: 56,
      type: "between",
      ruTitle: "Мощность в режиме охлаждения",
      enTitle: "CoolingCapacity",
      values: {
        from: 0,
        to: 0,
      },
    },
    HeatingPower: {
      id: 57,
      type: "between",
      ruTitle: "Мощность в режиме обогрева",
      enTitle: "HeatingPower",
      values: {
        from: 0,
        to: 0,
      },
    },
    EnergyClass: {
      id: 58,
      type: "multipleCases",
      ruTitle: "Класс энергопотребления",
      enTitle: "EnergyClass",
      values: [
        { id: 59, name: "A" },
        { id: 60, name: "A+" },
        { id: 61, name: "A++" },
        { id: 62, name: "A+++" },
        { id: 63, name: "B" },
        { id: 64, name: "C" },
        { id: 65, name: "D" },
        { id: 66, name: "E" },
        { id: 67, name: "F" },
      ],
    },
  },
};

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default catalogueReducer;
