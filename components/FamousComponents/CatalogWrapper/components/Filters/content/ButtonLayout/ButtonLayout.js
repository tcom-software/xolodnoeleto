import React from "react";
import { Button } from "@famous";
import { useRouter } from "next/router";
import { ButtonLayoutContainer } from "./styles";

const ButtonLayout = ({
  isOpenFilters,
  filtersToggle,
  isMobile,
  children,
  clearFiltersSelectedData,
}) => {
  const router = useRouter();
  const { catalogId } = router.query;

  return (
    <ButtonLayoutContainer>
      {!isMobile ? (
        <Button
          type={"secondary"}
          color="#565656"
          width={"100%"}
          height={"47px"}
          onClick={() => {
            router.push(catalogId);
            clearFiltersSelectedData();
          }}
        >
          Очистить фильтр
        </Button>
      ) : null}

      {/** Filters will be here */}
      {children}
      {/** ######################## */}

      {!isMobile ? (
        <>
          <Button
            type={"with-icon"}
            width={"100%"}
            height={"47px"}
            onClick={() => filtersToggle()}
          >
            {isOpenFilters ? `Закрыть` : `Показать все фильтры`}
          </Button>
          <Button
            type={"secondary"}
            color="#565656"
            width={"100%"}
            height={"47px"}
            onClick={() => {
              router.push(catalogId);
              clearFiltersSelectedData();
            }}
          >
            Очистить фильтр
          </Button>
        </>
      ) : null}
    </ButtonLayoutContainer>
  );
};

export default ButtonLayout;
