import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  & > div {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 3fr 2fr 2fr 2fr 2fr 2fr;
  }
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

const Title = styled.h2``;

const Nav = styled.nav``;

export { Container, Title, Nav };
