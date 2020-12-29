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

  @media (max-width: 768px) {
    svg {
      &:nth-of-type(1) {
        display: block !important;
        width: 20px !important;
      }
      &:nth-of-type(2) {
        display: block !important;
        width: 20px !important;
        display: ${({ state }) =>
          state !== -1 ? "none !important" : "block !important"};
      }
    }
  }
`;

export { ArrowRightSideContainer };
