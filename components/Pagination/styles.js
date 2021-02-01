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

      cursor: pointer;
      margin: 5px;
      list-style: none;
      text-align: center;
      border: 1px solid ${theme.body.someBorder};

      &:last-of-type {
        width: auto;
        height: auto;
        border: none;
      }
    }
    .rc-pagination-next,
    .rc-pagination-prev {
      width: max-content;
      border: none;
    }
    .rc-pagination-item-active {
      background: ${theme.body.primaryColor};
      a {
        color: white;
      }
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 20px 0px;

      li {
        height: 30px !important;
        width: 30px !important;
        background: #ffffff;
        a {
          font-size: 11px;
        }
        &.selected {
          background: #24a2d4 !important;
        }
      }
    }
  }
`;

export { PaginationContainer };
