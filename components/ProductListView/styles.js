import styled from "styled-components";
import theme from "styles/theme";

const ProductContainer = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.body.background};
  height: 125px;
  padding: 6px;
  @media (max-width: ${theme.mobileMedia.size}) {
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
    top: 10px;
    right: 10px;
  }
  .addBasket {
    color: ${theme.body.colorSecondary};
  }
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
  Title,
  ProductContainer,
  BorderTd,
  Container,
  Img,
  MiniCon,
  ImgCon,
  CalculateCon,
};
