import styled, { css } from "styled-components";
import theme from "styles/theme";

const FavoriteContainer = styled.div`
  & > div {
    .product-image-table-and-mobile-case {
      object-fit: cover;
    }
    table {
      width: 100%;
      border-spacing: 0px 10px;
      align-items: center;

      & > tbody > tr {
        height: 100px;
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        &:nth-of-type(1) {
          height: auto;
          box-shadow: none;
          background: transparent;
        }

        & > td {
          position: relative;
          text-align: center;
          &:nth-of-type(1) {
            width: 50px;
          }
          & > span {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            height: 60%;
            margin: auto;
            border-right: 0.5px solid ${theme.body.someBorder};
          }
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

          &:first-of-type {
            display: none;
          }
        }
      }
    }
    & > div {
      margin: 10px 0;
      border: 1px solid ${theme.body.someBorder};

      &:last-of-type {
        display: none;
      }
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

export { FavoriteContainer };
