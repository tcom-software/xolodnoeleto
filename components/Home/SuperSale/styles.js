import styled from "styled-components";
import theme from "styles/theme";

const SuperSaleContainer = styled.section`
  background: radial-gradient(50% 42.7% at 50% 50%, #ffffff 0%, #e5e5e5 100%);
  padding: 60px 0;

  @keyframes StarsAnim {
    from {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(0deg) scale(0.5);
    }
    to {
      transform: rotate(360deg) scale(1.07);
    }
  }

  &:hover {
    .container {
      & > .center {
        .main-svg {
          transition: all 1s ease-in;
          transform: scale(1.04);
        }

        .like-star-one,
        .like-star-five,
        .like-star-eight {
          animation-play-state: running;
        }
      }
    }
  }

  .container {
    width: max-content;
    margin: 0 auto;

    .center {
      position: relative;
      button {
        margin: 0px auto;
      }
      .super-sale-text {
        position: absolute;
        top: -5px;
        left: -40px;
        right: 0;
        margin: auto;
      }
      .point-group-left {
        position: absolute;
        width: 150px;
        height: 150px;
        top: 40px;
        left: -60px;
        transform: rotate(180deg);
      }
      .point-group-right {
        position: absolute;
        width: 150px;
        height: 150px;
        top: 140px;
        right: -13px;
      }

      .main-svg {
        transition: all 1s ease-in;
        transform: scale(1);
        width: 386px;
        height: 300px;
      }

      .like-star-one,
      .like-star-five,
      .like-star-eight {
        animation: StarsAnim 3s linear infinite;
        animation-play-state: paused;
      }

      .rectangular-rectangle-container-first {
      }
      .rectangular-rectangle-container-second {
      }
    }
  }

  /****************************************/

  /****************************************/
  /****************************************/
  .points-first,
  .points-second {
  }
  .points-first {
    width: 100px;
    height: 100px;
  }
  .points-second {
    width: 100px;
    height: 100px;
  }
  /****************************************/
  /****************************************/

  /****************************************/
  /****************************************/

  .circle-container-first {
    position: relative;
    width: max-content;
    height: max-content;

    .circle {
      position: relative;
      z-index: 2;
      width: 16px;
      height: 16px;
    }
    .background {
      position: absolute;
      background: orange;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
    }
  }

  /****************************************/
  /****************************************/
  .rectangular-rectangle-container-first {
    position: absolute;
    bottom: 85px;
    left: -60px;

    .rectangular-rectangle {
      position: absolute;
      z-index: 1;
      top: -6px;
      left: -16px;
    }
    .background {
      top: 7px;
      left: 5px;
      width: 50px;
      height: 14px;
      background: orangered;
      transform: skewX(-40deg);
    }
  }
  .rectangular-rectangle-container-second {
    position: absolute;
    bottom: 248px;
    right: -33px;

    .rectangular-rectangle {
      position: absolute;
      z-index: 1;
      top: 6px;
      left: -5px;
    }
    .background {
      top: 7px;
      left: 5px;
      width: 50px;
      height: 14px;
      background: linear-gradient(
        90deg,
        #fdd500 -0.08%,
        #fdd200 6.62%,
        #ffa800 100%
      );
      transform: skewX(-40deg);
    }
  }
  @media (max-width: ${theme.mobileMedia.size}) {
    .container {
      .center {
        .super-sale-text {
          width: 150px;
          top: 10px;
          left: 0;
        }
        .main-svg {
          width: 206px !important;
          height: 200px !important;
        }
        .point-group-left {
          width: 80px;
          height: 80px;
          top: 47px;
          left: -45px;
        }
        .point-group-right {
          width: 80px;
          height: 80px;
          top: 100px;
          right: -10px;
        }
        .like-star-two {
          left: -33px;
          top: 24px;
        }
        .like-star-six {
          right: 80px;
          top: -13px;
        }
        .rectangular-rectangle-container-first,
        .rectangular-rectangle-container-second {
          display: none;
        }
      }
    }
  }
`;

export { SuperSaleContainer };
