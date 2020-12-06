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

    url = `?${url.slice(0, -1)}`;
  } else {
    return `${catalogueId}`;
  }

  return `${catalogueId}${url}`;
};

export default createUrlFromObject;
