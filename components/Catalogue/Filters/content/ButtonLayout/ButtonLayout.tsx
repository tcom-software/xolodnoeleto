import React from "react";
import { Button } from "@famous";
import { ButtonLayoutContainer } from "./styles";

const ButtonLayout = ({ isOpenFilters, isMobile, children, filtersToggle }) => {
  return (
    <ButtonLayoutContainer>
      {!isMobile ? (
        <Button
          type={"secondary"}
          color="#565656"
          width={"199px"}
          height={"47px"}
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
            width={"199px"}
            height={"47px"}
            onClick={() => filtersToggle()}
          >
            {isOpenFilters ? `Закрыть` : `Показать все фильтры`}
          </Button>
          <Button
            type={"secondary"}
            color="#565656"
            width={"199px"}
            height={"47px"}
          >
            Очистить фильтр
          </Button>
        </>
      ) : null}
    </ButtonLayoutContainer>
  );
};

export default ButtonLayout;
