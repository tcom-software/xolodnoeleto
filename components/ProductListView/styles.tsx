import styled, { css } from "styled-components";
import theme from "styles/theme";

const ProductContainer = styled.div``;

const Image = styled.img``;
const Title = styled.div``;
const VendorCod = styled.div``;
const Stars = styled.div``;
const Price = styled.div``;
const Tr = styled.tr``;
const BorderTd = styled.td`
  position: relative;
  span {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 70%;
    width: 0.5px;
    background: ${theme.body.someBorder};
  }
`;

export {
  Image,
  Title,
  Stars,
  Price,
  VendorCod,
  ProductContainer,
  Tr,
  BorderTd,
};
