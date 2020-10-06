import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;
const BrandsList = styled.div`
  margin-top: 27px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
`;
const Brand = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.11);
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 800;
`;

export { Container, Brand, Title, BrandsList };
