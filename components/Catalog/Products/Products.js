import React from "react";
import { Loading } from "@famous";
import { useRouter } from "next/router";
import Pagination from "../../Pagination";
import { DataEmpty } from "../../FamousComponents";
import ProductGridView from "../../ProductGridView/index";

const Products = ({
  productsLoading,
  isMobile,
  total,
  products,
  selectedData,
  updateSelectedOrderBy,
  updateSelectedDataPage,
  children,
}) => {
  const router = useRouter();

  if (products.length === 0) {
    return <DataEmpty title={"Нет продуктов"} />;
  }
  return (
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

      <Pagination
        total={total}
        page={router.query.page}
        callback={updateSelectedDataPage}
      />
      {productsLoading ? <Loading /> : children}
      <Pagination
        total={total}
        page={router.query.page}
        callback={updateSelectedDataPage}
      />
    </div>
  );
};
export default Products;
