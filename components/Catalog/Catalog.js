import React from "react";
import Filters from "./Filters";
import theme from "styles/theme";
import Products from "./Products";
import { useRouter } from "next/router";
import ProductList from "../ProductsList";
import { CatalogContainer } from "./styles";
import Pagination from "../Pagination/index";
import { GlobalSection, SeenProductWrapper } from "@famous";

const Catalog = ({ products, total, updateSelectedDataPage, seenProducts }) => {
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
        <CatalogContainer>
          <Filters />
          <Products />
        </CatalogContainer>
        <Pagination
          total={total}
          page={router.query.page}
          callback={updateSelectedDataPage}
        />
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          webPadding={"35px 0px"}
        >
          <ProductList
            title={"ВЫ НЕДАВНО СМОТРЕЛИ"}
            mobileType={"scroll"}
            products={seenProducts}
          />
        </GlobalSection>
      </SeenProductWrapper>
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

export default React.memo(Catalog, areEqual);
