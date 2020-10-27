import React from "react";
import Link from "next/link";
import theme from "styles/theme";
import { connect } from "react-redux";
import { GlobalSection, SvgIcon, SvgIconAnim } from "@famous";
import { LogoCon, Ul, TopPanel } from "../styles";
import { openModal, closeModal } from "redux/actions/modalActions";

const Top = ({
  navigation,
  elseRefs,
  modalType,
  openModal,
  modalRef,
  isMobile,
}) => {
  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      borderTop={false}
      borderBottom={false}
      mobileBackground={theme.body.background}
      webBackground={theme.body.secondBackground}
    >
      <TopPanel>
        <SvgIcon
          type="phone"
          width={23}
          height={23}
          callback={() => (modalType !== "" ? null : openModal("CallBack"))}
        />
        <LogoCon isMobile={true}>
          <Link href={"/"}>
            <a>
              {isMobile ? (
                <SvgIconAnim
                  type="logo"
                  width={150}
                  height={24}
                  color="black"
                  duration={20000}
                />
              ) : null}

              <img src="/images/logo/logo.png" alt="sun" />
              <h1>XOLODNOELETO</h1>
            </a>
          </Link>
        </LogoCon>
        <SvgIcon
          type="hamburgerMenu"
          width={25}
          height={25}
          callback={() => (modalType !== "" ? null : openModal("navigation"))}
        />
      </TopPanel>
      <TopPanel
        modalType={modalType}
        ref={modalType === "catalog" ? modalRef : null}
      >
        <Ul>
          {[...elseRefs, ...navigation].map((item, i) => {
            return (
              <li key={i}>
                <Link href={""}>{item}</Link>
              </li>
            );
          })}
        </Ul>
      </TopPanel>
    </GlobalSection>
  );
};

const mapStateToProps = ({
  general: {
    header: { navigation, elseRefs },
    isMobile,
  },
  modal: { modalType, modalRef },
}) => ({
  isMobile,
  modalType,
  elseRefs,
  modalRef,
  navigation,
});
const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Top);
