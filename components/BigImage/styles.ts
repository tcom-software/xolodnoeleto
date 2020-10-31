import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: scale(0);
  }
  90% {
      transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

const BigImageContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: #000000c7;

  .content {
    text-align: center;
    margin-top: 25px;

    img {
      pointer-events: none;
      width: 40%;
      animation: ${rotate} 0.5s ease forwards;
    }
  }

  @media (max-width: 768px) {
    .content {
      img {
        pointer-events: none;
        width: 80%;
        animation: ${rotate} 0.5s ease forwards;
      }
    }
  }
`;

export { BigImageContainer };
