const createObjectFromUrl = (urlObj) => {
  const newObject = {
    checkboxes: {},
    fromTo: {},
  };

  for (let key in urlObj) {
    switch (key) {
      case "1":
      case "2":
      case "4":
      case "5":
      case "price":
        newObject["fromTo"] = {
          ...newObject["fromTo"],
          [key]: urlObj[key].split(" "),
        };
        break;
      case "catalogueId":
        break;
      default:
        newObject["checkboxes"] = {
          ...newObject["checkboxes"],
          [key]: urlObj[key].split(" ").map((e) => Number(e)),
        };
    }
  }

  for (let k in newObject) {
    if (Object.keys(newObject[k]).length === 0) delete newObject[k];
  }

  return newObject;
};

export default createObjectFromUrl;
