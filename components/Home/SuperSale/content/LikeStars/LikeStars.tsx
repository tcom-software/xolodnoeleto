import { LikeStarsContainer } from "./styles";
import { SvgIcon } from "@famous";
import React from "react";

const LikeStars = (props) => {
  return (
    <LikeStarsContainer
      top={props.top}
      left={props.left}
      right={props.right}
      bottom={props.bottom}
      className={props.className}
    >
      <SvgIcon type="LikeStarY" width={25} height={25} color={props.fill} />
      <SvgIcon type="LikeStarX" width={25} height={25} color={props.fill} />
    </LikeStarsContainer>
  );
};
export default LikeStars;
