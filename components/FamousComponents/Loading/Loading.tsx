import React from "react";
import { LoadingContainer } from "./styles";
import { SvgIcon } from "@famous";

function Loading() {
  return (
    <LoadingContainer>
      <div className="air-cond">
        <SvgIcon
          type="oldConditionerLoader"
          width={70}
          height={70}
          className="first-svg"
        />
        <SvgIcon
          type="oldConditionerScrewsLoader"
          width={40}
          height={40}
          className="second-svg"
        />
      </div>
    </LoadingContainer>
  );
}

export default Loading;
