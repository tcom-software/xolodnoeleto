import styled from "styled-components";
import theme from "styles/theme";

const BrandsContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 800;
  }
  .brands-list {
    margin-top: 27px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));

    .brand {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffffff;
      border: 1px solid #d8d8d8;
      box-sizing: border-box;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.11);
    }
  }
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

export { BrandsContainer };
