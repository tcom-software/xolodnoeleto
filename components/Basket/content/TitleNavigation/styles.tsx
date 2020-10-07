import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  @media (max-width: ${theme.mobileMedia.size}) {
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-top: 10px;
  font-weight: ${theme.body.fontBolder};
`;

const Nav = styled.nav`
  font-weight: 400;
  & > span {
    font-weight: 400;
    color: #a2a2a2cc;
  }
`;

export { Container, Title, Nav };
