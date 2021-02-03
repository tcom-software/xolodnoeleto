import React, { useEffect } from "react";
import theme from "styles/theme";
import Pagination from "../Pagination";
import { GlobalSection } from "@famous";
import Filters from "../Catalog/Filters";

import { useRouter } from "next/router";
import ProductList from "../ProductsList";
import { BrandsProductsContainer } from "./styles";
import TitleNavigation from "../TitleNavigation";
import WrapList from "./components/WrapList";

const BrandProducts = ({ brandProducts, getBrandProducts }) => {
  const router = useRouter();
  const { brandId, page } = router.query;

  useEffect(() => brandId && getBrandProducts(page, brandId), [brandId]);

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
