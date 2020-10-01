import React from "react";
import SvgIcons from "../SvgIcon";
import { InputInterface } from "interfaces";
import { Label, Input, Container, InputBorder } from "./styles";

const InputCase = (props: InputInterface) => {
  const {
    labelTitle,
    search,
    placeholder,
    svgSize,
    svgColor,
    callback,
  } = props;

  if (!!labelTitle) {
    return (
      <Container>
        <Label>
          {labelTitle}
          <InputBorder props={props}>
            <Input props={props} placeholder={placeholder} />
            {search ? (
              <SvgIcons
                type="search"
                width={svgSize}
                height={svgSize}
                color={svgColor}
                callback={callback}
              />
            ) : null}
          </InputBorder>
        </Label>
      </Container>
    );
  } else {
    return (
      <Container props={props}>
        <Label>
          <InputBorder props={props}>
            <Input props={props} placeholder={placeholder} />
            {search ? (
              <SvgIcons
                type="search"
                width={svgSize}
                height={svgSize}
                color={svgColor}
                callback={callback}
              />
            ) : null}
          </InputBorder>
        </Label>
      </Container>
    );
  }
};
export default InputCase;
