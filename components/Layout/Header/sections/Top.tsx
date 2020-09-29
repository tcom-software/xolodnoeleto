import { GlobalSection, SvgIcon } from "@atoms";
import { LogoCon, Ul, TopPanel } from "../styles";
import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../../../redux/actions/modalActions";

const Top = ({ navigation, elseRefs, modalType, openModal, closeModal }) => {
  return (
    <GlobalSection background={true}>
      <TopPanel>
        <SvgIcon type="phone" width={23} height={23} />
        <LogoCon isMobile={true}>
          <Link href={""}>
            <>
              <img src="/images/logo/logo.png" alt="sun" />
              <h1>XOLODNOELETO</h1>
            </>
          </Link>
        </LogoCon>
        <SvgIcon
          type="hamburgerMenu"
          width={25}
          height={25}
          callback={() => {
            if (modalType == "navigation") {
              closeModal();
            } else {
              openModal("navigation");
            }
          }}
        />
      </TopPanel>
      <TopPanel whatMenu={modalType} onlyMenu={true}>
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
  },
  modal: { modalType },
}) => ({
  modalType,
  elseRefs,
  navigation,
});
const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Top);
