import theme from "styles/theme";
import Item from "./components/Item";
import Link from "next/link";
import { GlobalSection } from "@famous";
import { BrandsContainer } from "./styles";

const Brands = ({ brandsLandingPage }) => {
  return (
    <GlobalSection
      isMobile={true}
      isWeb={true}
      webPadding={"0 0 70px 0"}
      webBackground={theme.body.background}
    >
      <BrandsContainer>
        <Link href="/brands">
          <a>
            <h3>
              <img src="/images/icons/link.png" alt="link" className="title-link" />
              Бренды
            </h3>
          </a>
        </Link>
        <div className="brands-list">
          {brandsLandingPage?.brands &&
            brandsLandingPage.brands.map(({ id, brand, brand_logo }) => {
              return <Item key={id} id={id} name={brand} src={brand_logo} />;
            })}
        </div>
      </BrandsContainer>
    </GlobalSection>
  );
};

export default Brands;
