const makeFilters = (filters) => {
  if (filters) {
    const {
      characteristicAttributes,
      manufacturerCountries,
      textFilters,
    } = filters;

    // Габыриты
    const sortedFilters = [
      ...Object.values(textFilters),
      ...characteristicAttributes,
    ].reduce((acc, next, i) => {
      if (next["name"] === undefined) {
        next["name"] = "file.fromTo";
      }
      const { title } = next;
      if (title === null) {
        return { ...acc };
      }

      return {
        ...acc,
        [title]: acc[title] ? acc[title].concat([{ ...next }]) : [{ ...next }],
      };
    }, {});

    let brands = [];
    for (let value of manufacturerCountries) {
      brands.push({
        ...value,
        name: "file.select",
        name_ru: value.brand,
        characteristic_id: "manufacturerCountries",
      });
    }

    sortedFilters["Бренды"] = brands;
    return sortedFilters;
  }
};

export default makeFilters;
