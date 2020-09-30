import React, { useState } from "react";
import styled, { css } from "styled-components";

const validationType = {
  name: {
    errorMessage: "",
    validation: "",
    placeholder: "",
  },
  surname: {
    errorMessage: "",
    validation: "",
    placeholder: "",
  },
  phone: {
    errorMessage: "",
    validation: "",
    placeholder: "",
  },
  dateForCall: {
    errorMessage: "",
    validation: "",
    placeholder: "",
  },
  message: {
    errorMessage: "",
    validation: "",
    placeholder: "",
  },
  email: {
    errorMessage: "Incorrect email",
    validation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    placeholder: "Email",
  },
};

const InputContainer = styled.div`
  & > input {
    transition: all 2s ease-in;
    width: 100%;
    padding: 13px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: #c4c4c4;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);

    &:focus {
      transition: box-shadow 0.3s ease-in;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
  }
  //& > div {
  //  width: 100%;
  //  p {
  //    transition: 0.5s all ease-in;
  //    border: 1px solid #a94442;
  //    width: 50px;
  //    color: #a94442;
  //    font-size: 14px;
  //  }
  //}

  ${({ errorStyle }) => {
    if (errorStyle) {
      // there is error
      return css`
        & > input {
          border-color: #a94442;
        }
        //& > div {
        //  width: 100%;
        //  p {
        //    transition: 0.5s all ease-in;
        //    border: 1px solid #000;
        //    width: 200px;
        //    color: #a94442;
        //    font-size: 14px;
        //  }
        //}
      `;
    }
  }}
`;
const Input = styled.input``;
const Message = styled.div``;

const InputValidation = ({ type }: any) => {
  const [value, setValue] = useState("");
  const [errorStyle, setErrorStyle] = useState(false);

  const { errorMessage, validation, placeholder } = validationType[type];

  const handleChange = ({ target: { value } }) => {
    const result = validation.test(value);
    setValue(value);

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
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <Message>{errorStyle && errorMessage}</Message>
    </InputContainer>
  );
};
export default InputValidation;
