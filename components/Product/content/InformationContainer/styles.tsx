import styled from "styled-components";
import theme from "styles/theme";

const ProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    margin-bottom: 25px;
  }

  .level-one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${theme.body.someBorder};
    & > div > .vendor-code {
      font-weight: 800;
    }
    .few-svg {
      svg {
        margin: 0 7px;
      }
    }
  }
  .level-two {
    .stars-container {
      margin: 15px 0;
    }

    .title-and-price-container {
      margin: 15px 0;
      display: flex;
      padding-bottom: 15px;
      align-content: center;
      justify-content: space-between;
      border-bottom: 1px solid ${theme.body.someBorder};

      .title {
        font-size: 16px;
      }
      .price {
        font-size: 24px;
        font-weight: 800;
      }
    }
  }
  .level-three {
    .calc {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 25px;
    }
    .add-basket-and-brand-container {
      display: flex;
      align-content: center;
      justify-content: space-between;

      img {
        width: 100px;
        padding: 0 10px;
        border: 1px solid ${theme.body.someBorder};
      }
    }
  }
  .level-four {
    .terms-of-delivery {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 53px;
      cursor: pointer;
      background: #f6f6f6;

      & > * {
        margin: 0 10px;
      }
    }
  }
`;

export { ProductInformationContainer };
