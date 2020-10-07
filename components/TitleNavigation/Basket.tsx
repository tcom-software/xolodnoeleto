import { GlobalSection } from "@atoms";
import theme from "styles/theme";
import { Container } from "./styles";

const Basket = ({ stepState }) => {
  console.log(stepState, "----");
  return (
    <GlobalSection
      isMobile={true}
      isWeb={true}
      webBackground={theme.body.background}
    >
      <Container>eeeeeeeeeee</Container>
    </GlobalSection>
  );
};

export default Basket;
