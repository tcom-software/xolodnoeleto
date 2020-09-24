import styled, { css } from "styled-components";

const Nav = styled.nav`
  display: grid;
  align-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(auto-fill, auto);

  width: 60vw;
  margin: 20px auto;

  & > ul {
    width: max-content;

    &:first-child {
      display: none;
    }

    &:nth-child(2) {
      width: 80%;
      justify-self: center;
    }
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100vw;

    & > ul {
      width: 100vw;

      & > li:first-child {
        background: #efefef;

        & > svg {
          display: block;
        }
      }

      &:nth-child(2) {
        justify-self: flex-start;
        width: 100%;

        & > div {
          display: block;
        }
      }
    }
  }
`;

const UlsCon = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none !important;
    
    ${({ title, isOpen }) => {
      if (title == isOpen) {
        return css`
          display: block !important;
        `;
      }
    }}
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
  @media (max-width: 768px) {
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
  background: #efefef;

  & > div {
    display: flex;
    align-items: center;

    img {
      margin: 0px 15px;
    }
    h3 {
      margin-right: 25px;
    }
  }
`;
const Copyright = styled.div`
  color: #565656;
  padding: 10px;
  text-align: center;
`;

export { Ul, Nav, UlsCon, Section, Copyright };
