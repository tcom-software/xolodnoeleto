import styled, { css } from "styled-components";
import theme from "styles/theme";

const Span = styled.span``;

const TopPanel = styled.section`
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
  @media (max-width: ${theme.mobileMedia.size}) {
    ${({ onlyMenu }) =>
      onlyMenu &&
      css`
        padding: 0;
      `}

    ul {
      display: none;
      ${({ whatMenu }) => {
        if (whatMenu === "navigation") {
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
  background: ${theme.body.background};
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 2fr 120px 120px;

  @media (max-width: ${theme.mobileMedia.size}) {
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
    & > li {
      position: relative;
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

      &:first-child {
        ${({ whatMenu }) => {
          return (
            whatMenu == "catalog" &&
            css`
              color: ${theme.body.primaryColor};
            `
          );
        }}
        &:nth-child(6) {
          button {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      &:nth-child(7) {
        display: none;
      }
    }
    @media (max-width: ${theme.mobileMedia.size}) {
      display: grid;
      grid-template-columns: 3fr 2fr 1fr;

      ${({ whatMenu }) => {
        return (
          whatMenu == "catalog" &&
          css`
            grid-template-columns: 1fr 1fr;
          `
        );
      }}

      & > li {
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
          background: ${theme.body.secondBackground};
          input {
            background: ${theme.body.secondBackground};
          }
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

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(6) {
          display: none;
        }
        ${({ whatMenu }) => {
          return (
            whatMenu == "catalog" &&
            css`
              &:nth-child(4),
              &:nth-child(5) {
                display: none;
              }
              &:nth-child(7) {
                display: flex;
                justify-self: flex-end;
              }
            `
          );
        }}
      }
    }
  }
`;

const CatalogUl = styled.ul`
  position: absolute;
  top: 140%;
  left: 0;
  z-index: 2;
  padding: 15px;
  width: 80vw;
  background: #fff;
  display: none;
  flex-wrap: wrap;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-top: 4px solid ${theme.body.primaryColor};

  li {
    width: 33%;

    a {
      padding: 10px 0;
      display: block;
    }
  }

  svg {
    position: absolute;
    top: -16px;
    left: 70px;
  }
  ${({ whatMenu }) => {
    return (
      whatMenu === "catalog" &&
      css`
        display: flex;
      `
    );
  }}

  @media (max-width: ${theme.mobileMedia.size}) {
    position: absolute;
    top: 140%;
    background: #fff;
    transition: border-top 0.3s 0.3s ease-in, max-height 0.3s ease-in;
    border-top: 0px solid ${theme.body.primaryColor};
    width: 100vw;
    left: -8px;
    max-height: 0;
    overflow: hidden;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    border-top: 0 solid ${theme.body.primaryColor};

    & > li {
      width: 100%;
      a {
        padding: 12px;
        display: block;
      }
    }

    svg {
      display: none;
    }

    ${({ whatMenu }) => {
      return (
        whatMenu === "catalog" &&
        css`
          transition: 0.3s border-top ease-in, max-height 0.4s 0.3s ease-in;
          border-top: 4px solid ${theme.body.primaryColor};
          max-height: 3000px;
        `
      );
    }}
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  @media (max-width: ${theme.mobileMedia.size}) {
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
    color: ${theme.body.primaryColor};
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
            transition: 0.2s all ease-in;
            transition-delay: 0.2s;
            width: 0;
          }
        }
      `
    );
  }}

  @media(max-width: ${theme.mobileMedia.size}) {
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
              transition: 0.2s all ease-in;
              transition-delay: 0.2s;
              width: 100%;
            }
          }
          span:nth-of-type(1) {
            transition: 0.2s all ease-in;
            background: #d8d8d8;
            height: 100%;
            top: 0;
          }
          span:nth-of-type(1) {
            transition: 0.2s all ease-in;
            background: #d8d8d8;
            height: 100%;
            top: 0;
          }
          span:nth-of-type(2) {
            transition: 0.2s all ease-in;
            background: #d8d8d8;
            height: 100%;
            bottom: 0;
          }
          span:nth-of-type(3) {
            transition: 0.2s all ease-in;
            transition-delay: 0.2s;
            background: #d8d8d8;
            width: 100%;
            top: 0;
          }
          span:nth-of-type(4) {
            transition: 0.2s all ease-in;
            transition-delay: 0.2s;
            background: #d8d8d8;
            width: 100%;
            bottom: 0;
          }
          span:nth-of-type(5) {
            transition: 0.2s all ease-in;
            transition-delay: 0.4s;
            background: #d8d8d8;
            height: 50%;
            left: 0;
            bottom: 0;
          }
          span:nth-of-type(6) {
            transition: 0.2s all ease-in;
            transition-delay: 0.4s;
            background: #d8d8d8;
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

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: #fff;

  & > div.lazyload-wrapper > picture > img {
    @media (max-width: 900px) {
      width: 85vw;
      height: intrinsic;
    }
  }

  & > svg {
    position: absolute;
    cursor: pointer;
    top: 40%;
    right: 5%;

    @media (max-width: ${theme.mobileMedia.size}) {
      width: 2vw;
      height: 2vw;
    }
  }
`;

export {
  Ul,
  Span,
  LogoCon,
  TopPanel,
  CatalogUl,
  MainPanel,
  PhonesCon,
  SearchCon,
  BottomPanel,
  BannerContainer,
  SearchAndFavoriteCon,
};
