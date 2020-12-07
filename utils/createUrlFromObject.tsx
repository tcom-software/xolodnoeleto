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

    url = `?${url.slice(0, -1)}&page=${selectedFiltersObject.page}`;
    url = url.replace("?&", "?");

    return `${catalogueId}${url}`;
  } else {
    return `${catalogueId}`;
  }
};

export default createUrlFromObject;
