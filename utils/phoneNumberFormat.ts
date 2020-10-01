const phoneNumberFormat = (value: string, info: any, name: string) => {
  // +3 000 000-00-00
  // +7 000 000-00-00
  // 8 000 000-00-00
  let errorStatus;
  let result = value;

  value = value.replace(/ |-|\+/g, "");
  const test = value.match(/[a-zA-z!$%^&*@#()_|~=`{}\[\]:";'<>?,.\/]/);
  const lLetter = value[value.length - 1];
  const isLastLetter =
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(lLetter) === -1;

  if (
    value.length <= 11 &&
    !isLastLetter &&
    test === null &&
    value[value.length - 1] != "+"
  ) {
    switch (value.length) {
      case 1:
        const test = info[name].replace(/ |-|\+/g, "");
        if (
          (value[0] === "8" && value[0] + " " == info[name]) ||
          (value[0] !== "8" && value == test)
        ) {
          result = "";
        } else {
          result = value.replace(/(\d)/, "$1 ");
        }
        break;
      case 2:
        result = value.replace(/(\d)(\d)/, "$1 $2");
        break;
      case 3:
        result = value.replace(/(\d)(\d)(\d)/, "$1 $2$3");
        break;
      case 4:
        result = value.replace(/(\d)(\d{3})/, "$1 $2");
        break;
      case 5:
        result = value.replace(/(\d)(\d{3})(\d)/, "$1 $2 $3");
        break;
      case 6:
        result = value.replace(/(\d)(\d{3})(\d)(\d)/, "$1 $2 $3$4");
        break;
      case 7:
        result = value.replace(/(\d)(\d{3})(\d{3})/, "$1 $2 $3");
        break;
      case 8:
        result = value.replace(/(\d)(\d{3})(\d{3})(\d)/, "$1 $2 $3-$4");
        break;
      case 9:
        result = value.replace(/(\d)(\d{3})(\d{3})(\d{2})/, "$1 $2 $3-$4");
        break;
      case 10:
        result = value.replace(
          /(\d)(\d{3})(\d{3})(\d{2})(\d)/,
          "$1 $2 $3-$4-$5"
        );
        break;
      case 11:
        result = value.replace(
          /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
          "$1 $2 $3-$4-$5"
        );
        break;
      default:
    }
  } else {
    errorStatus = true;
    result = info[name];
  }

  if (value.length <= 11 && isLastLetter) {
    errorStatus = false;
  } else if (value.length < 11 && !isLastLetter) {
    errorStatus = false;
  } else if (value.length === 11 && !isLastLetter) {
    errorStatus = true;
  } else {
  }

  if (value.length <= 11 && !isLastLetter && value[0] != "8" && value != "") {
    result = result != "" ? "+" + result : "";
  }

  return { errorStatus, phone: result };
};

export default phoneNumberFormat;
