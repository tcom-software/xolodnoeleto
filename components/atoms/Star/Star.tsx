import React from "react";
import { SvgIcon } from "@atoms";
import theme from "styles/theme";

const Star = ({ item: i, selected: s }) => {
  return (
    <SvgIcon
      type={i + 1 <= s ? "star" : "filledStar"}
      width={16}
      height={16}
      color={i + 1 <= s ? theme.star.filedStar : theme.star.emptyStar}
      callback={() => {}}
    />
  );
};

export default Star;
