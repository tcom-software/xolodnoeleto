import styled from "styled-components";
import theme from "styles/theme";

const SearchContainer = styled.div`
  position: relative;

  .result-panel {
    position: absolute;
    background: white;
    left: 0;
    top: 100%;
    width: 100%;
    z-index: 999;
    height: min-content;
    max-height: 200px;
    overflow-y: scroll;
    padding: ${({ searchLength }) => (searchLength > 0 ? "15px" : "0")};
    border: ${({ searchLength }) =>
      searchLength > 0 ? `1px solid ${theme.body.someBorder}` : "none"};
    display: ${({ searchLength }) => (searchLength > 0 ? `block` : "none")};
    border-top: 0px;

    .item-container {
      cursor: pointer;
      padding: 10px;
      border-bottom: 1px solid ${theme.body.someBorder};

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    h2.title {
      border-bottom: 1px solid #d8d8d8;
      padding-bottom: 10px;
    }

    .active {
      position: relative;
      
      background: ${theme.body.secondBackground};

      span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        font-size: 12px;
        margin: auto auto;
        text-align: center;
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: static;
  }
`;

export { SearchContainer };
