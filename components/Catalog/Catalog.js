import React, { useEffect, useRef } from "react";
import Filters from "./Filters";
import theme from "styles/theme";
import Products from "./Products";
import { useRouter } from "next/router";
import ProductList from "../ProductsList";
import { CatalogContainer } from "./styles";
import TitleNavigation from "../TitleNavigation";
import { GlobalSection, SeenProductWrapper } from "@famous";
import { createUrlFromObject, createObjectFromUrl } from "@utils";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Catalog = ({
  selectedData,
  getCatalogFilters,
  seenProducts,
  updateSelectedDataPage,
  getCatalogProducts,
  getCatalogProductLoadingTrigger,
  updateSelectedDataFromUrl,
  clearFiltersSelectedData,
  clearFilters,
}) => {
  const router = useRouter();
  const { catalogId } = router.query;
  const prevCount = usePrevious(router.query);

  useEffect(() => {
    if (catalogId !== undefined) {
      const url = createUrlFromObject(selectedData, catalogId);
      if (url.indexOf("?") != -1 && url.indexOf("=") != -1) {
        router.push(url);
      }
    }
  }, [selectedData]);

  useEffect(() => {
    router.query.page && updateSelectedDataPage(router.query.page);
    catalogId && getCatalogFilters(catalogId);

    clearFiltersSelectedData();
    clearFilters();

    const checkIfUrlIsEmpty = { ...router.query };
    delete checkIfUrlIsEmpty["catalogId"];

    const checkIfSelectedDataHasCashIfUrlWasCleared = { ...selectedData };
    delete checkIfSelectedDataHasCashIfUrlWasCleared["page"];

    if (
      !!checkIfUrlIsEmpty &&
      JSON.stringify(checkIfSelectedDataHasCashIfUrlWasCleared) !==
        JSON.stringify({}) &&
      JSON.stringify(checkIfUrlIsEmpty) === JSON.stringify(prevCount)
    ) {
      clearFiltersSelectedData();
    }

    return () => {
      router.query.catalogId && updateSelectedDataPage(1);
      clearFilters();
      clearFiltersSelectedData();
    };
  }, [catalogId]);

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
      <TitleNavigation title="Каталог" currentPage="Каталог" />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        mobilePadding={"10px 8px"}
      >
        <CatalogContainer>
          <Filters />
          <Products />
        </CatalogContainer>
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webPadding={"35px 0px"}
          webBackground={theme.body.background}
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

export default Catalog;
