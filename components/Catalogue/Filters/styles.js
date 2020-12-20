import styled, { css } from "styled-components";
import theme from "styles/theme";

const FiltersContainer = styled.div`
  padding: 10px;
  background: #fff;
  height: max-content;

  & > form {
    & > div {
      // button layout
      .filters-info-container {
        .mobile-trigger-button-container {
          display: none;
          position: relative;
          padding: 10px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border: 1px solid ${theme.body.someBorder};

          svg {
            position: absolute;
            left: 10px;
          }
          &.show {
            display: flex;
          }
          &.hide {
            display: none;
          }
        }
        .close-filters-mobile {
          display: none;
          p {
            color: #c30707;
          }
        }
        .filters-section {
          display: block;
        }
        @media (max-width: 768px) {
          .close-filters-mobile {
            padding: 15px 0;
            display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${theme.body.someBorder};
          }
          .filters-section {
            display: none;
            display: ${({ isOpen }) => (isOpen ? "block" : "none")};
          }
          .mobile-trigger-button-container {
            display: flex;
            display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
          }
        }
      }
    }
  }
`;

export { FiltersContainer };
