import { GlobalSection } from "@atoms";
import Link from "next/link";
import theme from "styles/theme";
import { TitleNavigationContainer, Title, Nav } from "./styles";

const TitleNavigation = ({ title, currentPage }) => {
  return (
    <GlobalSection
      isMobile={true}
      isWeb={true}
      height="97px"
      heightMobile="max-content"
      webBackground={theme.body.background}
    >
      <TitleNavigationContainer>
        <Nav>
          <Link href="/">Главная</Link> / <span> {currentPage} </span>
        </Nav>
        <Title>{title}</Title>
      </TitleNavigationContainer>
    </GlobalSection>
  );
};

export default TitleNavigation;
