import styled, { css } from "styled-components";
import theme from "styles/theme";

const ProductContainer = styled.div``;

const Image = styled.img``;
const VendorCod = styled.div``;
const Stars = styled.div``;
const Price = styled.div``;
const Tr = styled.tr``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.body.background};
  height: 125px;
  padding: 6px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Img = styled.img`
  height: 100%;
`;
const MiniCon = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 8px;
  position: relative;
  width: 100%;
  height: 100%;

  & > svg {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
const Edit = styled.div`
  text-decoration: underline;
  color: #03a9f4;
`;
const CalculateCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div``;
const ImgCon = styled.div`
  height: 100%;
`;

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
  Container,
  Img,
  MiniCon,
  Edit,
  ImgCon,
  CalculateCon,
};
