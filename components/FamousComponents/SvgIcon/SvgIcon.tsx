import React from "react";
import SvgTypes from "./svg-types";
import Svg from "./styles";
import { SvgProperty } from "interfaces";
import { animated, useSpring } from "react-spring";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

const SvgIcon = (props: SvgProperty) => {
  const { callback, reverse } = props;

  const {
    inSide,
    animation,
    svgProps: { id, viewBox },
  } = SvgTypes[props.type];

  const { freq, scale }: any = useSpring({
    ...animation,
    ...(reverse == undefined ? {} : { reverse }),
  });

  return (
    <Svg
      id={id}
      version="1.1"
      viewBox={viewBox}
      fill={props.color}
      width={props.width}
      height={props.height}
      onClick={callback != null ? (e) => callback(e) : null}
    >
      {props.animation ? (
        <>
          <defs>
            <filter id="water">
              <AnimFeTurbulence
                type="fractalNoise"
                baseFrequency={freq}
                numOctaves={"1"}
                result="TURB"
                seed="8"
              />
              <AnimFeDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                in="SourceGraphic"
                in2="TURB"
                result="DISP"
                scale={scale}
              />
            </filter>
          </defs>
          <g filter="url(#water)">{inSide}</g>
        </>
      ) : (
        inSide
      )}
    </Svg>
  );
};

export default SvgIcon;
