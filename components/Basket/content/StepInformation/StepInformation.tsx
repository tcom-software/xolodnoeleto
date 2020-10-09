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

const StepsCases = ({
  title,
  current,
  children,
  stepState,
  changeOrderStep,
}) => {
  return (
    <>
      <Div current={current}>
        <div> {title} </div>
      </Div>
      {current ? (
        <ChildrenCon>
          {children}
          <div>
            <Button
              type="secondary"
              width="170px"
              height="47px"
              onClick={() => changeOrderStep(stepState - 1)}
            >
              НАЗАД
            </Button>
            <Button
              type="primary"
              width="170px"
              height="47px"
              onClick={() => changeOrderStep(stepState + 1)}
            >
              ДАЛЕЕ
            </Button>
          </div>
        </ChildrenCon>
      ) : null}
    </>
  );
};

const StepInformation = ({
  stepStructure,
  stepState,
  children,
  changeOrderStep,
}) => {
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
                  stepState={stepState}
                  changeOrderStep={changeOrderStep}
                  current={e === "current" ? true : false}
                />
              );
            });
          })}
    </Container>
  );
};

export default StepInformation;
