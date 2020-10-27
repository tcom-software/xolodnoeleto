import React from "react";
import { CheckBoxContainer } from "./styles";
import { checkBoxInterface } from "interfaces";

const CheckBox = (
  { width, height, border, padding, children, background, callback },
  checkBoxInterface
) => {
  return (
    <CheckBoxContainer
      width={width}
      height={height}
      padding={padding}
      border={border}
      background={background}
      onClick={() => callback()}
    >
      {children ? children : null}
    </CheckBoxContainer>
  );
};

export default CheckBox;
