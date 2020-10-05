import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Select } from "@atoms";
import { Input, Message, InputContainer } from "./styles";
import { phoneNumberFormat } from "utils";
import { InputValidationInterface } from "interfaces";

const InputValidation = ({
  data,
  callback,
  name,
  type,
  worksTime,
  initialErrorState,
  inputsValidationData,
  forHtml,
}: InputValidationInterface) => {
  const [errorStyle, setErrorStyle] = useState(false);
  const { errorMessage, validation, placeholder } = inputsValidationData[name];

  useEffect(() => {
    setErrorStyle(initialErrorState);
  }, [initialErrorState]);

  const handleChange = ({ target: { value } }) => {
    let result;
    if (name == "phone") {
      const { errorStatus, phone } = phoneNumberFormat(value, data, name);
      callback(phone);
      result = errorStatus;
    } else {
      result = validation.test(value);
      callback(value);
    }

    if (!result) {
      setErrorStyle(true);
    } else {
      setErrorStyle(false);
    }
  };

  const Case = () => {
    if (type === "select") {
      const [start, stop] = worksTime;
      const needsTime = stop - start;
      const newArray = Array.from(Array(needsTime).keys());

      return (
        <Select
          forHtml={forHtml}
          title={placeholder}
          data={data}
          name={name}
          callback={callback}
          errorStyleCallback={() => setErrorStyle(false)}
        >
          {newArray.map((e: number, i: number) => {
            const format =
              start + e < 10 ? `0${start + e}:00` : `${start + e}:00`;
            return (
              <option key={i} value={format}>
                {format}
              </option>
            );
          })}
        </Select>
      );
    } else {
      return (
        <Input
          type="text"
          id={forHtml}
          value={data[name]}
          onChange={handleChange}
          placeholder={placeholder}
          errorStyle={errorStyle}
        />
      );
    }
  };

  return (
    <InputContainer errorStyle={errorStyle}>
      {Case()}
      <Message errorStyle={errorStyle}>{errorMessage}</Message>
    </InputContainer>
  );
};

const mapStateToProps = ({ general: { inputsValidationData } }) => ({
  inputsValidationData,
});
export default connect(mapStateToProps)(InputValidation);
