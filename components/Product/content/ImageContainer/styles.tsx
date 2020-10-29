import styled from "styled-components";
import theme from "styles/theme";

const ProductImageContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 4fr;

  .small-images {
    img {
      transition: all 0.3s ease-in;
      width: 100px;
      height: 100px;
      border: 1px solid ${theme.body.someBorder};
      cursor: pointer;
      &:hover {
        transition: all 0.3s ease-in;
        transform: scale(1.02);
      }
    }
    .selected {
      border: 1px solid ${theme.body.primaryColor};
    }
  }

  .main-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 450px;
    border: 1px solid ${theme.body.someBorder};

    & > div {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .super-price {
      position: absolute;
      top: 15px;
      right: 0;

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
  }
`;

export { ProductImageContainer };
