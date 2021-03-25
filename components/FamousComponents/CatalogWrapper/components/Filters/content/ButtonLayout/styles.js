import styled, { css } from "styled-components";

const ButtonLayoutContainer = styled.div`
  & > button {
    &:nth-of-type(3) {
      margin-top: 10px;
    }
    @media (max-width: 768px) {
      .mobile-style {
        border: none;
        color: #c30707;
      }
    }
  }
`;

export { ButtonLayoutContainer };
