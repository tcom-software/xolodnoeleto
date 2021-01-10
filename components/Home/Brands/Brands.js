import theme from "styles/theme";
import Item from "./Item";
import { GlobalSection } from "@famous";
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
            return <Item key={i} src={src} />;
          })}
        </div>
      </BrandsContainer>
    </GlobalSection>
  );
};

export default Brands;
