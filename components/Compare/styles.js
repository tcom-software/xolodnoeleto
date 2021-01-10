import styled, { css } from "styled-components";
import theme from "styles/theme";

const CompareContainer = styled.div`
  border: 1px solid ${theme.body.someBorder};

  .top-section {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 350px 1fr;
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
      grid-auto-flow: column;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

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
            width: min-content;
            button {
              width: 156px;
              height: 45px;
            }
            p {
              width: 100%;
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
              color: transparent;
              white-space: nowrap;
              padding: 10px 0;
              border-bottom: 1px solid ${theme.body.someBorder};
            }
            p {
              padding: 5px 6px;
              border-bottom: 1px solid ${theme.body.someBorder};
              .mobile-element {
                display: none;
              }
            }
          }
        }
      }
    }
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
    .values {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    border: none;
    .top-section {
      grid-template-columns: 1fr;
      .add-product-con {
        padding: 10px;
        border-bottom: 1px solid ${theme.body.someBorder};
        .only-titles {
          display: none;
        }
        .left-static-height {
          padding: 0;
          .added-products-con {
            .item {
              border: 1px solid ${theme.body.someBorder};
              p {
                margin-left: 10px;
                border-left: 0.5px solid ${theme.body.someBorder};
              }
            }
          }
        }
      }
      .products-con {
        overflow-x: scroll;

        .product-container {
          .product-item {
            border-right: 0;
            .price-and-add-basket {
              width: 100%;
              button {
                color: white;
                background: ${theme.body.primaryColor};
                width: 100%;
              }
            }
          }
          .information {
            background: ${theme.body.secondBackground} !important;
            border-right: 0;
            div {
              h3 {
                position: relative;
                color: transparent;
              }
              p {
                .mobile-element {
                  display: block;
                  color: transparent;
                  white-space: nowrap;
                  position: relative;
                  margin-bottom: 12px;
                  text-indent: 0px;
                  font-weight: bold;
                  font-size: 15px;
                }
              }
            }
          }
          &:nth-of-type(1) {
            .information {
              div {
                h3 {
                  color: ${theme.body.primaryColor};
                }
                p {
                  .mobile-element {
                    display: block;
                    color: #111;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { CompareContainer };
