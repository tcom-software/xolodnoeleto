import { GlobalSection } from "@atoms";
import theme from "../../styles/theme";
import { Container, Brand, Title, BrandsList } from "./styles";
import Image from "../atoms/Image";

const Brands = ({ brands }) => {
  return (
    <GlobalSection
      isMobile={true}
      isWeb={true}
      webBackground={theme.body.background}
      webPadding={"0 0 70px 0"}
    >
      <Container>
        <Title>Бренды</Title>
        <BrandsList>
          {brands.map(({ src }, i) => {
            return (
              <Brand key={i}>
                <Image
                  simpleWeb={src}
                  simpleMobile={src}
                  webpWeb={""}
                  webpMobile={""}
                />
              </Brand>
            );
          })}
        </BrandsList>
      </Container>
    </GlobalSection>
  );
};

export default Brands;
