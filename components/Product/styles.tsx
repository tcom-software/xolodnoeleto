import styled, { css } from "styled-components";
import theme from "styles/theme";

const ProductTopContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
  }
`;

const ProductBottomContainer = styled.div`
  @media (max-width: 768px) {
  }
`;

export { ProductTopContainer, ProductBottomContainer };
