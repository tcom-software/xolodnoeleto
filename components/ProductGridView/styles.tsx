import styled, { css } from "styled-components";
import theme from "styles/theme";

const ProductContainer = styled.div`
  & > a {
    & > * {
      margin: 7px 0;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 15px;
    border: 1px solid ${theme.product.borderColor};

    .super-price {
      position: absolute;
      top: 15px;
      left: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 97px;
      height: 23px;
      color: white;
      font-size: 11px;
      font-weight: 800;
      background: #ea4a4a;
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

    @media (max-width: ${theme.mobileMedia.size}) {
      & > button {
        width: 90%;
      }
    }
  }
`;

const Image = styled.img`
  width: 158px;
  height: 158px;
  object-fit: contain;
  @media (max-width: ${theme.mobileMedia.size}) {
    height: auto;
  }
`;
const Title = styled.div`
  text-align: center;
`;
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
