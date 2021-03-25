const createUrlFromObject = (selectedFiltersObject, catalogId) => {
  let url = ``;
  const tookFiltersObject = Object.keys(selectedFiltersObject);

  if (tookFiltersObject.length > 0 && catalogId !== undefined) {
    for (let key in selectedFiltersObject.fromTo) {
      const array = selectedFiltersObject.fromTo[key];
      if (array instanceof Array && !array[0] && !array[1]) {
        delete selectedFiltersObject.fromTo[key];
        if (Object.keys(selectedFiltersObject.fromTo).length === 0) {
          delete selectedFiltersObject.fromTo;
        }
      }
    }

    const {
      manufacturerCountries,
      checkboxes,
      fromTo,
      radio,
    } = selectedFiltersObject;

    const merge = {
      ...checkboxes,
      ...fromTo,
      ...radio,
    };

    if (manufacturerCountries && manufacturerCountries.length > 0) {
      merge["manufacturerCountries"] = manufacturerCountries;
    }

    for (let key in merge) {
      url += `${key}=${merge[key].join("+")}&`;
    }

    let manualParams = "";
    const { orderBy, page } = selectedFiltersObject;

    if ((orderBy && orderBy === "ASC") || (orderBy && orderBy === "DESC")) {
      manualParams += `&orderBy=${orderBy}`;
    }
    if (selectedFiltersObject.page) {
      manualParams += `&page=${page}`;
    }

    url = `?${url.slice(0, -1)}${manualParams}`;
    url = url.replace("?&", "?");
    url === `?` ? (url = "") : null;

    return `${catalogId}${url}`;
  } else {
    return `${catalogId}`;
  }
};

export default createUrlFromObject;
