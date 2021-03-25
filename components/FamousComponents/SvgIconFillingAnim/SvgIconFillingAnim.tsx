import React, { useEffect, useRef, useState } from "react";
import { Spring } from "react-spring/renderprops.cjs";
import SvgTypes from "../SvgIcon/svg-types";
import { SvgIconAnimInterface } from "interfaces";

/**
 *  This component do only one style animation
 *  like Filling
 * */

const SvgIconFillingAnim = ({
  type,
  width,
  height,
  color,
  duration,
}: SvgIconAnimInterface) => {
  const {
    inSide,
    svgProps: { id, viewBox },
  } = SvgTypes[type];
  const pathRef: any = useRef();
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    setOffset(pathRef.current.getTotalLength());
  }, [offset]);

  const dynamicPaths =
    inSide.props.children.length === undefined
      ? [inSide.props.children]
      : inSide.props.children;

  return (
    <>
      {offset ? (
        <Spring from={{ x: offset }} to={{ x: 0 }} config={{ duration }}>
          {(props) => (
            <svg
              id={id}
              viewBox={viewBox}
              version="1.1"
              height={`${height}px`}
              width={`${width}px`}
            >
              {dynamicPaths.map((e, i) => {
                return (
                  <path
                    key={i}
                    {...e.props}
                    strokeDashoffset={props.x}
                    strokeDasharray={offset}
                    strokeWidth=".2"
                    ref={pathRef}
                  />
                );
              })}
            </svg>
          )}
        </Spring>
      ) : (
        <svg
          id={id}
          viewBox={viewBox}
          version="1.1"
          height={`${height}px`}
          width={`${width}px`}
        >
          {dynamicPaths.map((e, i) => {
            return (
              <path
                key={i}
                {...e.props}
                strokeDasharray={offset}
                strokeWidth="1"
                stroke="transparent"
                fill="transparent"
                ref={pathRef}
              />
            );
          })}
        </svg>
      )}
    </>
  );
};

export default SvgIconFillingAnim;
