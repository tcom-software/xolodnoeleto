import React, { useEffect, useState } from "react";
import Cases from "./cases";
import { Message, InputContainer } from "./styles";
import { connect } from "react-redux";
import { phoneNumberFormat } from "@utils";
import { FormValidationInterface } from "interfaces";

const FillFormItem = (props: FormValidationInterface) => {
  const {
    data,
    callback,
    name,
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

  return (
    <InputContainer errorStyle={errorStyle}>
      <Cases
        props={props}
        validation={validation}
        errorMessage={errorMessage}
        placeholder={placeholder}
        handleChange={handleChange}
        errorStyle={errorStyle}
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
