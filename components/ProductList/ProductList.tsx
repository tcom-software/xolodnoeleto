import React from "react";
import { GlobalSection } from "@atoms";
import theme from "../../styles/theme";
import { Container, Title, ListContainer } from "./styles";

const ProductList = ({ title, children, mobileType }) => {
  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      webBackground={theme.body.background}
    >
      <Container>
        <Title>{title}</Title>
        <ListContainer mobileType={mobileType}>{children}</ListContainer>
      </Container>
    </GlobalSection>
  );
};

export default ProductList;
