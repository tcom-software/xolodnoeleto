const createUrlFromObject = (selectedFiltersObject, catalogueId) => {
  let url = ``;
  const tookFiltersObject = Object.keys(selectedFiltersObject);

  if (tookFiltersObject.length > 0 && catalogueId !== undefined) {
    const merge = {
      ...selectedFiltersObject.checkboxes,
      ...selectedFiltersObject.fromTo,
      ...selectedFiltersObject.radio,
    };

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

    return `${catalogueId}${url}`;
  } else {
    return `${catalogueId}`;
  }
};

export default createUrlFromObject;
