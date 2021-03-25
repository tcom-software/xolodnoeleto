import React, { useState } from "react";
import Link from "next/link";
import theme from "styles/theme";
import { connect } from "react-redux";
import { openModal } from "redux/actions/modalActions";
import SvgIconWaveAnim from "../../../FamousComponents/SvgIconWaveAnim";
import { GlobalSection, SvgIcon, SearchResult, OurPhones } from "@famous";
import { LogoCon, MainPanel, PhonesCon, SearchAndFavoriteCon } from "../styles";

const Middle = ({
  phones,
  openModal,
  modalType,
  compareProducts,
  favoriteProducts,
}) => {
  const [open, setOpen] = useState(false);
  const compareLength = Object.keys(compareProducts).length;
  const FavoriteLength = Object.keys(favoriteProducts).length;

  return (
    <GlobalSection
      isWeb={true}
      isMobile={false}
      borderTop={false}
      borderBottom={false}
      webBackground={theme.body.background}
    >
      <MainPanel isMobileHidden={true}>
        <LogoCon>
          <Link href="/">
            <a
              onClick={() => {
                setOpen(!open);
              }}
            >
              <SvgIconWaveAnim
                type="logo"
                width={150}
                height={44}
                animation={true}
                reverse={open}
                animationUniqId="logo"
              />

              <img src="/images/logo/logo.png" alt="sun" />
              <h1>XOLODNOELETO</h1>
            </a>
          </Link>
        </LogoCon>
        <PhonesCon>
          <OurPhones phones={phones} />
          <p onClick={() => (modalType !== "" ? null : openModal("CallBack"))}>
            Заказать обратный звонок
          </p>
        </PhonesCon>
        <SearchResult where={"header-middle"} />
        <SearchAndFavoriteCon customMargin={true}>
          <Link href={"/compare"}>
            <a>
              <div>
                {compareLength > 0 ? (
                  <span className="compare-count">{compareLength}</span>
                ) : null}

                <SvgIcon type={"compare"} width={20} height={13} />
              </div>
              Сравнить
            </a>
          </Link>
        </SearchAndFavoriteCon>
        <SearchAndFavoriteCon>
          <Link href={"/favorites"}>
            <a>
              <div>
                {FavoriteLength > 0 ? (
                  <span className="favorite-count">{FavoriteLength}</span>
                ) : null}

                <SvgIcon type={"favorite"} width={19.5} height={25} />
              </div>
              Избранные
            </a>
          </Link>
        </SearchAndFavoriteCon>
      </MainPanel>
    </GlobalSection>
  );
};

const mapStateToProps = ({
  general: { phones, isMobile },
  modal: { modalType },
  compare: { compareProducts },
  favorite: { favoriteProducts },
}) => ({
  modalType,
  phones,
  isMobile,
  compareProducts,
  favoriteProducts,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Middle);
