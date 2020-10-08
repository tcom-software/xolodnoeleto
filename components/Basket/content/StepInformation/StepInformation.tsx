import React from "react";
import Link from "next/link";
import { Container, Div, ChildrenCon } from "./styles";
import SvgIcons from "../../../atoms/SvgIcon";
import { Button } from "@atoms";

const StepOne = ({ title }) => (
  <Link href={"/"}>
    <div>
      <SvgIcons type="longArrowLeft" width={15} height={15} />
      <div> {title} </div>
    </div>
  </Link>
);

const StepsCases = ({ title, current, children }) => {
  return (
    <>
      <Div current={current}>
        <div> {title} </div>
      </Div>
      {current ? (
        <ChildrenCon>
          {children}
          <Button type="primary" width="170px" height="47px">
            ДАЛЕЕ
          </Button>
        </ChildrenCon>
      ) : null}
    </>
  );
};

const StepInformation = ({ stepStructure, stepState, children }) => {
  const StepsObjKeys = Object.keys(stepStructure);

  return (
    <Container>
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
    </Container>
  );
};

export default StepInformation;
