import styled from "styled-components";
import theme from "styles/theme";

const PaginationContainer = styled.div`
  margin: 30px 0px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0px;

    li {
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 5px;
      list-style: none;
      text-align: center;
      border: 1px solid ${theme.body.someBorder};

      &.selected {
        background: ${theme.body.primaryColor};
        color: white !important;
        a {
          color: white;
        }
      }
      a {
        cursor: pointer;
        display: block;
        padding: 4px 9px;
        &:focus {
          outline: none !important;
          display: none !important;
        }
        .arrow-icons {
          font-weight: bold;
          text-decoration: underline;
        }
      }
      &:first-of-type {
        width: auto;
        height: auto;
        border: none;
        box-shadow: unset;
      }
      &:last-of-type {
        width: auto;
        height: auto;
        border: none;
        box-shadow: unset;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 20px 0px;

      li {
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

        &.selected {
          background: #24a2d4 !important;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;

export { PaginationContainer };
