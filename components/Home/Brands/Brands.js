import theme from "styles/theme";
import { Image, GlobalSection } from "@famous";
import { BrandsContainer } from "./styles";

const Brands = ({ brands }) => {
  return (
    <GlobalSection
      isMobile={true}
      isWeb={true}
      webBackground={theme.body.background}
      webPadding={"0 0 70px 0"}
    >
      <BrandsContainer>
        <h3>Бренды</h3>
        <div className="brands-list">
          {brands.map(({ src }, i) => {
            return (
              <div className="brand" key={i}>
                <Image simpleWeb={src} webpWeb={""} />
              </div>
            );
          })}
        </div>
      </BrandsContainer>
    </GlobalSection>
  );
};

export default Brands;
