import React from "react";
import { SelectTag } from "./styles";

interface SelectInterface {
  title: string;
  name: string;
  children: any;
  data: object;
  callback: any;
  errorStyleCallback: any;
}

const Select = ({
  title,
  children,
  name,
  data,
  callback,
  errorStyleCallback,
}: SelectInterface) => {
  return (
    <SelectTag
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
