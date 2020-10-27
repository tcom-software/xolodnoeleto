import Link from "next/link";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import { TitleNavigationContainer } from "./styles";

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
        <div className="nav">
          <Link href="/">Главная</Link> / <span> {currentPage} </span>
        </div>
        <h2 className="title">{title}</h2>
      </TitleNavigationContainer>
    </GlobalSection>
  );
};

export default TitleNavigation;
