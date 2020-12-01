import styled from "styled-components";

const ArrowRightSideContainer = styled.div`
  svg {
    &:nth-of-type(1) {
      display: ${({ state }) => (state !== -1 ? "block" : "none")};
    }
    &:nth-of-type(2) {
      display: ${({ state }) => (state !== -1 ? "none" : "block")};
    }
  }
`;

export { ArrowRightSideContainer };
