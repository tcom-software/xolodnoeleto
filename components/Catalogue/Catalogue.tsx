import React from "react";
import Filters from "./Filters";
import theme from "styles/theme";
import Products from "./Products";
import Pagination from "../Pagination";
import { GlobalSection } from "@famous";
import ProductList from "../ProductsList";
import { CatalogueContainer } from "./styles";
import { useRouter } from "next/router";

const Catalogue = ({ products }) => {
  const router = useRouter();

  return (
    <>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        mobilePadding={"10px 20px"}
      >
        <CatalogueContainer>
          <Filters />
          <Products />
        </CatalogueContainer>
        <Pagination page={router.query.page} />
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding={"35px 0px"}
      >
        <ProductList
          title={"ВЫ НЕДАВНО СМОТРЕЛИ"}
          mobileType={"scroll"}
          products={products.slice(0, 3)}
        />
      </GlobalSection>
    </>
  );
};

function areEqual(prevProps, nextProps) {
  /**
   *  возвращает true, если nextProps рендерит
   *  тот же результат что и prevProps,
   *  иначе возвращает false
   * * * * */

  if (
    JSON.stringify(prevProps.selectedData) ===
      JSON.stringify(nextProps.selectedData) &&
    JSON.stringify(prevProps.products) === JSON.stringify(nextProps.products)
  ) {
    return true;
  } else {
    return false;
  }
}

export default React.memo(Catalogue, areEqual);
