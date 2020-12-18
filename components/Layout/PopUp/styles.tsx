import styled from "styled-components";
import theme from "styles/theme";

const PopUpContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #fff;
  width: max-content;
  z-index: 9;
  & > div {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    width: 90%;
  }
`;

export { PopUpContainer };
