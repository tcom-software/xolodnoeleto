import React, { useState } from "react";
import Link from "next/link";
import theme from "styles/theme";
import { connect } from "react-redux";
import BasketMenu from "./BasketMenu";
import { Button, GlobalSection, Input, SvgIcon } from "@atoms";
import { closeModal, openModal } from "redux/actions/modalActions";
import { BottomPanel, CatalogUl, SearchCon, Span, Ul } from "../styles";

const Bottom = ({
  catalog,
  modalType,
  modalRef,
  openModal,
  closeModal,
  basketItemsCount,
}) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      mobilePadding={"12.5px 8px"}
      borderTop={true}
      borderBottom={true}
      webBackground={theme.body.secondBackground}
    >
      <BottomPanel modalType={modalType}>
        <Ul>
          <li
            onClick={() => {
              return modalType == "catalog"
                ? closeModal()
                : openModal("catalog");
            }}
          >
            <SvgIcon
              type="hamburgerMenu"
              width={25}
              height={25}
              color={modalType === "catalog" ? theme.body.primaryColor : "#000"}
            />
            Каталог товаров
            <CatalogUl
              modalType={modalType}
              ref={modalType === "navigation" ? modalRef : null}
            >
              {catalog.map((e, i) => {
                return (
                  <li key={i}>
                    <Link href="">{e}</Link>
                  </li>
                );
              })}
              <SvgIcon
                type="box"
                width={15}
                height={15}
                color={theme.body.primaryColor}
                callback={() => {}}
              />
            </CatalogUl>
          </li>
          <li>% Акции</li>
          <li>Бренды</li>
          <li>
            <SearchCon mobileDisableView={true} isOpenSearch={isOpenSearch}>
              <Input
                search={true}
                svgSize={20}
                width="350px"
                height="35px"
                placeholder={"search"}
                callback={() => setIsOpenSearch(!isOpenSearch)}
              />

              <Span />
              <Span />
              <Span />
              <Span />
              <Span />
              <Span />
            </SearchCon>
          </li>
          <li>
            <SvgIcon type="basket" width={20} height={20} />
          </li>
          <li>
            <Button
              type="with-icon"
              width="190px"
              height="47px"
              onClick={() =>
                modalType == "basket" ? closeModal() : openModal("basket")
              }
            >
              <SvgIcon type="basket" width={20} height={20} />
              Корзина пуста ({basketItemsCount})
            </Button>
            <BasketMenu />
          </li>
          <li>
            <SvgIcon
              type="close"
              width={20}
              height={20}
              callback={() => closeModal()}
            />
          </li>
        </Ul>
      </BottomPanel>
    </GlobalSection>
  );
};

const mapStateToProps = ({
  general: {
    header: { catalog },
  },
  modal: { modalType, modalRef },
  basket: { items },
}) => ({
  catalog,
  modalRef,
  modalType,
  basketItemsCount: Object.values(items)
    .map(({ count }) => count)
    .reduce((acc, next) => (next += acc), 0),
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);
