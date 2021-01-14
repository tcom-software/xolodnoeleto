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
    .calc {
      display: none;
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
        padding: 5px 10px;
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
    .mobile-brand-image {
      display: none;
    }
  }
  .level-five-mobile {
    display: none;
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    & > div {
      margin-bottom: 0px;
    }
    .level-one {
      border-top: 1px solid ${theme.body.someBorder};
      border-bottom: none;
      padding-top: 10px;
      margin: 0;
      .vendor-code-container {
        display: none;
      }
      .calc {
        display: block;
      }
    }
    .level-two {
      display: none;
    }
    .level-three {
      display: none;
    }
    .level-four {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${theme.body.someBorder};

      .terms-of-delivery {
        background: none;
      }
      .mobile-brand-image {
        display: block;
        img {
          width: 100px;
          padding: 0 10px;
          border: 1px solid ${theme.body.someBorder};
        }
      }
    }
    .level-five-mobile {
      display: block;
      .title-and-price-container {
        width: 100%;
        display: flex;
        margin: 15px 0;
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
  }
`;

export { ProductInformationContainer };
