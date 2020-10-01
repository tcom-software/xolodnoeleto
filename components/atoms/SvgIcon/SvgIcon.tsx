import React from "react";
import SvgTypes from "./svg-types";
import Svg from "./styles";
import { SvgProperty } from "interfaces";

const SvgIcons = (props: SvgProperty) => {
  const { callback } = props;

  const {
    inSide,
    svgProps: { id, viewBox },
  } = SvgTypes[props.type];

  return (
    <Svg
      id={id}
      version="1.1"
      viewBox={viewBox}
      fill={props.color}
      width={props.width}
      height={props.height}
      onClick={callback != null ? () => callback() : null}
    >
      {inSide}
    </Svg>
  );
};

export default SvgIcons;
