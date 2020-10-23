import styled from "styled-components";
import theme from "styles/theme";

const FiltersContainer = styled.div`
  background: #fff;

  & > div {
    padding: 15px;
  }

  .between {
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

    .show_hide_content {
      &__from-to-and {
        width: 100%;
        display: flex;
        justify-content: space-between;

        input {
          width: 45%;
          padding: 5px 10px;
          border: 1px solid ${theme.body.someBorder};
        }
      }
      &__between-new-style {
      }
    }
  }
`;

export { FiltersContainer };
