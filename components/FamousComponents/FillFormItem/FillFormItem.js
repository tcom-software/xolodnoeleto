import React, { useEffect, useState } from "react";
import Cases from "./cases/index";
import { connect } from "react-redux";
import { phoneNumberFormat } from "@utils";
import { Message, InputContainer } from "./styles";
import { FormValidationInterface } from "interfaces";

// FormValidationInterface
const FillFormItem = (props) => {
  const {
    data,
    name,
    callback,
    required,
    initialErrorState,
    inputsValidationData,
  } = props;
  const [errorStyle, setErrorStyle] = useState(false);
  const { errorMessage, validation, placeholder } = inputsValidationData[name];

  useEffect(() => {
    setErrorStyle(initialErrorState);
  }, [initialErrorState]);

  const handleChange = ({ target: { value } }) => {
    let result;

    if (name === "phone") {
      const { errorStatus, phone } = phoneNumberFormat(value, data, name);
      callback(phone);
      result = errorStatus;
    } else if (name === "uploadImages") {
      if (value.length > 0) {
        result = true;
      } else {
        result = false;
      }
      callback(value);
    } else {
      if (!required && value === "") {
        result = true;
        callback(value);
      } else {
        const regex = new RegExp(validation);
        result = regex.test(value);
        callback(value);
      }
    }

    if (!result) {
      setErrorStyle(true);
    } else {
      setErrorStyle(false);
    }
  };

  return (
    <InputContainer errorStyle={errorStyle}>
      <Cases
        props={props}
        required={required}
        placeholder={placeholder}
        validation={validation}
        errorMessage={errorMessage}
        errorStyle={errorStyle}
        handleChange={handleChange}
        setErrorStyle={setErrorStyle}
      />
      <Message errorStyle={errorStyle}>{errorMessage}</Message>
    </InputContainer>
  );
};

const mapStateToProps = ({ general: { inputsValidationData } }) => ({
  inputsValidationData,
});
export default connect(mapStateToProps)(FillFormItem);
