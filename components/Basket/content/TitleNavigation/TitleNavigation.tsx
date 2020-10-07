import { GlobalSection } from "@atoms";
import Link from "next/link";
import theme from "styles/theme";
import { Container, Title, Nav } from "./styles";

const TitleNavigation = ({ title, currentPage }) => {
  return (
    <GlobalSection
      isMobile={true}
      isWeb={true}
      height="97px"
      webBackground={theme.body.background}
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
