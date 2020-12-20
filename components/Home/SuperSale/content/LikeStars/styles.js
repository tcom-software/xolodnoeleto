import styled from "styled-components";

const LikeStarsContainer = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  left: ${({ left }) => (left != undefined ? left : "")};
  right: ${({ right }) => (right != undefined ? right : "")};
  top: ${({ top }) => (top != undefined ? top : "")};
  bottom: ${({ bottom }) => (bottom != undefined ? bottom : "")};

  svg {
    position: absolute;
    &:nth-of-type(1) {
      left: 1px;
    }
    &:nth-of-type(2) {
    }
  }
`;

export { LikeStarsContainer };
