import React from "react";
import { Select } from "@famous";

const SelectTime = ({
  data,
  start,
  forHtml,
  newArray,
  callback,
  placeholder,
  setErrorStyle,
}) => {
  const timesZone = newArray.map((e) =>
    start + e < 10 ? `0${start + e}:00` : `${start + e}:00`
  );

  return (
    <Select
      name={name}
      forHtml={forHtml}
      title={placeholder}
      data={data}
      callback={callback}
      errorStyleCallback={() => setErrorStyle(false)}
    >
      {newArray.map((e: number, i: number) => {
        if (timesZone[i + 1]) {
          return (
            <option key={i} value={`${timesZone[i]} - ${timesZone[i + 1]}`}>
              {timesZone[i]} - {timesZone[i + 1]}
            </option>
          );
        }
      })}
    </Select>
  );
};

export default SelectTime;
