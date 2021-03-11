import React from "react";
import SvgIcons from "../SvgIcon/index";
import { InputInterface } from "interfaces";
import { Label, InputStyled, Container, InputBorder } from "./styles";
import { Button } from "@famous";

const Input = ({
  width,
  height,
  search,
  svgSize,
  onFocus,
  svgColor,
  callback,
  labelTitle,
  searchValue,
  placeholder,
  handleChange,
  styles,
}: InputInterface) => {
  const Layout = (boolean) => (
    <Container>
      <Label>
        {boolean ? labelTitle : null}
        <InputBorder width={width} height={height} styles={styles}>
          <section>
            <InputStyled
              placeholder={placeholder}
              onChange={handleChange}
              value={searchValue}
              onFocus={onFocus}
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
          </section>
        </InputBorder>
      </Label>
    </Container>
  );

  if (!!labelTitle) {
    return Layout(true);
  } else {
    return Layout(false);
  }
};
export default Input;
