import React, { useEffect } from "react";
import { Loading } from "@famous";
import { useRouter } from "next/router";
import { createObjectFromUrl } from "@utils";
import ProductGridView from "../../ProductGridView/index";

const Products = ({
  productsLoading,
  isMobile,
  total,
  products,
  selectedData,
  getCatalogProducts,
  updateSelectedDataFromUrl,
  updateSelectedOrderBy,
  getCatalogProductLoadingTrigger,
}) => {
  const router = useRouter();

  const { catalogId } = router.query;

  useEffect(() => {
    let object;

    const selectedDataLength = Object.keys(selectedData).length;

    if (selectedDataLength === 0) {
      object = createObjectFromUrl(router.query);
    } else {
      /**
       *  there was only this piece code "object = selectedData"
       *  but for orderBy I added this logic
       * * */

      for (let key in selectedData) {
        if (selectedData[key] === "") delete selectedData[key];
      }
      object = selectedData;
    }

    getCatalogProductLoadingTrigger(true);
    if (selectedDataLength === 0 && Object.keys(object).length > 0) {
      updateSelectedDataFromUrl(object);
    }
    catalogId && getCatalogProducts(catalogId, { ...object });
  }, [router.query]);

  return (
    <>
      {productsLoading ? (
        <Loading />
      ) : (
        <div className="catalog">
          {isMobile ? (
            <h1>ХИТЫ ПРОДАЖ</h1>
          ) : (
            <div className="title-section">
              <p>{total} Товаров</p>
              <select
                className="sort-by"
                onChange={(event) => {
                  updateSelectedOrderBy(event.target.value);
                }}
                value={selectedData.orderBy}
              >
                Цена: высокая-низкая
                <option value="">Сортировать: по популярности</option>
                <option value="ASC">Цена: низкая-высокая</option>
                <option value="DESC">Цена: высокая-низкая</option>
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
    </>
  );
};
export default Products;
