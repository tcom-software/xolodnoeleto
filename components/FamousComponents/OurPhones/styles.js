import styled from "styled-components";

const Hgroup = styled.hgroup`
  h2 {
    cursor: ${({ show }) => (show ? `unset` : `pointer`)};

    span {
      filter: ${({ show }) => (show ? `blur(0px)` : ` blur(4px)`)};
    }
  }
`;

export { Hgroup };
