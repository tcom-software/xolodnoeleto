import { SvgIcon } from "@famous";
import React from "react";
import DatePicker from "react-datepicker";

const Datepicker = ({ name, data, callback, errorStyle, placeholder }) => {
  return (
    <div
      className={`datepicker-container ${errorStyle ? "datepicker-error" : ""}`}
    >
      <DatePicker
        selected={data[name]}
        onChange={(data) => {
          callback({
            target: {
              value: data,
            },
          });
        }}
        placeholderText={placeholder}
      />
      <SvgIcon type={"arrowUp"} width={10} height={10} />
      <SvgIcon type={"arrowDown"} width={10} height={10} />
    </div>
  );
};
export default Datepicker;
