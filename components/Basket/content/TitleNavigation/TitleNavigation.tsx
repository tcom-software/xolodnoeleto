import { GlobalSection } from "@atoms";
import Link from "next/link";
import theme from "styles/theme";
import { Container, Title, Nav } from "./styles";

const TitleNavigation = ({ title, currentPage }) => {
  return (
    <GlobalSection
      isMobile={true}
      isWeb={true}
      webBackground={theme.body.background}
      height="97px"
    >
      <Container>
        <Nav>
          <Link href="/">Главная</Link> / <span> {currentPage} </span>
        </Nav>
        <Title>{title}</Title>
      </Container>
    </GlobalSection>
  );
};

export default TitleNavigation;
