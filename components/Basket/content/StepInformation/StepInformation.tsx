import React from "react";
import Link from "next/link";
import { SvgIcon } from "@atoms";
import { StepInformationContainer, Div, ChildrenCon } from "./styles";

const StepOne = ({ title }) => (
  <Link href={"/"}>
    <div>
      <SvgIcon type="longArrowLeft" width={15} height={15} />
      <div> {title} </div>
    </div>
  </Link>
);

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
        ? stepStructure["current"].map(({ title, svgType }, i) => {
            return <StepOne key={i} title={title} />;
          })
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
