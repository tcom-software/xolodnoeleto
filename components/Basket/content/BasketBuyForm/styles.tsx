import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > form {
    & > div {
      &:last-of-type {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

const Title = styled.h2`
  @media (max-width: ${theme.mobileMedia.size}) {
    margin: 0;
  }
`;

const Nav = styled.nav`
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

export { Container, Title, Nav };
