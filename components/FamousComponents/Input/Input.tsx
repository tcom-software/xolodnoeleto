import React from "react";
import SvgIcons from "../SvgIcon";
import { InputInterface } from "interfaces";
import { Label, Input, Container, InputBorder } from "./styles";

const InputCase = ({
  labelTitle,
  search,
  searchValue,
  placeholder,
  svgSize,
  svgColor,
  callback,
  handleChange,
  width,
  height,
}: InputInterface) => {
  if (!!labelTitle) {
    return (
      <Container>
        <Label>
          {labelTitle}
          <InputBorder width={width} height={height}>
            <Input
              placeholder={placeholder}
              onChange={handleChange}
              value={searchValue}
            />
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
      <Container>
        <Label>
          <InputBorder width={width} height={height}>
            <Input
              placeholder={placeholder}
              onChange={handleChange}
              value={searchValue}
            />
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
