import React from "react";
import { CatalogueContainer } from "./styles";
import { useRouter } from "next/router";
import { GlobalSection } from "@atoms";
import Filters from "./Filters";
import theme from "styles/theme";

const Catalogue = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      webBackground={theme.body.secondBackground}
    >
      <CatalogueContainer>
        <Filters />
      </CatalogueContainer>
    </GlobalSection>
  );
};

export default Catalogue;
