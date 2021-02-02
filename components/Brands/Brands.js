import React, { useEffect, useState } from "react";
import theme from "styles/theme";
import Pagination from "../Pagination";
import { useRouter } from "next/router";
import Letters from "./components/Letters";
import ProductList from "../ProductsList";
import { BrandsContainer } from "./styles";
import TitleNavigation from "../TitleNavigation";
import BrandsList from "./components/BrandsList";
import SelectedLetters from "./components/SelectedLetters";
import { GlobalSection, SeenProductWrapper } from "@famous";

const Brands = ({ brandsBrandPage, seenProducts, getBrandsWithPage }) => {
  const [selected, setSelected] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getBrandsWithPage(router.query.page || 1, selected);
    // const timeId = setTimeout(function () {
    //   getBrandsWithPage(router.query.page || 1, selected);
    // }, 1300);
    // return () => clearTimeout(timeId);
  }, [selected]);

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
        <Letters selected={selected} setSelected={setSelected} />
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        webPadding={"0 0 30px 0"}
      >
        <BrandsContainer>
          <SelectedLetters selected={selected} setSelected={setSelected} />
          <BrandsList brandsBrandPage={brandsBrandPage} />
        </BrandsContainer>
      </GlobalSection>
      <Pagination
        total={brandsBrandPage?.total}
        page={router.query.page}
        callback={getBrandsWithPage}
      />
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          webPadding={"60px 0"}
          mobilePadding={"20px 0"}
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

export default Brands;
