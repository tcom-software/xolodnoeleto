import styled, { css } from "styled-components";
import theme from "styles/theme";

const CompareContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;

  grid-template-columns: 400px repeat(
      ${({ productCounts }) => productCounts},
      minmax(1fr, 400px)
    );

  & > div {
    &:nth-of-type(1) {
      width: 400px;
      padding: 15px;
      border: 1px solid ${theme.body.someBorder};
      & > div {
        margin: 7px 0;
      }
      & > div:last-of-type > div {
        background: #fff;
        padding: 7px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          margin-left: 10px;
        }
        img {
          width: 57px;
          height: 57px;
          margin-right: 17px;
          box-sizing: revert;
          padding: 0px 16px 0px 0;
          border-right: 1px solid ${theme.body.someBorder};
        }
      }
    }
    &:nth-of-type(2) {
      display: grid;
      grid-template-columns: repeat(
        ${({ productCounts }) => productCounts},
        minmax(200px, 400px)
      );

      & > div {
        padding: 15px;
        position: relative;
        background: #fff;
        border-right: 1px solid ${theme.body.someBorder};
        & > p {
          margin-top: 10px;
        }
        & > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 48px 0 25px;
          p {
            font-size: 20px;
          }
          button {
            text-transform: uppercase;
          }
        }
        & > svg {
          position: absolute;
          top: 15px;
          right: 15px;
        }
      }
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    grid-template-columns: 1fr;

    & > div {
      &:nth-of-type(1) {
        width: 100%;
        padding: 0;
        border: none;
        border-bottom: 1px solid ${theme.body.someBorder};

        button {
          width: 100%;
        }
      }
      &:nth-of-type(2) {
        display: grid;
        grid-template-columns: repeat(
          ${({ productCounts }) => productCounts},
          1fr
        );

        ${({ productCounts }) => {
          if (productCounts >= 3) {
            return css`
              overflow: scroll;
            `;
          }
        }},

        & > div {
          & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            button {
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
`;

export { CompareContainer };
