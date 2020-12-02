import styled from "styled-components";
import theme from "styles/theme";

const BetweenSelectionCaseContainer = styled.div`
  .show-hide-content {
    &__from-to-and {
      display: flex;
      margin: 10px 0;
      justify-content: space-between;

      & > div {
        width: 47%;
        display: flex;
        padding: 7px 10px;
        justify-content: space-between;
        border: 1px solid ${theme.body.someBorder};

        input {
          text-indent: 10px;
          width: 100%;
        }
        span {
        }
      }
    }
  }
`;

export { BetweenSelectionCaseContainer };
