const formValidation = (array, info) => {
  const simpleInputs = Object.values(array)
    .map((e: any) =>
      e.required === false && info[e.name] != "" ? e.name : null
    )
    .filter((e) => e !== null);

  const requiredInputs = Object.values(array)
    .map((e: any) => (e.required ? e.name : null))
    .filter((e) => e !== null);

  const checkedRequiredData = requiredInputs
    .map((e) => (!info[e] ? e : null))
    .filter((e) => e !== null);

  return [...checkedRequiredData, ...simpleInputs];
};

export default formValidation;
