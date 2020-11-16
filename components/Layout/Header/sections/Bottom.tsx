import React, { useState } from "react";
import Link from "next/link";
import theme from "styles/theme";
import { connect } from "react-redux";
import BasketMenu from "./BasketMenu";
import { Button, GlobalSection, Input, SvgIcon } from "@famous";
import { closeModal, openModal } from "redux/actions/modalActions";
import { BottomPanel, SearchCon, Span, Ul } from "../styles";
import { useSpring, animated } from "react-spring";
import Catalog from "./Catalog";

const Bottom = ({ modalType, openModal, closeModal, basketItemsCount }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const spring: any = useSpring({
    from: { val: 0 },
    to: { val: basketItemsCount },
    config: { duration: 500 },
  });

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
          <li onClick={() => (modalType !== "" ? null : openModal("catalog"))}>
            <SvgIcon
              type="hamburgerMenu"
              width={25}
              height={25}
              color={modalType === "catalog" ? theme.body.primaryColor : "#000"}
            />
            Каталог товаров
            <Catalog />
          </li>
          <li>% Акции</li>
          <li>
            <Link href="/brands">
              <a>Бренды</a>
            </Link>
          </li>
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
            <Link href={"/basket"}>
              <a>
                <SvgIcon type="basket" width={20} height={20} />
              </a>
            </Link>
          </li>
          <li>
            <Button
              type="with-icon"
              width="190px"
              height="47px"
              onClick={() => (modalType !== "" ? null : openModal("basket"))}
            >
              <SvgIcon
                type="basket"
                width={20}
                height={20}
                color={theme.body.primaryColor}
              />
              Корзина пуста (
              <animated.span>
                {spring.val.interpolate((val) => Math.floor(val))}
              </animated.span>
              )
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
  modal: { modalType, modalRef },
  basket: { items },
}) => ({
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
