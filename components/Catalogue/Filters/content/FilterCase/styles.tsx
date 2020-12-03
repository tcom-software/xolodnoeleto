import styled, { css } from "styled-components";
import theme from "styles/theme";

const FilterCaseContainer = styled.div`
  .item-container {
    border-bottom: 1px solid ${theme.body.someBorder};
    .only-title-section {
      position: relative;
      display: flex;
      padding: 18px 12px;
      align-items: center;
      justify-content: space-between;

      .border-left-side {
        position: absolute;
        left: -10px;
        top: 18px;
        width: 2px;
        height: 20px;
        background: #898989;
      }
      .arrow-svg {
      }
    }
    .selection-container {
      padding: 0px 10px 10px 10px;

      overflow: hidden;

      &.show {
        display: block;
      }
      &.hide {
        display: none;
      }
    }
    &.show {
      display: block;
    }
    &.hide {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .item-container {
      .only-title-section {
        cursor: pointer;
        padding: 6px 0px;
        h3 {
          font-size: 16px;
          font-width: 700;
        }
        .border-left-side {
          display: none;
        }
      }
    }
  }
`;

export { FilterCaseContainer };
