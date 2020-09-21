import React from "react";
import { Label, Input, Container, InputBorder } from "./styles";
import SvgIcons from "../SvgIcon";

interface InputInterface {
  labelTitle?: string;
  search?: boolean;
  width: number;
  height: number;
  placeholder: string;
  svgSize: number;
}

const InputCase = (props: InputInterface) => {
  const { labelTitle, search, placeholder, svgSize } = props;

  if (!!labelTitle) {
    return (
      <Container>
        <Label>
          {labelTitle}
          <InputBorder props={props}>
            <Input props={props} placeholder={placeholder} />
            {search ? (
              <SvgIcons type="search" width={svgSize} height={svgSize} />
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
              <SvgIcons type="search" width={svgSize} height={svgSize} />
            ) : null}
          </InputBorder>
        </Label>
      </Container>
    );
  }
};
export default InputCase;
