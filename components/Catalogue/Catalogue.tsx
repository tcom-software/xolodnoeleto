import React, { useState } from "react";
import Filters from "./Filters";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import { useRouter } from "next/router";
import Pagination from "../Pagination";
import ProductList from "../ProductsList";
import { CatalogueContainer } from "./styles";
import ProductGridView from "../ProductGridView";

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
        mobilePadding={"10px 20px"}
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
                  Цена: высокая-низкая
                  <option>Сортировать: по популярности</option>
                  <option>Цена: низкая-высокая</option>
                  <option>Цена: высокая-низкая</option>
                </select>
              </div>
            )}

            <div className="products">
              {Object.values(items).map((item, index) => {
                return <ProductGridView key={index} item={item} />;
              })}
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
        <ProductList
          title={"ВЫ НЕДАВНО СМОТРЕЛИ"}
          mobileType={"scroll"}
          products={items.slice(0, 3)}
        />
      </GlobalSection>
    </>
  );
};

export default Catalogue;
