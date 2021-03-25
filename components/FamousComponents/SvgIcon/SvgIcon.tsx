import React from "react";
import SvgTypes from "./svg-types";
import Svg from "./styles";
import { SvgProperty } from "interfaces";

/**
 *  This component uses only static Svg
 * */

const SvgIcon = (props: SvgProperty) => {
  const { callback, className } = props;

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
      className={className}
      onClick={callback != null ? (e) => callback(e) : null}
    >
      {inSide}
    </Svg>
  );
};

export default SvgIcon;
