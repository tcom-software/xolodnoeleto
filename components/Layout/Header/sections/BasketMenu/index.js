import BasketMenu from "./BasketMenu";
import { connect } from "react-redux";
import { changeOrderStep } from "redux/actions/basketActions";
import { closeModal } from "redux/actions/modalActions";

const mapStateToProps = ({
  basket: { items, total_amount },
  modal: { modalRef, modalType },
}) => ({
  modalRef,
  modalType,
  total_amount,
  basketItems: items,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketMenu);
