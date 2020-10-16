import styled, { css } from "styled-components";
import theme from "styles/theme";

const DeliveryContainer = styled.div`
  display: grid !important;
  grid-template-columns: 1fr;

  & > div:first-of-type {
    display: grid !important;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 30px;

    & > div:first-child {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    }

    & > div:last-child {
      padding: 15px;
      width: 100%;
      border: 1px solid ${theme.body.someBorder};

      & > p {
        &:first-of-type {
          color: ${theme.body.primaryColor};
        }
        font-size: 12px;
      }
      & > * {
        margin: 5px 0;
      }
    }

    @media (max-width: 768px) {
      & > div:first-child {
        display: grid;
        grid-template-columns: 1fr;
      }
      grid-template-columns: 1fr;
    }
  }
  & > div:last-of-type {
    display: flex;
    justify-content: space-between;
  }
`;

const DeliveryItem = styled.div`
  & > div {
    width: ${({ width }) => (width ? width : "163px")};
    height: ${({ height }) => (height ? height : "58px")};

    cursor: pointer;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: ${({ oneElem }) =>
      oneElem ? "1fr" : "50px 35px 2fr"};

    background: #ffffff;
    border: 1px solid ${theme.body.someBorder};

    & > * {
      margin: 0 5px;
    }
    & > svg > path {
      fill: #202020;
    }
    & > input {
      width: 15px;
      height: 15px;
      border: 1px solid #d8d8d8;
    }
  }

  & > h3 {
    margin-top: 6px;
    font-size: 12px;
  }

  ${({ id, selected }) => {
    return (
      id == selected &&
      css`
        & > div {
          color: ${theme.body.primaryColor};
          border: 1px solid ${theme.body.primaryColor};
          & > svg > path {
            fill: ${theme.body.primaryColor};
          }
          & > input {
          }
        }
        & > h3 {
          color: ${theme.body.primaryColor};
        }
      `
    );
  }}

  @media (max-width: ${theme.mobileMedia.size}) {
    grid-template-columns: 1fr;
    & > div {
      width: 100%;
      grid-template-columns: ${({ oneElem }) =>
        oneElem ? "1fr" : "1fr 1fr 1fr"};
    }
  }
`;

const PriceSpan = styled.span`
  font-weight: ${theme.body.fontBolder};
`;

export { DeliveryContainer, DeliveryItem, PriceSpan };
