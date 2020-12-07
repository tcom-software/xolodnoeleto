import React, { useEffect } from "react";
import { Loading } from "@famous";
import { useRouter } from "next/router";
import { createObjectFromUrl } from "@utils";
import ProductGridView from "../../ProductGridView";

const Products = ({
  productsLoading,
  isMobile,
  total,
  products,
  selectedData,
  getCatalogueProducts,
  updateSelectedDataFromUrl,
  getCatalogueProductLoadingTrigger,
}) => {
  const router = useRouter();

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
    </>
  );
};
export default Products;
