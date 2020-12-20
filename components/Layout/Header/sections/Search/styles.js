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
    padding: 15px;
    border: 1px solid ${theme.body.someBorder};
    a {
      .item-container {
        padding: 10px 0;
        border-bottom: 1px solid ${theme.body.someBorder};

        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
`;

export { SearchContainer };
