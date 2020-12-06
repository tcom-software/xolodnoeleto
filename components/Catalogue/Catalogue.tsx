import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import theme from "styles/theme";
import { Loading } from "@famous";
import Pagination from "../Pagination";
import { useRouter } from "next/router";
import { GlobalSection } from "@famous";
import ProductList from "../ProductsList";
import { CatalogueContainer } from "./styles";
import ProductGridView from "../ProductGridView";
import { createObjectFromUrl } from "@utils";

const Catalogue = ({
  total,
  products,
  isMobile,
  selectedData,
  productsLoading,
  getCatalogueProducts,
  updateSelectedDataFromUrl,
  getCatalogueProductLoadingTrigger,
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(total ? total : 1);
  const { catalogueId } = router.query;

  useEffect(() => {
    let object;

    const selectedDataLength = Object.keys(selectedData).length;
    if (selectedDataLength === 0) {
      object = createObjectFromUrl(router.query);
    } else {
      object = selectedData;
    }

    getCatalogueProductLoadingTrigger(true);
    if (selectedDataLength === 0 && Object.keys(object).length > 0) {
      updateSelectedDataFromUrl(object);
    }

    catalogueId && getCatalogueProducts(catalogueId, { ...object });
  }, [router.query]);

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
          {productsLoading ? (
            <Loading />
          ) : (
            <div className="catalogue">
              {isMobile ? (
                <h1>ХИТЫ ПРОДАЖ</h1>
              ) : (
                <div className="title-section">
                  <p>{total} Товаров</p>
                  <select className="sort-by">
                    Цена: высокая-низкая
                    <option>Сортировать: по популярности</option>
                    <option>Цена: низкая-высокая</option>
                    <option>Цена: высокая-низкая</option>
                  </select>
                </div>
              )}

              <div className="products">
                {Object.values(products).map((item, index) => {
                  return <ProductGridView key={index} item={item} />;
                })}
              </div>
            </div>
          )}
        </CatalogueContainer>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
