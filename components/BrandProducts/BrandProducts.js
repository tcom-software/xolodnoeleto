import React, { useEffect } from "react";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import Filters from "../Catalog/Filters";

import { useRouter } from "next/router";
import ProductList from "../ProductsList";
import WrapList from "./components/WrapList";
import TitleNavigation from "../TitleNavigation";
import { BrandsProductsContainer } from "./styles";
import { createObjectFromUrl, createUrlFromObject } from "../../utils";
import { updateSelectedDataFromUrl } from "../../redux/actions/catalogActions";

const BrandProducts = ({
  brandProducts,
  getBrandProducts,
  selectedData,
  clearFiltersSelectedData,
}) => {
  const router = useRouter();
  const { brandId, page } = router.query;

  useEffect(() => {
    brandId && getBrandProducts(page, brandId);
    return () => clearFiltersSelectedData();
  }, [brandId]);

  useEffect(() => {
    if (brandId !== undefined) {
      const url = createUrlFromObject(selectedData, brandId);
      if (url.indexOf("?") != -1 && url.indexOf("=") != -1) {
        router.push(url);
      }
    }
  }, [selectedData]);

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

    if (selectedDataLength === 0 && Object.keys(object).length > 0) {
      updateSelectedDataFromUrl(object);
    }
    if (brandId) {
      brandId && getBrandProducts(page, brandId, { ...object });
      // catalogId && getCatalogProducts(catalogId, { ...object });
    }
  }, [router.query]);

  if (brandProducts === null) {
    return null;
  }

  return (
    <>
      <TitleNavigation title="бренды" currentPage="Бренды" />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        webPadding={"20px 0 10px 0"}
      >
        <BrandsProductsContainer>
          <div className="top-side">
            <Filters />
            <WrapList
              brandProducts={brandProducts}
              getBrandProducts={getBrandProducts}
            >
              <ProductList
                superPrice={false}
                title={""}
                mobileType={"scroll"}
                products={brandProducts?.products}
              />
            </WrapList>
          </div>
        </BrandsProductsContainer>
      </GlobalSection>
    </>
  );
};

export default BrandProducts;
