import styled, { css } from "styled-components";
import theme from "styles/theme";

const ProductContainer = styled.div`
  height: 389px;
  width: 100%;
  padding: 15px;
  border: 1px solid ${theme.product.borderColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    text-align: center;
    margin-top: 11px;

    &:first-child {
      margin-top: 0;
    }
  }
  & > button {
    border: 1px solid ${theme.product.borderColor};

    ${({ border }) => {
      if (border == false) {
        return css`
          border: none;
          &:hover {
            border: 1px solid ${theme.product.borderColor};
          }
        `;
      }
    }};
    text-transform: uppercase;
  }
  & > button:hover {
    background: #0070f3;
    color: #fff;
    border: none;
  }
`;

const Image = styled.img`
  width: 158px;
  height: 158px;
`;
const Title = styled.div``;
const VendorCod = styled.div`
  font-weight: ${theme.body.fontBolder};
`;
const Stars = styled.div`
  & > svg {
    margin: 0 4px;
  }
`;
const Price = styled.div`
  font-weight: ${theme.body.fontBolder};
`;

export { Image, Title, Stars, Price, VendorCod, ProductContainer };
