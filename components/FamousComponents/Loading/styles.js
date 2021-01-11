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
      animation: loop 5s linear infinite;
    }
  }

  /*
  .second-svg > g {
    animation: hot 10s infinite;
  }
  @keyframes hot {
    0% {
      fill: #fbefef;
    }
    5% {
      fill: #e0e0f8;
    }
    10% {
      fill: #cecef6;
    }
    15% {
      fill: #a9a9f5;
    }
    20% {
      fill: #8181f7;
    }
    25% {
      fill: #5858fa;
    }
    30% {
      fill: #2e2efe;
    }
    35% {
      fill: #0000ff;
    }
    40% {
      fill: #0101df;
    }
    45% {
      fill: #0404b4;
    }
    50% {
      fill: #0a0a2a;
    }
    55% {
      fill: #2a0a0a;
    }
    60% {
      fill: #3b0b0b;
    }
    65% {
      fill: #610b0b;
    }
    70% {
      fill: #8a0808;
    }
    75% {
      fill: #b40404;
    }
    80% {
      fill: #df0101;
    }
    85% {
      fill: #fe2e2e;
    }
    90% {
      fill: #fa5858;
    }
    95% {
      fill: #f5a9a9;
    }
    100% {
      fill: #fbefef;
    }
  }*/

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
