import styled from "styled-components";
import theme from "styles/theme";

const FiltersContainer = styled.div`
  background: #fff;

  & > div {
    padding: 15px;
  }

  .between,
  .multiple-cases {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${theme.body.someBorder};

    .title {
      position: relative;
      margin-bottom: 18px;
      display: flex;
      justify-content: space-between;

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

        input {
          width: 45%;
          padding: 5px 10px;
          border: 1px solid ${theme.body.someBorder};
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
    .title {
    }
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
    }
  }
`;

export { FiltersContainer };
