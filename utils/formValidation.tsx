/**
 *  @info without this validation there is else validation step onChange time which works on inputs etc.
 *  @params are object which renders look like as inputs or pikers
 *  @return Array with name of inputs or pikers etc if value is empty validation is false
 * */
const formValidation = (array, info) => {
  const simpleInputs = Object.values(array)
    .map((e: any) =>
      e.required === false && info[e.name] === "" ? null : null
    )
    .filter((e) => e !== null);

  const requiredInputs = Object.values(array)
    .map((e: any) => (e.required ? e.name : null))
    .filter((e) => e !== null);

  const checkedRequiredData = requiredInputs
    .map((e) => {
      if (e === "uploadImages" && info[e].length === 0) {
        return e;
      } else if (!info[e]) {
        return e;
      } else {
        return null;
      }
    })
    .filter((e) => e !== null);

  if (info.rating === 0) {
    checkedRequiredData.push("rating");
  }

  return [...checkedRequiredData, ...simpleInputs];
};

export default formValidation;
