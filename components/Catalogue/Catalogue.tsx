import React, { useState } from "react";
import { CatalogueContainer } from "./styles";
import { useRouter } from "next/router";
import { GlobalSection } from "@atoms";
import Filters from "./Filters";
import theme from "styles/theme";
import ProductGridView from "../ProductGridView";
import ProductList from "../ProductsList";
import Pagination from "../Pagination";

const Catalogue = ({ products, isMobile }) => {
  const router = useRouter();
  const [paginationNumber, setPaginationNumber] = useState(0);
  const { type } = router.query;

  const items = products.slice(paginationNumber, 9);
  return (
    <>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
      >
        <CatalogueContainer>
          <Filters />
          <div className="catalogue">
            {isMobile ? (
              <h1>ХИТЫ ПРОДАЖ</h1>
            ) : (
              <div className="title-section">
                <p>{Object.values(products).length} Товаров</p>
                <select className="sort-by">
                  <option>Сортировать: по популярности</option>
                  <option>Сортировать: по минимальной цене</option>
                  <option>Сортировать: по максимальной цене</option>
                </select>
              </div>
            )}

            <div className="products">
              {Object.values(items).map(
                ({ id, src, title, price, vendorCode, selectedStarsCount }) => {
                  return (
                    <ProductGridView
                      key={id}
                      id={id}
                      src={src}
                      title={title}
                      price={price}
                      vendorCode={vendorCode}
                      selectedStarsCount={selectedStarsCount}
                    />
                  );
                }
              )}
            </div>
          </div>
        </CatalogueContainer>
        <Pagination />
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding={"35px 0px"}
      >
        <ProductList title={"ВЫ НЕДАВНО СМОТРЕЛИ"} mobileType={"scroll"}>
          {Object.values(items.slice(0, 3)).map(
            ({ id, src, title, price, vendorCode, selectedStarsCount }) => {
              return (
                <ProductGridView
                  key={id}
                  id={id}
                  src={src}
                  title={title}
                  price={price}
                  vendorCode={vendorCode}
                  selectedStarsCount={selectedStarsCount}
                />
              );
            }
          )}
        </ProductList>
      </GlobalSection>
    </>
  );
};

export default Catalogue;
