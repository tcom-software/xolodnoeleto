const createObjectFromUrl = (urlObj) => {
  const newObject = {
    checkboxes: {},
    fromTo: {},
    manufacturerCountries: {},
    page: 1,
  };

  for (let key in urlObj) {
    switch (true) {
      case key === "1":
      case key === "2":
      case key === "4":
      case key === "5":
      case key === "price":
        newObject["fromTo"] = {
          ...newObject["fromTo"],
          [key]: urlObj[key].split(" "),
        };
        break;
      case key === "page":
        newObject["page"] = urlObj[key];
        break;
      case key === "orderBy":
        if (urlObj[key] === "ASC" || urlObj[key] === "DESC")
          newObject["orderBy"] = urlObj[key];
        break;
      case key === "manufacturerCountries":
        newObject["manufacturerCountries"] = [
          ...urlObj[key]
            .split(" ")
            .map((e) => +e)
            .filter((e) => e !== NaN),
        ];
      case key === "brandId":
      case key === "catalogId":
      case key === "searchId":
        break;
      case +key != NaN:
        newObject["checkboxes"] = {
          ...newObject["checkboxes"],
          [key]: urlObj[key].split(" ").map((e) => Number(e)),
        };
        break;
      default:
        newObject[key] = urlObj[key];
    }
  }

  for (let k in newObject) {
    if (Object.keys(newObject[k]).length === 0) {
      delete newObject[k];
    }
  }
  return newObject;
};

export default createObjectFromUrl;
