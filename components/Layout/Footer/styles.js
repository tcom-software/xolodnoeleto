import styled, { css } from "styled-components";
import theme from "styles/theme";

const Nav = styled.nav`
  display: grid;
  align-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(auto-fill, auto);

  margin: 15px auto;

  & > ul {
    width: max-content;

    &:nth-child(2) {
      width: 80%;
      justify-self: center;
    }
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    grid-template-columns: 1fr;
    width: 100vw;
    margin-bottom: 0px;

    & > ul {
      width: 100vw;

      &:first-child {
        display: none;
      }
      &:last-child {
        margin-top: 6px;
      }
      &:nth-child(2) {
        justify-self: flex-start;
        width: 100%;

        & > div {
          display: block;
        }
      }

      & > li:first-child {
        background: #efefef;

        & > svg {
          display: block;
        }
      }
    }
  }
`;

const UlsCon = styled.ul`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${theme.mobileMedia.size}) {
    & > ul {
      transition: all 0.3s ease-in;
      position: relative;
      opacity: 0;
      z-index: -1;
      max-height: 0;
    }

    ${({ title, isOpen }) => {
      if (title == isOpen) {
        return css`
          & > ul {
            transition: all 0.3s ease-in;
            width: 100%;
            opacity: 1;
            z-index: 1;
            max-height: 2000px;
          }
        `;
      }
    }}
  }
`;

const Ul = styled.ul`
  list-style: none;

  & > li {
    & > h2 {
      margin-bottom: 15px;
    }
    & > svg {
      display: none;
    }
  }
  @media (max-width: ${theme.mobileMedia.size}) {
    & > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      & > h2 {
        margin-bottom: 0;
      }
      & > svg {
        display: none;
      }
    }
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;

  & > div {
    display: flex;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin: 0px 15px;
      }
    }

    h3 {
      margin-right: 25px;
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    flex-direction: column-reverse;
    padding: 0;

    & > div:last-child {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      background: #f6f6f6;
      padding: 28px 15px;

      & > div {
        margin-top: 20px;

        & > img:first-child {
          margin-left: 0;
        }
      }
    }
    & > div:first-child {
      width: 100%;
      justify-content: space-between;
      padding: 12.5px 15px;
    }
  }
`;

const Copyright = styled.div`
  color: #565656;
  padding: 10px;
  text-align: center;
`;

const FooterContainer = styled.footer`
  background: #f6f6f6;
  border: 1px solid #e5e5e5;
`;

export { Ul, Nav, UlsCon, Section, Copyright, FooterContainer };
