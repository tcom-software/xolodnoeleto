import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-gap: 25px;
  align-items: flex-start;
  grid-template-columns: 2fr 1fr;
`;

const Table = styled.table`
  border-spacing: 0px 10px;
  align-items: center;

  & > tbody > tr {
    height: 100px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    & > td {
      text-align: center;
      & > div {
        width: max-content;
        text-align: left;
        margin: 0 auto;
      }
    }
    &:first-of-type {
      height: max-content;
      box-shadow: unset;
    }
  }
`;

const AboutOrder = styled.div``;

export { GridSection, Container, Table, AboutOrder };
