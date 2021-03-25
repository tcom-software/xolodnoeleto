import { Scroll } from "@utils";

const basketMoveTo = (isMobile) => {
  const { To } = Scroll;
  isMobile && To(`basketMove`);
};

export default basketMoveTo;
