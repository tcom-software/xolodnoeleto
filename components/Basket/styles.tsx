import styled, { css } from "styled-components";
import theme from "styles/theme";

const GridSection = styled.div`
  display: grid;
  grid-gap: 10px;
  align-items: flex-start;
  grid-template-columns: 2fr 1fr;

  table {
    border-spacing: 0px 10px;
    align-items: center;

    & > tbody > tr {
      height: 100px;
      background: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

      & > td {
        text-align: center;
        & > div {
          width: max-content;
          text-align: left;
          margin: 0 auto;
        }
      }

      ${({ stepState }) => {
        if (stepState === 1) {
          return css`
            &:first-of-type {
              height: max-content;
              box-shadow: unset;
              background: none;
            }
          `;
        }
      }}
    }

    @media (max-width: 1200px) {
      order: 1;

      & > tbody > tr {
        height: 125px;
        background: #fff;
        -webkit-box-shadow: 0px 0px 0px 0.5px rgba(216, 216, 216, 0.75);
        -moz-box-shadow: 0px 0px 0px 0.5px rgba(216, 216, 216, 0.75);
        box-shadow: 0px 0px 0px 0.5px rgba(216, 216, 216, 0.75);

        & > td {
          & > div {
          }
        }

        &:first-of-type {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div`
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

const AboutOrder = styled.div``;

export { GridSection, Container, AboutOrder };
