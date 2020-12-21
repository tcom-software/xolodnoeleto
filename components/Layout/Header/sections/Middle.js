import React, { useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import theme from "styles/theme";
import { GlobalSection, SvgIcon, SearchResult } from "@famous";
import { openModal } from "redux/actions/modalActions";
import SvgIconWaveAnim from "../../../FamousComponents/SvgIconWaveAnim";
import { LogoCon, MainPanel, PhonesCon, SearchAndFavoriteCon } from "../styles";

const Middle = ({ phones, openModal, modalType, isMobile }) => {
  const [open, setOpen] = useState(false);

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
                height={24}
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
          <hgroup>
            {phones.map((e, i) => (
              <h2 key={i}>{e}</h2>
            ))}
          </hgroup>
          <p onClick={() => (modalType !== "" ? null : openModal("CallBack"))}>
            Заказать обратный звонок
          </p>
        </PhonesCon>
        <SearchResult where={"header-middle"} />
        <SearchAndFavoriteCon customMargin={true}>
          <Link href={"/compare"}>
            <a>
              <SvgIcon type={"compare"} width={20} height={13} />
              Сравнить
            </a>
          </Link>
        </SearchAndFavoriteCon>
        <SearchAndFavoriteCon>
          <Link href={"/favorites"}>
            <a>
              <SvgIcon type={"favorite"} width={19.5} height={25} />
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
}) => ({
  modalType,
  phones,
  isMobile,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Middle);
