import React from "react";
import Pagination from "../../../Pagination";

import { useRouter } from "next/router";

const WrapList = ({ children, brandProducts, getBrandProducts }) => {
  const router = useRouter();
  const { brandId, page } = router.query;

  return (
    <div className="product-pagination-sorting">
      <div className="title-section">
        <p>{brandProducts?.products_info?.total} Товаров</p>
        <select
          className="sort-by"
          // onChange={(event) => {
          //   updateSelectedOrderBy(event.target.value);
          // }}
          // value={selectedData.orderBy}
        >
          Цена: высокая-низкая
          <option value="">Сортировать: по популярности</option>
          <option value="ASC">Цена: низкая-высокая</option>
          <option value="DESC">Цена: высокая-низкая</option>
        </select>
      </div>
      <Pagination
        total={brandProducts?.products_info.total}
        page={router.query.page}
        callback={(page) => getBrandProducts(page, brandId)}
      />
      {children}
      <Pagination
        total={brandProducts?.products_info.total}
        page={router.query.page}
        callback={(page) => getBrandProducts(page, brandId)}
      />
    </div>
  );
};

export default WrapList;
