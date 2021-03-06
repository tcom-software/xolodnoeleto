import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  width: 100%;
  min-height: 0;
  max-height: 415px;
  margin: 10px auto;
  overflow: hidden;

  div {
    height: 100%;
  }
  img {
    width: 100%;
    object-fit: contain;
    // min-height: 315px;
    // height: 100%;
    // max-height: 415px;
  }
  .slick-slider {
    max-height: 415px;
    span {
      position: absolute;
      z-index: 1;
      top: 45%;
      bottom: 45%;
      height: min-content;

      &:before {
        display: none;
      }
      &:first-of-type {
        left: 15px;
      }
      &:last-of-type {
        right: 15px;
      }
    }
    .slick-list {
      .slick-track {
      }
    }
  }
  .slick-dots {
    bottom: 0;
    li {
      button:before {
        opacity: 1;
        color: white;
      }
      &.slick-active > button:before {
        opacity: 1;
        color: #5b5b5b;
      }
    }
  }

  @media (max-width: ${theme.mobileMedia.size}) {
    width: 100%;
    .slick-slider {
      //height: 363px;
    }
  }
`;

const Arrows = styled.span``;

export { Container, Arrows };
