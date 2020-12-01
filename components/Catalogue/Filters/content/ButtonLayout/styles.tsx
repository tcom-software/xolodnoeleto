import styled, { css } from "styled-components";

const ButtonLayoutContainer = styled.div`
  & > button {
    &:nth-of-type(3) {
      margin-top: 10px;
    }
  }
`;

export { ButtonLayoutContainer };
