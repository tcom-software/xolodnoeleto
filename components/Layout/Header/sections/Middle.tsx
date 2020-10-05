import {
  LogoCon,
  MainPanel,
  PhonesCon,
  SearchAndFavoriteCon,
  SearchCon,
} from "../styles";
import Link from "next/link";
import { GlobalSection, Input, SvgIcon } from "@atoms";
import React from "react";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../../../redux/actions/modalActions";
import theme from "../../../../styles/theme";

const Middle = ({ phones, openModal, closeModal }) => {
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
          <Link href={""}>
            <>
              <img src="/images/logo/logo.png" alt="sun" />
              <h1>XOLODNOELETO</h1>
            </>
          </Link>
        </LogoCon>
        <PhonesCon>
          <hgroup>
            {phones.map((e, i) => (
              <h2 key={i}>{e}</h2>
            ))}
          </hgroup>
          <p
            onClick={() => {
              console.log(11111);
              openModal("CallBack");
            }}
          >
            Заказать обратный звонок
          </p>
        </PhonesCon>
        <SearchCon>
          <Input
            search={true}
            placeholder={"search"}
            svgSize={16}
            width="100%"
            height="35px"
          />
        </SearchCon>
        <SearchAndFavoriteCon customMargin={true}>
          <SvgIcon type={"compare"} width={20} height={13} />
          Сравнить
        </SearchAndFavoriteCon>
        <SearchAndFavoriteCon>
          <SvgIcon type={"favorite"} width={19.5} height={25} />
          Избранные
        </SearchAndFavoriteCon>
      </MainPanel>
    </GlobalSection>
  );
};

const mapStateToProps = ({ general: { phones } }) => ({
  phones,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Middle);
