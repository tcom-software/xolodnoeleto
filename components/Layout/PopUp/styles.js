import styled from "styled-components";
import theme from "styles/theme";

const PopUpContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: 1;

  .layer {
    position: relative;
    z-index: 90000000000;
    margin: 10px auto 0 auto;
    width: max-content;
    background: #fff;

    & > div {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    overflow-y: scroll;
    .layer {
      width: 95vw;
      & > div {
        height: 98vh;
      }
    }
  }
`;

export { PopUpContainer };
