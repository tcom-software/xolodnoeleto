import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: max-content;

  .air-cond {
    position: relative;
    width: max-content;
    margin: 20px auto;

    .first-svg {
      width: 70px;
      height: 70px;
    }
    .second-svg {
      transform-origin: center center;
      position: absolute;
      top: 7px;
      left: 1px;
      right: 0;
      margin: 0 auto;
      width: 40px;
      height: 40px;
      animation: loop 0.1s linear infinite;
    }
  }

  @keyframes loop {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { LoadingContainer };
