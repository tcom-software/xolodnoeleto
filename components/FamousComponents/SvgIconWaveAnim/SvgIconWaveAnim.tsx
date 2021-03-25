import React from "react";
import SvgTypes from "../SvgIcon/svg-types";
import { useSpring, animated } from "react-spring";
import Svg from "../SvgIcon/styles";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

/**
 *  This component uses Svg like Ware(Волна) animation.
 *  Must be object in Svg-Types like animation: {...}
 *
 * */

const SvgIconWaveAnim = (props) => {
  const { type, callback, reverse, animationUniqId, className } = props;

  const {
    inSide,
    animation,
    svgProps: { id, viewBox },
  } = SvgTypes[type];

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
      className={className}
      onClick={callback != null ? (e) => callback(e) : null}
    >
      <defs>
        <filter id={animationUniqId ? animationUniqId : id}>
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
      <g filter={`url(#${animationUniqId})`}>{inSide}</g>
    </Svg>
  );
};

export default SvgIconWaveAnim;
