import styled, { css } from "styled-components";
import theme from "styles/theme";

const CompareContainer = styled.div`
  border: 1px solid ${theme.body.someBorder};
  .top-section {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 350px 1fr;
  }

  .bottom-section {
    .titles {
      .titles-sub-container {
        h2 {
          margin: 12px 0;
          color: ${theme.body.primaryColor};
        }
        .line {
          display: grid;
          grid-template-columns: 350px repeat(
              ${({ productCounts }) => productCounts},
              1fr
            );
          border-bottom: 1px solid ${theme.body.someBorder};
          p {
            font-weight: 700;
          }
        }
      }
    }
  }
  .top-section {
    height: max-content;

    .add-product-con {
      .left-static-height {
        height: 310px;
        padding: 15px;
        .added-products-con {
          .item {
            width: 100%;
            margin: 5px 0;
            background: #fff;
            max-height: 80px;
            padding: 10px 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
              width: 80px;
              height: 65px;
              object-fit: cover;
            }
            p {
              width: 100%;
              padding: 10px;
              display: flex;
              flex-direction: column;

              span {
                font-size: 13px;
              }
            }
          }
        }
      }
      .only-titles {
        & > div {
          * {
            text-indent: 10px;
          }
          h3 {
            color: ${theme.body.primaryColor};
            padding: 10px 0;
            border-bottom: 1px solid ${theme.body.someBorder};
          }
          p {
            padding: 5px 0;
            border-bottom: 1px solid ${theme.body.someBorder};
          }
        }
      }
    }
    .products-con {
      display: grid;
      grid-template-columns: repeat(
        ${({ productCounts }) => productCounts},
        1fr
      );
      .product-container {
        background: #fff;

        .product-item {
          height: 310px;
          position: relative;
          padding: 15px;
          background: #fff;
          border-right: 1px solid ${theme.body.someBorder};
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          p {
            margin-top: 10px;
          }
          img {
            width: 140px;
            height: 140px;
            object-fit: cover;
          }
          div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
              font-size: 20px;
            }
            button {
              text-transform: uppercase;
            }
          }
          svg {
            position: absolute;
            top: 15px;
            right: 15px;
          }
          .price-and-add-basket {
            display: flex;
            flex-direction: column;
            p {
              margin: 10px 0;
            }
          }
        }
        .information {
          width: 100%;
          border-right: 1px solid ${theme.body.someBorder};

          & > div {
            & > * {
              text-indent: 10px;
            }
            h3 {
              color: ${theme.body.primaryColor};
              padding: 10px 0;
              color: transparent;
              border-bottom: 1px solid ${theme.body.someBorder};
            }
            p {
              padding: 5px 0;
              border-bottom: 1px solid ${theme.body.someBorder};
            }
          }
        }
      }
    }
  }
  .bottom-section {
    .titles {
    }
    .values {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

export { CompareContainer };
