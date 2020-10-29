import styled, { css } from "styled-components";
import theme from "styles/theme";

const ProductTopContainer = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
`;

const ProductBottomContainer = styled.div`
  .description {
    background: white;
    padding: 15px;
    margin-top: 20px;
    border: 1px solid ${theme.body.someBorder};

    h2 {
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 15px;
    }
  }
  .specification {
    background: #fff;
    padding: 15px;
    margin: 20px 0;
    border: 1px solid ${theme.body.someBorder};
    .show-more-spec {
      color: ${theme.body.primaryColor};
      p {
        margin-top: 25px;
        cursor: pointer;
      }
    }
    .spec-item {
      margin-top: 50px;

      &:first-of-type {
        margin-top: 10px;
      }
      .spec-item-title {
        font-size: 24px;
        font-weight: 800;
      }
      .key-value-con {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 10px 0;
        border-bottom: 1px solid ${theme.body.someBorder};

        .key {
          color: #b1aeae;
        }
        .value {
        }
        .mobile-border {
          display: none;
        }
      }
    }
    .hide {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .specification,
    .description {
      border: none;
      margin: 0;
      background: ${theme.body.secondBackground};
    }
    .specification {
      .spec-item {
        margin: 0;
        .spec-item-title {
          margin: 15px 0;
        }
        .key-value-con {
          position: relative;
          border: none;
          .mobile-border {
            position: absolute;
            top: 0;
            left: -23px;
            width: 100vw;
            border-bottom: 1px solid ${theme.body.someBorder};
            display: block;
          }
        }
      }
    }
  }
`;

export { ProductTopContainer, ProductBottomContainer };
