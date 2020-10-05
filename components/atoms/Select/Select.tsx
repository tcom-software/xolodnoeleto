import React from "react";
import { SelectTag } from "./styles";
import { SelectInterface } from "interfaces";

const Select = ({
  name,
  data,
  title,
  forHtml,
  callback,
  children,
  errorStyleCallback,
}: SelectInterface) => {
  return (
    <SelectTag
      id={forHtml}
      value={data[name]}
      onChange={(e) => {
        errorStyleCallback();
        callback(e.target.value);
      }}
    >
      <option value="" disabled hidden>
        {title}
      </option>
      {children}
    </SelectTag>
  );
};

export default Select;
