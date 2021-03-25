import styled, { css } from "styled-components";
import theme from "styles/theme";

const CompareContainer = styled.div`
  border: 1px solid ${theme.body.someBorder};

  .top-section {
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 350px 1fr;
    height: max-content;

    .add-product-con {
      .left-static-height {
        height: 340px;
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
        .wrapper-for-mobile-search {
          position: relative;
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
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
          height: max-content;
          min-height: 340px;
          position: relative;
          padding: 15px;
          background: #fff;
          border-right: 1px solid ${theme.body.someBorder};
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .p-group > p {
            margin-top: 0px;
          }
          img {
            width: 140px;
            height: 140px;
            object-fit: cover;
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
              font-size: 20px;
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
              max-height: 130px;

              border: 1px solid ${theme.body.someBorder};
              p {
                margin-left: 10px;
              }
            }
          }
        }
      }
      .products-con {
        grid-template-columns:
          ${({ ComparePL }) => {
            if (ComparePL === 2) {
              return `minmax(160px, 1fr) minmax(160px, 1fr);`;
            } else {
              return `minmax(160px, 1fr);`;
            }
          }}
          .product-container {
          .product-item {
            border-right: 0;
            min-height: 400px;
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
            overflow: hidden;
            div {
              h3 {
                position: relative;
                color: transparent;
              }
              p {
                position: relative;
                .mobile-element {
                  display: block;
                  color: transparent;
                  white-space: nowrap;
                  margin-bottom: 26px;
                  text-indent: 0px;
                  font-weight: bold;
                  font-size: 15px;
                }
              }
            }
          }
          &:nth-of-type(1) {
            .information {
              overflow: unset;
              position: relative;
              z-index: 1;
              width: 101%;
              div {
                h3 {
                  color: ${theme.body.primaryColor};
                  position: relative;
                  width: 97vw;
                  margin: 0 auto;
                  text-align: center;
                }
                p {
                  .mobile-element {
                    display: block;
                    color: #111;
                    width: 97vw;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
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
