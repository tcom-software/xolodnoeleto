import React from "react";
import { SelectTag } from "./styles";

interface SelectInterface {
  title: string;
  name: string;
  children: any;
  data: object;
  callback: any;
}

const Select = ({ title, children, name, data, callback }: SelectInterface) => {
  return (
    <SelectTag value={data[name]} onChange={(e) => callback(e.target.value)}>
      <option value="" disabled hidden>
        {title}
      </option>
      {children}
    </SelectTag>
  );
};

export default Select;
