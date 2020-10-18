import React, { useEffect, useRef } from "react";
import Modals from "./Modals";
import { PopUpContainer } from "./styles";

const PopUp = ({ modalType, setModalRef, closeModal, modalRef }) => {
  const customRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (customRef.current && !customRef.current.contains(event.target)) {
        setTimeout(() => {
          closeModal("");
        }, 200);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [customRef, closeModal]);

  useEffect(() => {
    setModalRef(customRef);
  }, [modalType]);

  switch (modalType) {
    case "catalog":
    case "navigation":
    case "basket":
      return null;
    default:
      const Modal = Modals[modalType];
      return modalType != "" ? (
        <PopUpContainer>
          <Modal modalType={modalType} modalRef={modalRef} />
        </PopUpContainer>
      ) : null;
  }
};

export default PopUp;
