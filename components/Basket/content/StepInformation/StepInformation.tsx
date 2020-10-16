import React from "react";
import Link from "next/link";
import { SvgIcon } from "@atoms";
import { Div, ChildrenCon, StepInformationContainer } from "./styles";

const StepsCases = ({ title, current, children }) => (
  <>
    <Div current={current}>
      <div> {title} </div>
    </Div>
    {current ? <ChildrenCon>{children}</ChildrenCon> : null}
  </>
);

const StepInformation = ({ stepStructure, stepState, children }) => {
  const StepsObjKeys = Object.keys(stepStructure);

  return (
    <StepInformationContainer>
      {stepState === 1
        ? stepStructure["current"].map(({ title, svgType }, i) => (
            <Link href={"/"} key={i}>
              <Div stepOneComeBack={true}>
                <SvgIcon type="longArrowLeft" width={15} height={15} />
                <div> {title} </div>
              </Div>
            </Link>
          ))
        : StepsObjKeys.map((e) => {
            return stepStructure[e].map(({ title, svgType }, index) => {
              return (
                <StepsCases
                  key={index}
                  title={title}
                  children={children}
                  current={e === "current" ? true : false}
                />
              );
            });
          })}
    </StepInformationContainer>
  );
};

export default StepInformation;
