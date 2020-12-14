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
        const format = start + e < 10 ? `0${start + e}:00` : `${start + e}:00`;
        return (
          <option key={i} value={format}>
            {format}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectTime;
