import styled from "styled-components";
import theme from "styles/theme";

const FiltersContainer = styled.div`
  background: #fff;
  height: max-content;

  & > form {
    & > button {
      margin: 10px auto;
    }
    & > div {
      padding: 15px;
    }

    .between,
    .multiple-cases {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid ${theme.body.someBorder};

      .title {
        cursor: pointer;
        position: relative;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        p {
          width: 90%;
        }
        span {
          position: absolute;
          width: 2px;
          height: 20px;
          left: -15px;
          top: 0px;
          background: #898989;
        }
        svg {
          position: absolute;
          right: 0;
          top: 0px;
          cursor: pointer;
        }
      }
    }

    .between {
      .show-hide-content {
        &__from-to-and {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;

          & > div {
            position: relative;
            width: 45%;

            input {
              width: 100%;
              font-size: 12px;
              padding: 5px 5px 5px 23px;
              border: 1px solid ${theme.body.someBorder};
              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
            span {
              position: absolute;
              left: 4px;
              top: 6px;
              font-size: 11px;
            }
          }
        }
        &__between-new-style {
          .rc-slider {
            .rc-slider-rail {
              height: 2px !important;
              background: #898989 !important;
            }
            .rc-slider-track {
              height: 2px !important;
              background: #898989 !important;
            }
            .rc-slider-handle {
              &:active,
              &:hover {
                border: unset !important;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5) !important;
              }

              border: unset !important;
              box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.17);
            }
          }
        }
      }
    }
    .multiple-cases {
      .show-hide-content {
        .checkbox-name-container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 13px;

          p {
            margin-left: 10px;
          }
        }
        .second-view {
          display: none;
        }
        .show-more-show-less {
          cursor: pointer;
          color: ${theme.body.primaryColor};
        }
      }
    }

    .hideFilters {
      display: none;
    }
  }

  .mobile-filters-toggle {
    .container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      cursor: pointer;
      margin: 15px auto;
      padding: 14px 15px;
      border: 1px solid ${theme.body.someBorder};

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export { FiltersContainer };
