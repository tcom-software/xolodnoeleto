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

  & > tbody > tr > td {
    text-align: center;
    & > div {
      width: max-content;
      text-align: left;
      margin: 0 auto;
    }
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
`;

const AboutOrder = styled.div``;
const Tr = styled.tr`
  height: 100px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export { GridSection, Container, Table, Ul, AboutOrder, Tr };
