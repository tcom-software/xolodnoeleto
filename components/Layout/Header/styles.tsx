import styled, { css } from "styled-components";
import theme from "styles/theme";

const TopPanel = styled.section`
  background: ${theme.content.background};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    display: none;
  }

  @media (max-width: 768px) {
    background: #fff;
    padding: 15px;

    ${({ onlyMenu }) =>
      onlyMenu &&
      css`
        padding: 0;
      `}
    ul {
      display: none;
      ${({ toggle }) => {
        if (toggle) {
          return css`
            display: block;
          `;
        }
      }}
      li > a {
        display: block;
        padding: 14px 10px;
      }
    }
    svg {
      display: block;
    }
  }
`;

const MainPanel = styled.section`
  padding: 10px 0;
  background: ${theme.body.background};
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 2fr 120px 120px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
`;

const LogoCon = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;

  & > h1 {
    text-align: left;
    display: none;
  }
  ${({ isMobile }) =>
    isMobile &&
    css`
      display: none;
    `}

  @media (max-width: 768px) {
    ${({ isMobile }) =>
      isMobile &&
      css`
        display: block;
      `}
  }
`;
const PhonesCon = styled.div`
  & > p {
    font-size: 13px;
    cursor: pointer;
    color: #03a9f4;
    text-decoration: underline;
  }
`;
const SearchCon = styled.div``;

const SearchAndFavoriteCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ customMargin }) => {
    if (customMargin) {
      return css`
        & > svg {
          margin: 6.6px 0;
        }
      `;
    }
  }}
`;

export {
  Ul,
  TopPanel,
  MainPanel,
  LogoCon,
  PhonesCon,
  SearchCon,
  SearchAndFavoriteCon,
};
