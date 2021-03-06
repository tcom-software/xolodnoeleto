import styled from "styled-components";

const ReviewListContainer = styled.div`
  overflow: hidden;

  .header {
    text-align: center;
    font-size: 24px;
    font-weight: 80;
    margin-top: 20px;
  }
  .title {
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .slick-slider {
    position: relative;
    & > span {
      background: #fff;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
      position: absolute;
      top: calc(50% - 30px);
      bottom: 50%;
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 43px;
      width: 40px;

      &:nth-of-type(1) {
        left: 0;
      }
      &:nth-of-type(2) {
        right: 0;
      }
    }

    .slick-list {
      width: 80%;
      margin: 0 auto;
    }
    .slick-slide {
      width: min-content;
    }

    @media (max-width: 768px) {
      .slick-list {
        width: 100%;
        padding: 0 12vw 0 14vw;
      }
    }
  }
  & > button {
    margin: 10px auto;
    font-size: 18px;
    font-weight: 800;
  }
`;

export { ReviewListContainer };
