import React from "react";
import SvgTypes from "./svg-types";
import Svg from "./styles";

interface SvgProperty {
  type: string;
  width: number;
  height: number;
  color?: string;
}

const SvgIcons = (props: SvgProperty) => {
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
    >
      {inSide}
    </Svg>
  );
};

export default SvgIcons;
