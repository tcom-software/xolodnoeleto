import styled from "styled-components";
import theme from "styles/theme";

const BrandsContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 800;
  }
  .brands-list {
    perspective: 1000px;
    transform-style: preserve-3d;

    margin-top: 27px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  }
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

const BrandItem = styled.div`
  position: relative;
  transition: transform, box-shadow 0.2s;
  transform: rotateX(0deg);
  will-change: transform;

  cursor: pointer;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.11);
  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.11);
  }
  .layer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
export { BrandsContainer, BrandItem };
