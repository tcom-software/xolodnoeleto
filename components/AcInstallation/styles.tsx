import styled, { css } from "styled-components";
import theme from "styles/theme";

const AcInstallationContainer = styled.div`
  ${({ isBottom }) => {
    return (
      isBottom &&
      css`
        background: #fff;
        padding: 15px 30px;
        margin-bottom: 30px;
        border: 1px solid ${theme.body.someBorder};
      `
    );
  }}
  h2 {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 15px;
  }
  .level-one {
    display: grid;
    margin: 20px 0;
    grid-template-columns: 1fr;

    .top {
      display: grid;
      grid-template-columns: 1fr 1fr;
      & > div {
        h2 {
          font-size: 15px;
          margin-bottom: 15px;
          white-space: pre-wrap;
        }
      }
    }
    .bottom {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      & > p {
        white-space: pre-wrap;
      }
      .lazyload-wrapper {
        justify-self: end;
      }
    }
  }
  .bottom-side {
    & > div {
      margin: 25px 0;
    }
    .level-two {
      .information-item {
        margin: 30px 0;
        .item {
          padding: 10px 0;
          display: grid;
          grid-template-columns: 3fr 2fr;
          border-bottom: 1px solid ${theme.body.someBorder};
          &:first-of-type {
            border-bottom: none;
          }

          .item-value {
            display: grid;
            grid-template-columns: 1fr 1fr;

            p {
              font-weight: 800;

              &:nth-of-type(1) {
              }
              &:nth-of-type(2) {
                color: #ea4a4a;
              }
            }
          }
        }
      }
    }
    .level-three {
      .title {
        padding: 15px;
        border: 1px solid ${theme.body.someBorder};
        h3 {
          font-size: 16px;
          font-weight: 800;
        }
        p {
          white-space: pre-wrap;
        }
      }
      .installing-points {
        & > p {
          margin: 15px 0;
        }
        border-bottom: 1px solid ${theme.body.someBorder};
      }
    }
    .level-four {
      .middle-text {
        margin: 20px 0;
        .title {
          font-weight: 800;
          font-size: 16px;
          margin-bottom: 7px;
        }
        .description {
        }
      }
      .first-children,
      .second-children {
        line-height: 1.7;
        & > p {
          color: #5b5b5b;
        }
      }
    }
    .level-five {
      .info-with-border {
        padding: 15px;
        border: 1px solid ${theme.body.someBorder};
        white-space: pre-wrap;
      }
    }
    .level-six {
      .information-item {
        .item {
          padding: 10px 0;
          display: grid;
          grid-template-columns: 3fr 2fr;
          border-bottom: 1px solid ${theme.body.someBorder};
          &:first-of-type {
            border-bottom: none;
          }

          .item-value {
            display: grid;
            grid-template-columns: 1fr 1fr;

            p {
              font-weight: 800;

              &:nth-of-type(1) {
              }
            }
          }
        }
      }
    }
    .level-seven {
      .cases-info {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        .case-item {
          margin-top: 30px;

          .lazyload-wrapper {
            margin: 10px 0;
            padding: 20px;
            border: 1px solid ${theme.body.someBorder};
            img {
              width: 100%;
            }
          }
          .your-number {
            color: ${theme.body.primaryColor};
          }
          .title {
            font-size: 12px;
            font-weight: 800;
          }
          img {
          }
        }
      }
    }
    .level-eight {
      .apartment-renovation {
        .apartment {
          display: grid;
          grid-template-columns: 2fr 1fr;
          .lazyload-wrapper {
            justify-self: flex-end;
          }
        }
        & > p {
          margin-top: 15px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 0;

    h2 {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 15px;
    }
    .level-one {
      grid-gap: 20px;
      .top,
      .bottom {
        grid-gap: 20px;
        grid-template-columns: 1fr;
        img {
          width: 100%;
        }
      }
      .top > div > h2 {
        line-height: 1;
      }
      .bottom {
        p {
          order: 2;
        }
        .lazyload-wrapper {
          order: 1;
        }
      }
    }
    .bottom-side {
      & > div {
        margin: 0;
      }
      .level-six {
        .service {
          .information-item {
            .item {
              grid-template-columns: 3fr 1fr;
              .item-value {
                justify-items: center;
                align-items: center;
              }
            }
          }
        }
      }
      .level-seven {
        .cases-info {
          overflow: scroll;
          grid-template-columns: repeat(4, minmax(200px, 1fr)) !important;
        }
      }
      .level-eight {
        .apartment-renovation {
          .apartment {
            grid-gap: 20px;
            grid-template-columns: 1fr !important;
            .lazyload-wrapper {
              width: 100%;
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
export { AcInstallationContainer };
