import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Message, InputContainer } from "./styles";
import { phoneNumberFormat } from "utils";

const InputValidation = ({ data, callback, type, inputsValidationData }) => {
  const [errorStyle, setErrorStyle] = useState(false);
  const { errorMessage, validation, placeholder } = inputsValidationData[type];

  const handleChange = ({ target: { value } }) => {
    let result;
    if (type == "phone") {
      const { errorStatus, phone } = phoneNumberFormat(value, data, type);
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

  return (
    <InputContainer errorStyle={errorStyle}>
      <Input
        type="text"
        value={data[type]}
        onChange={handleChange}
        placeholder={placeholder}
        errorStyle={errorStyle}
      />
      <Message errorStyle={errorStyle}>{errorMessage}</Message>
    </InputContainer>
  );
};

const mapStateToProps = ({ general: { inputsValidationData } }) => ({
  inputsValidationData,
});
export default connect(mapStateToProps)(InputValidation);
