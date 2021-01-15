import React from "react";
import Link from "next/link";
import { SvgIcon } from "@famous";
import { Div, ChildrenCon, StepInformationContainer } from "./styles";
import { Element as ScrollPosition } from "react-scroll";

const StepsCases = ({ title, current, children, stepState, to }) => {
  return (
    <>
      <Div current={current}>
        {title === "Товары в заказе" ? (
          <ScrollPosition name={`basketMove`}>
            <div> {title} </div>
          </ScrollPosition>
        ) : (
          <div> {title} </div>
        )}
      </Div>
      {current ? <ChildrenCon>{children}</ChildrenCon> : null}
    </>
  );
};

const StepInformation = ({ stepStructure, stepState, children }) => {
  const StepsObjKeys = Object.keys(stepStructure);

  return (
    <>
      <StepInformationContainer stepState={stepState}>
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
                    stepState={stepState}
                    current={e === "current" ? true : false}
                  />
                );
              });
            })}
      </StepInformationContainer>
    </>
  );
};

export default StepInformation;
