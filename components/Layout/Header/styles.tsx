import styled, { css } from "styled-components";
import theme from "styles/theme";

const Span = styled.span``;

const TopPanel = styled.section`
  background: ${theme.content.background};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    display: none;
  }
  & > ul > li:nth-child(-n + 4) {
    display: none;
  }
  & > ul > li:first-child > a {
    color: ${theme.sally.color};
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

    & > ul > li:nth-child(-n + 4) {
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

  @media (max-width: 768px) {
    ${({ isMobileHidden }) => {
      return (
        isMobileHidden &&
        css`
          opacity: 0;
          display: none !important;
        `
      );
    }}
`;

const BottomPanel = styled.section`
  & > ul {
    li {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 10px;
      }
      &:nth-child(4),
      &:nth-child(5) {
        display: none;
      }

      &:last-child {
        button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 3fr 2fr 1fr;

      li {
        display: none;

        &:first-child,
        &:nth-child(4),
        &:nth-child(5) {
          display: block;
        }

        &:first-child {
          justify-self: flex-start;
          display: flex;
          align-items: center;
        }
        &:nth-child(4) > div > div > label > div {
          display: flex;
          justify-content: flex-end;
          svg {
            padding: 0;
            margin: 0;
          }
        }
        &:nth-child(5) {
          justify-self: flex-end;
        }
      }
    }
  }
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

const SearchCon = styled.div`
  ${({ mobileDisableView }) => {
    return (
      mobileDisableView &&
      css`
        & > div > label > div {
          border: none;
          width: auto;

          input {
            display: none;
          }
        }
      `
    );
  }}

  @media(max-width: 768px) {
    position: relative;

    span {
      position: absolute;
      height: 1px;
      width: 1px;
    }
    span:nth-of-type(1) {
      transition: 0.2s all ease-in;
      transition-delay: 0.4s;
      background: transparent;
      right: 0;
      top: 50%;
    }
    span:nth-of-type(2) {
      transition: 0.2s all ease-in;
      transition-delay: 0.4s;
      background: transparent;
      right: 0;
      bottom: 50%;
    }
    span:nth-of-type(3) {
      transition: 0.2s all ease-in;
      transition-delay: 0.2s;
      background: transparent;
      right: 0;
      top: 0;
    }
    span:nth-of-type(4) {
      transition: 0.2s all ease-in;
      transition-delay: 0.2s;
      background: transparent;
      right: 0;
      bottom: 0;
    }
    span:nth-of-type(5) {
      transition: 0.2s all ease-in;
      background: transparent;
      left: 0;
      bottom: 0;
    }
    span:nth-of-type(6) {
      transition: 0.2s all ease-in;
      background: transparent;
      left: 0;
      top: 0;
    }

    ${({ mobileDisableView, isOpenSearch }) => {
      return (
        mobileDisableView &&
        isOpenSearch &&
        css`
          & > div > label > div {
            width: 100%;

            input {
              display: block;
            }
          }
          span:nth-of-type(1) {
            transition: 0.2s all ease-in;
            background: #000;
            height: 100%;
            top: 0;
          }
          span:nth-of-type(1) {
            transition: 0.2s all ease-in;
            background: #000;
            height: 100%;
            top: 0;
          }
          span:nth-of-type(2) {
            transition: 0.2s all ease-in;
            background: #000;
            height: 100%;
            bottom: 0;
          }
          span:nth-of-type(3) {
            transition: 0.2s all ease-in;
            transition-delay: 0.2s;
            background: #000;
            width: 100%;
            top: 0;
          }
          span:nth-of-type(4) {
            transition: 0.2s all ease-in;
            transition-delay: 0.2s;
            background: #000;
            width: 100%;
            bottom: 0;
          }
          span:nth-of-type(5) {
            transition: 0.2s all ease-in;
            transition-delay: 0.4s;
            background: #000;
            height: 50%;
            left: 0;
            bottom: 0;
          }
          span:nth-of-type(6) {
            transition: 0.2s all ease-in;
            transition-delay: 0.4s;
            background: #000;
            height: 50%;
            left: 0;
            top: 0;
          }
        `
      );
    }}
  }
`;

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
  Span,
  TopPanel,
  MainPanel,
  LogoCon,
  PhonesCon,
  SearchCon,
  BottomPanel,
  SearchAndFavoriteCon,
};
