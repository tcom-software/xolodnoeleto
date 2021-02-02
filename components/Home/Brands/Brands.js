import theme from "styles/theme";
import Item from "./Item";
import Link from "next/link";
import { GlobalSection } from "@famous";
import { BrandsContainer } from "./styles";

const Brands = ({ brandsLandingPage: { brands } }) => {
  return (
    <GlobalSection
      isMobile={true}
      isWeb={true}
      webBackground={theme.body.background}
      webPadding={"0 0 70px 0"}
    >
      <BrandsContainer>
        <Link href="/brands">
          <a>
            <h3>Бренды</h3>
          </a>
        </Link>
        <div className="brands-list">
          {brands &&
            brands.map(({ id, brand, brand_logo }) => {
              return <Item key={id} id={id} name={brand} src={brand_logo} />;
            })}
        </div>
      </BrandsContainer>
    </GlobalSection>
  );
};

export default Brands;
