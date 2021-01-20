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
      ${({ modalType }) => {
        if (modalType === "navigation") {
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
  grid-template-columns: 2fr 2fr 3fr 120px 120px;

  @media (max-width: 991px) {
    grid-template-columns: 2fr 2fr 2fr 120px 120px;

  }
  
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

      & > button > svg {
        margin-right: 10px;
      }
      &:nth-child(4),
      &:nth-child(5) {
        display: none;
      }

      &:first-child {
        ${({ modalType }) => {
          return (
            modalType == "catalog" &&
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
    .mobile-basket {
      position: relative;
      a {
        span {
          position: absolute;
          line-height: 1;
          right: -6px;
          top: -7px;
          padding: 3px;
          background: #e5e5e5;
          border-radius: 50%;
          color: ${theme.body.primaryColor};
        }
      }
    }

    @media (max-width: ${theme.mobileMedia.size}) {
      display: grid;
      grid-template-columns: 3fr 2fr 1fr;

      ${({ modalType }) => {
        return (
          modalType == "catalog" &&
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
        ${({ modalType }) => {
          return (
            modalType == "catalog" &&
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
  .basket-button-menu:hover {
    button {
      color: white;
      background: ${theme.body.primaryColor};
      svg {
        fill: white;
      }
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > li:first-of-type {
    svg {
      &:first-of-type {
        margin-right: 10px;
      }
      &:last-of-type {
        position: absolute;
        top: 100%;
        display: none;
        &.show-box {
          display: block;
        }
        @media (max-width: 768px) {
          display: none !important;
        }
      }
    }
  }

  & > li {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .header-search-result-container {
      position: static;
    }
  }
`;

const LogoCon = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: none;
    `}

  & > a {
    img {
      display: none;
    }
    h1 {
      display: none;
      text-align: left;
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    ${({ isMobile }) =>
      isMobile &&
      css`
        display: block;
        & > a > h1 {
          display: none;
        }
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
          background: #e5e5e5;

          input {
            transition: 0.2s all ease-in;
            transition-delay: 0.2s;
            width: 0;
            background: #e5e5e5;
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
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      position: relative;

      .compare-count,
      .favorite-count {
        position: absolute;
        font-size: 9.5px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: ${theme.body.primaryColor};
        background: #fff;
        border: 1px solid ${theme.body.primaryColor};
        right: -9px;
        top: -9px;
        text-align: center;
        line-height: 2.2;
      }
    }

    ${({ customMargin }) => {
      if (customMargin) {
        return css`
          & > div > svg {
            margin: 6.6px 0;
          }
        `;
      }
    }}
  }
`;

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: #fff;
  height: max-content;

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
    right: 0%;

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
  MainPanel,
  PhonesCon,
  SearchCon,
  BottomPanel,
  BannerContainer,
  SearchAndFavoriteCon,
};
