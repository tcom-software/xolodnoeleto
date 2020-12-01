import React from "react";
import { SvgIcon } from "@famous";
import { ArrowRightSideContainer } from "./styles";

const ArrowRightSide = ({
  title,
  firstLevelFiltersArray,
  actionFirstFiltersLevelArray,
}) => {
  const index = firstLevelFiltersArray.indexOf(title);
  return (
    <ArrowRightSideContainer state={index}>
      <SvgIcon
        type={"arrowUp"}
        width={20}
        height={20}
        callback={() => actionFirstFiltersLevelArray(title)}
      />
      <SvgIcon
        type={"arrowDown"}
        width={20}
        height={20}
        callback={() => actionFirstFiltersLevelArray(title)}
      />
    </ArrowRightSideContainer>
  );
};

export default ArrowRightSide;
