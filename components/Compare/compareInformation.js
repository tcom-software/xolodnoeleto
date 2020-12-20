const CreateCompareInformation = (compareProducts) => {
  const result = Object.values(compareProducts).map((e, index) => {
    const { characteristics } = e;

    return characteristics.reduce(
      (
        acc,
        {
          title,
          characteristic_name,
          characteristic_value,
          characteristic_attribute_name,
        },
        i
      ) => {
        const value =
          characteristic_value !== null
            ? characteristic_value
            : characteristic_attribute_name;

        if (acc[title]) {
          return {
            ...acc,
            [title]: {
              ...acc[title],
              [characteristic_name]: [value],
            },
          };
        } else {
          if (title === null)
            return {
              ...acc,
            };
          else if (i === 1)
            return {
              [title]: {
                [characteristic_name]: [value],
              },
            };
          else
            return {
              ...acc,
              [title]: {
                ...acc[title],
                [characteristic_name]: [value],
              },
            };
        }
      }
    );
  }, {});

  const first = result[0];

  for (let i = 1; i < result.length; i++) {
    const keys = Object.keys(result[i]);

    for (let j = 0; j < keys.length; j++) {
      if (first[keys[j]]) {
        const keyObject = Object.keys(result[i][keys[j]]);
        for (let k = 0; k < keyObject.length; k++) {
          const itemLoop = result[i][keys[j]][keyObject[k]];

          if (first[keys[j]][keyObject[k]]) {
            const existingValue = first[keys[j]][keyObject[k]];
            first[keys[j]][keyObject[k]] = [...existingValue, ...itemLoop];
          } else {
            first[keys[j]][keyObject[k]] = [null, ...itemLoop];
          }
        }
      } else {
        first[keys[j]] = {
          ...result[keys[j]],
        };
      }
    }
  }

  return first;
};
export default CreateCompareInformation;
