import styled from "styled-components";
import theme from "styles/theme";

const PopUpContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: 999;

  .layer {
    position: relative;
    z-index: 99;
    margin: 10px auto 0 auto;
    width: max-content;
    background: #fff;

    & > div {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    overflow-y: scroll;
    .layer {
      position: absolute;
      width: 95vw;
      height: min-content;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;

      & > div {
        height: min-content;
      }
    }
  }
`;

export { PopUpContainer };
