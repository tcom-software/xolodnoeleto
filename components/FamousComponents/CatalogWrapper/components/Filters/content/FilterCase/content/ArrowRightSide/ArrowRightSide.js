import React from "react";
import { SvgIcon } from "@famous";
import { ArrowRightSideContainer } from "./styles";

const ArrowRightSide = ({ title, firstLevelFiltersArray }) => {
  const index = firstLevelFiltersArray.indexOf(title);
  return (
    <ArrowRightSideContainer state={index}>
      <SvgIcon type={"arrowUp"} width={15} height={15} />
      <SvgIcon type={"arrowDown"} width={15} height={15} />
    </ArrowRightSideContainer>
  );
};

export default ArrowRightSide;
