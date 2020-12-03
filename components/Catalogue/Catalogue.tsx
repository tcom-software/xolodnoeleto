import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import { useRouter } from "next/router";
import Pagination from "../Pagination";
import ProductList from "../ProductsList";
import { CatalogueContainer } from "./styles";
import ProductGridView from "../ProductGridView";
import { Loading } from "@famous";

const Catalogue = ({
  total,
  products,
  isMobile,
  productsLoading,
  getCatalogueProducts,
  getCatalogueProductLoadingTrigger,
}) => {
  const router = useRouter();
  const { catalogueId } = router.query;
  const [currentPage, setCurrentPage] = useState(total ? total : 1);

  useEffect(() => {
    if (catalogueId) {
      getCatalogueProductLoadingTrigger(true);
      getCatalogueProducts(catalogueId, currentPage);
    }
  }, [catalogueId, currentPage]);

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

export default Catalogue;
