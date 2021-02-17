const CreateCompareInformation = (compareProducts) => {
  let result = Object.values(compareProducts).map((e, index) => {
    const { characteristics } = e;

    if (characteristics.length !== 0) {
      return characteristics.reduce(
        (
          acc,
          {
            title,
            characteristic_name,
            characteristic_value,
            characteristic_attribute_name,
          },
          i
        ) => {
          const value =
            characteristic_value !== null
              ? characteristic_value
              : characteristic_attribute_name;

          if (acc[title]) {
            return {
              ...acc,
              [title]: {
                ...acc[title],
                [characteristic_name]: [value],
              },
            };
          } else {
            if (title === null)
              return {
                ...acc,
              };
            else if (i === 1)
              return {
                [title]: {
                  [characteristic_name]: [value],
                },
              };
            else
              return {
                ...acc,
                [title]: {
                  ...acc[title],
                  [characteristic_name]: [value],
                },
              };
          }
        }
      );
    }
  }, {});
  result = result.filter((e) => e != undefined);
  const array = result[0];
  for (let i = 1; i < result.length; i++) {
    const keys = Object.keys(result[i]);

    for (let j = 0; j < keys.length; j++) {
      if (array[keys[j]]) {
        const keyObject = Object.keys(result[i][keys[j]]);
        for (let k = 0; k < keyObject.length; k++) {
          const itemLoop = result[i][keys[j]][keyObject[k]];

          if (array[keys[j]][keyObject[k]]) {
            const existingValue = array[keys[j]][keyObject[k]];
            array[keys[j]][keyObject[k]] = [...existingValue, ...itemLoop];
          } else {
            array[keys[j]][keyObject[k]] = [null, ...itemLoop];
          }
        }
      } else {
        array[keys[j]] = {
          ...result[keys[j]],
        };
      }
    }
  }


  let dimensions = {}
  if(Object.keys(array["Габариты"]).indexOf("Внутреннего блока кондиционера (Ш)") != -1) {
    dimensions["Вес внутреннего блока"] = array["Габариты"]["Вес внутреннего блока"]
    dimensions["Вес внешнего блока"] = array["Габариты"]["Вес внешнего блока"]
    delete array["Габариты"]["Вес внутреннего блока"]
    delete array["Габариты"]["Вес внешнего блока"]

    const one = [], two = [], three = [], fore = [], five = [], six = [];
    const items = Object.values(array["Габариты"])

    for(let i = 0;i < items.length;i++) {
      if(i <= 2) {
        one.push(items[i][0]);
        two.push(items[i][1]);
        three.push(items[i][2])
      } else {
        fore.push(items[i][0]);
        five.push(items[i][1]);
        six.push(items[i][2])
      }
    }

    dimensions = {
      ...dimensions,
      "Внутреннего блока кондиционера (В) x (Ш) x (Г)": [one.join(" x "), two.join(" x "), three.join(" x ")],
      "Наружного блока кондиционера (В) x (Ш) x (Г)": [fore.join(" x "), five.join(" x "), six.join(" x ")]
    }
    array["Габариты"] = dimensions
  }

  return array;
};
export default CreateCompareInformation;
