import styled from "styled-components";
import theme from "styles/theme";

const CompareContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;

  grid-template-columns: 400px repeat(
      ${({ productCounts }) => productCounts},
      minmax(1fr, 400px)
    );

  & > div {
    & > * {
      margin: 7px 0;
    }
    &:nth-of-type(1) {
      width: 400px;
      padding: 15px;
      border: 1px solid ${theme.body.someBorder};

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
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

export { CompareContainer };
