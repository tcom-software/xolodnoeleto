import React from "react";
import Link from "next/link";
import { Scroll } from "@utils";
import theme from "styles/theme";
import { connect } from "react-redux";
import { LogoCon, Ul, TopPanel } from "../styles";
import { openModal, closeModal } from "redux/actions/modalActions";
import { GlobalSection, SvgIcon, SvgIconFillingAnim } from "@famous";

const Top = ({
  navigation,
  elseRefs,
  modalType,
  openModal,
  modalRef,
  isMobile,
}) => {
  const { To } = Scroll;

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
                <SvgIconFillingAnim
                  type="logoMobile"
                  width={150}
                  height={44}
                  duration={2000}
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
        ref={modalType === "navigation" ? modalRef : null}
      >
        <Ul>
          {[...elseRefs, ...navigation].map(({ title, url }, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  openModal("");
                  To("Default");
                }}
              >
                <Link href={url}>
                  <a>{title}</a>
                </Link>
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
