import { Button, GlobalSection, Input, SvgIcon } from "@atoms";
import { BottomPanel, CatalogUl, SearchCon, Span, Ul } from "../styles";
import theme from "styles/theme";
import Link from "next/link";
import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../../../redux/actions/modalActions";

const Bottom = ({ catalog, modalType, openModal, closeModal }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <GlobalSection>
      <BottomPanel whatMenu={modalType}>
        <Ul>
          <li
            onClick={() => {
              if (modalType == "catalog") {
                closeModal();
              } else {
                openModal("catalog");
              }
            }}
          >
            <SvgIcon
              type="hamburgerMenu"
              width={25}
              height={25}
              color={modalType === "catalog" ? theme.body.primaryColor : "#000"}
              callback={() => {}}
            />
            Каталог товаров
            <CatalogUl whatMenu={modalType}>
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
                width={350}
                height={35}
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
            <Button type="with-icon" width={190} height={47}>
              <SvgIcon type="basket" width={20} height={20} />
              Корзина пуста
            </Button>
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
  modal: { modalType },
}) => ({
  catalog,
  modalType,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);
