import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ProductGridView from "../ProductGridView";
import CatalogWrapper from "../FamousComponents/CatalogWrapper";
import { createUrlFromObject, createObjectFromUrl, doJSON } from "@utils";

function usePreviousQuery(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Catalog = ({
  products,
  selectedData,
  clearFilters,
  getBrandProducts,
  getCatalogProducts,
  updateSelectedDataPage,
  clearFiltersSelectedData,
  updateSelectedDataFromUrl,
  getCatalogProductLoadingTrigger,
}) => {
  const router = useRouter();
  const { catalogId, brandId, page } = router.query;
  const prevQuery = usePreviousQuery(router.query);

  useEffect(() => {
    if (catalogId || brandId) {
      const url = createUrlFromObject(selectedData, catalogId || brandId);
      if (url.indexOf("?") != -1 && url.indexOf("=") != -1) {
        router.push(url);
      }
    }
  }, [selectedData]);

  useEffect(() => {
    page && updateSelectedDataPage(page);
    clearFiltersSelectedData();
    clearFilters();

    return () => {
      catalogId || brandId && updateSelectedDataPage(1);
      clearFilters();
      clearFiltersSelectedData();
    };
  }, [catalogId , brandId]);

  useEffect(() => {
    let object = {};

    const selectedDataLength = Object.keys(selectedData).length;
    if (
      selectedDataLength === 0 ||
      (selectedDataLength === 1 && selectedData.page)
    ) {
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

    if (doJSON(prevQuery) != doJSON(router.query)) {
      if (prevQuery?.page === router.query?.page) updateSelectedDataPage(1);

      getCatalogProductLoadingTrigger(true);
      if (selectedDataLength === 0 && Object.keys(object).length > 0) {
        updateSelectedDataFromUrl(object);
      }

      catalogId && getCatalogProducts(catalogId, { ...object });
      brandId &&
        getBrandProducts(
          prevQuery?.page === router.query?.page ? 1 : page,
          brandId,
          { ...object }
        );
    }
  }, [router.query]);

  return (
    <CatalogWrapper>
      <div className="products">
        {Object.values(products).map((item, index) => {
          return <ProductGridView key={index} item={item} />;
        })}
      </div>
    </CatalogWrapper>
  );
};

export default Catalog;
