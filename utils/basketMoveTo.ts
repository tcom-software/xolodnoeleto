import { Scroll } from "@utils";

const basketMoveTo = (nextStep) => {
  const { To } = Scroll;
  To(`basket${nextStep}`);
};
export default basketMoveTo;
