import styled from "styled-components";
import theme from "styles/theme";

const MultipleSelectionCaseContainer = styled.div`
  .each-value {
    display: flex;
    align-items: center;
    margin: 10px 0px;
    cursor: pointer;
    justify-content: flex-start;
    &.hide {
      display: none;
    }
    .value {
      margin-left: 10px;
    }
  }
  .show-more-filters-each {
    cursor: pointer;
    color: ${theme.body.primaryColor};
  }
`;

export { MultipleSelectionCaseContainer };
