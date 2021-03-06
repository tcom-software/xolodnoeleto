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

    .grid-view-product-image {
      width: 100%;
      height: 158px;
      object-fit: contain;
      @media (max-width: ${theme.mobileMedia.size}) {
        height: auto;
      }
    }
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
    span {
      margin: 5px 0px;
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
      background: ${theme.body.primaryColor};
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

const Image = styled.img``;
const Title = styled.div`
  text-align: center;
  .model-series-center {
    p {
      text-align: center !important;
    }
  }
`;
const VendorCod = styled.div`
  font-weight: ${theme.body.fontBolder};
`;
const Stars = styled.div`
  white-space: nowrap;

  & > svg {
    margin: 0 4px;
    @media (max-width: 768px) {
      width: 15px;
    }
  }
`;
const Price = styled.div`
  font-weight: ${theme.body.fontBolder};
`;

export { Image, Title, Stars, Price, VendorCod, ProductContainer };
